

// current datetime string in America/Chicago timezone
let chicago_datetime_str = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
});

// create new Date object
let date_chicago = new Date(chicago_datetime_str);
console.log(date_chicago.getHours());

// year as (YYYY) format
let year = date_chicago.getFullYear();

// month as (MM) format
let month = ("0" + (date_chicago.getMonth() + 1)).slice(-2);

// date as (DD) format
let date = ("0" + date_chicago.getDate()).slice(-2);
console.log(date);

// date time in YYYY-MM-DD format
let date_time = year + "-" + month + "-" + date;

console.log(date_time);

