export default function calculateTime(unixtime) {
    console.log("unixtime",unixtime);
    if(unixtime){
        var date = unixtime;
    }else{
        var date = new Date();
    }

  // Get the various components of the date
  const year = date.getFullYear();
  const month = months[date.getMonth()]; // Month is 0-indexed, so we add 1
  const currDate = date.getDate();
  const am_pm = date.getHours() > 12 ? "PM" : "AM";
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const day = days[date.getDay()];

  const dateToday = `${day}, ${currDate} ${month} ${year}`;
  const timeNow = `${hours}:${minutes}:${seconds} ${am_pm}`;

  return { dateToday, timeNow };
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
