const input = [
  { ip: "22.22.22.22", timestamp: "3/11/2020 02:02:58", amount: 7.0 },
  { ip: "11.11.11.11", timestamp: "3/11/2020 02:12:32", amount: 6.5 },
  { ip: "11.11.11.11", timestamp: "3/11/2020 02:13:11", amount: 7.25 },
  { ip: "44.44.44.44", timestamp: "3/11/2020 02:13:54", amount: 8.75 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 05:02:45", amount: 11.0 },
  { ip: "44.44.44.44", timestamp: "3/11/2020 06:32:42", amount: 5.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 06:35:12", amount: 2.0 },
  { ip: "11.11.11.11", timestamp: "3/11/2020 06:45:01", amount: 12.0 },
  { ip: "11.11.11.11", timestamp: "3/11/2020 06:59:59", amount: 11.75 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 07:01:53", amount: 1.0 },
  { ip: "11.11.11.11", timestamp: "3/11/2020 07:02:54", amount: 4.5 },
  { ip: "33.33.33.33", timestamp: "3/11/2020 07:02:54", amount: 15.75 },
  { ip: "66.66.66.66", timestamp: "3/11/2020 07:02:54", amount: 14.25 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 07:03:15", amount: 12.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 08:02:22", amount: 3.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 09:41:50", amount: 4.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 10:02:54", amount: 5.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 11:05:35", amount: 10.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 13:02:21", amount: 6.0 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 13:02:40", amount: 8.0 },
  { ip: "44.44.44.44", timestamp: "3/11/2020 13:02:55", amount: 8.0 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 13:33:34", amount: 8.0 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 13:42:24", amount: 8.0 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 13:47:44", amount: 6.25 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 14:02:54", amount: 4.25 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 14:03:04", amount: 5.25 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 15:12:55", amount: 6.25 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 16:02:36", amount: 8.0 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 16:22:11", amount: 8.5 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 17:18:19", amount: 11.25 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 18:19:20", amount: 9.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 23:59:59", amount: 9.0 },
];

const output = [
  { ip: "11.11.11.11", timestamp: "3/11/2020 02:13:11", amount: 7.25 },
  { ip: "44.44.44.44", timestamp: "3/11/2020 02:13:54", amount: 8.75 },
  { ip: "44.44.44.44", timestamp: "3/11/2020 06:32:42", amount: 5 },
  { ip: "11.11.11.11", timestamp: "3/11/2020 06:45:01", amount: 12 },
  { ip: "11.11.11.11", timestamp: "3/11/2020 07:02:54", amount: 4.5 },
  { ip: "33.33.33.33", timestamp: "3/11/2020 07:02:54", amount: 15.75 },
  { ip: "66.66.66.66", timestamp: "3/11/2020 07:02:54", amount: 14.25 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 13:02:40", amount: 8 },
  { ip: "44.44.44.44", timestamp: "3/11/2020 13:02:55", amount: 8 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 14:03:04", amount: 5.25 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 15:12:55", amount: 6.25 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 16:22:11", amount: 8.5 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 17:18:19", amount: 11.25 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 18:19:20", amount: 9 },
];

module.exports = {
  input: input,
  output: output,
};