const getClicksSubset = (clicks) => {
  let result = {};
  let IP_counter = {};
  let final_set = [];
  let result_set = [];

  let prev_time = -1;
  let prev_date = -1;

  // Iterating over each occurrence of the object
  clicks.forEach((element) => {
    let { present_time, present_date } = getTime(element);

    if (prev_date != -1 && prev_date != present_date) {
      //check for different dates
      final_set = final_set.concat(Object.values(result));
      final_set = removeMoreThanTenIP(final_set, IP_counter);
      result_set = result_set.concat(final_set); // concatenate the final result into one array
      final_set = [];
      IP_counter = {};
      result = {};
      prev_time = -1;
      prev_date = -1;
      result = getResult(result, IP_counter, element);
    } else {
      if (prev_time == -1 || present_time == prev_time) {
        result = getResult(result, IP_counter, element);
      } else {
        final_set = final_set.concat(Object.values(result));
        result = {};
        result = getResult(result, IP_counter, element);
      }
      prev_time = present_time;
    }
    prev_date = present_date;
  });
  final_set = final_set.concat(Object.values(result));
  final_set = removeMoreThanTenIP(final_set, IP_counter);
  result_set = result_set.concat(final_set); // concatenate the final result into one array
  return result_set; // the final subset of given input set
};

// function for returning the hours and time period
const getTime = (element) => {
  let present_time = new Date(element.timestamp).getHours();
  let present_date = new Date(element.timestamp).toLocaleDateString();
  return { present_time, present_date };
};

// Removing IP for more than 10 clicks
const removeMoreThanTenIP = (final_set, IP_counter) => {
  let updatedResult = [];
  for (var i = 0; i < final_set.length; i++) {
    let IP = final_set[i].ip;
    let count = IP_counter[IP];
    if (count <= 10) {
      updatedResult.push(final_set[i]);
    }
  }
  return updatedResult;
};

const getResult = (result, IP_counter, element) => {
  // Check & updates the IP count in IP_counter or adds the IP if not present
  let isIpPresent = IP_counter.hasOwnProperty(element.ip);
  if (isIpPresent) {
    let count = ++IP_counter[element.ip];
    IP_counter[element.ip] = count;
  } else {
    IP_counter[element.ip] = 1;
  }
  if (!result.hasOwnProperty(element.ip)) {
    result[element.ip] = element;
  } else {
    if (result[element.ip].amount < element.amount) {
      // Amount of current IP > existing Amounts, then replaces the existing object for IP within given hour.
      result[element.ip] = element;
    } else if (result[element.ip].amount == element.amount) {
      // Amounts are equal, record the earlier timestamp
      if (
        new Date(element.timestamp) < new Date(result[element.ip].timestamp)
      ) {
        result[element.ip] = element;
      }
    }
  }
  return result;
};

module.exports = {
  clicksSubset: getClicksSubset,
};
