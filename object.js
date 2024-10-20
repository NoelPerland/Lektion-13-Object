//CRUD

//CREATE
const weekdays = { mon: 1, tue: 2, wed: 3 };

//READ
const firstDay = weekdays.mon;
const firstDay2 = weekdays["mon"];

//read with a varaiable
const day = "wed";
const chosenDay = weekdays[day]; //chosenday blir wed:3

// UPDATE
weekdays.mon = 0;
weekdays["tue"] = 1;

//updatede with variable
weekdays[day] = 2;

//update add property
weekdays["thu"] = 3;
weekdays.fri = 4;

//update add property with variable
const day2 = "sat";
weekdays[day2] = 5;

//DELETE
delete weekdays.mon;
console.log(weekdays);
