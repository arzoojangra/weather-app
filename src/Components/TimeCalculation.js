const dateAndTime = {};

dateAndTime.calculateTime= (unixtime, timezone) => {
  unixtime = (unixtime + timezone)* 1000;
  const date = new Date(unixtime);
  let hours = date.getUTCHours() > 12 ? date.getUTCHours() - 12 : date.getUTCHours();
  hours = hours < 10 ? `0${hours}` : hours;
  const am_pm = dateAndTime.calculateAmPm(date);
  const minutes = date.getUTCMinutes() < 10 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes();
  const time = `${hours}:${minutes} ${am_pm}`;
  return time;
}

dateAndTime.calculateTimeWithoutTimezone= (unixtime) => {
  unixtime = unixtime* 1000;
  const date = new Date(unixtime);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes() < 10 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes();
  const time = `${hours}:${minutes}`;
  return time;
}

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

dateAndTime.calculateDate = (unixtime) => {
  const date = new Date(unixtime * 1000);
  const year = date.getUTCFullYear();
  const month = months[date.getUTCMonth()]; 
  const currDate = date.getUTCDate();
  const day = days[date.getUTCDay()];
  const dateToday = `${day}, ${currDate} ${month} ${year}`;
  return dateToday;
}

dateAndTime.calculateAmPm = (date) => {
  const am_pm = date.getUTCHours() > 11 ? "PM" : "AM";
  return am_pm;
}

module.exports = dateAndTime;