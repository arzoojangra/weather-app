const dateAndTime = {};

dateAndTime.calculateTime= (unixtime) => {
  const date = new Date(unixtime * 1000);
  const am_pm = date.getHours() > 12 ? "PM" : "AM";
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const time = `${hours}:${minutes} ${am_pm}`;
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
  const year = date.getFullYear();
  const month = months[date.getMonth()]; 
  const currDate = date.getDate();
  const day = days[date.getDay()];
  const dateToday = `${day}, ${currDate} ${month} ${year}`;
  return dateToday;
}

module.exports = dateAndTime;