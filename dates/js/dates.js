"use strict";

var testDatePast = new Date(2016, 1, 2);
var testDateFuture = new Date(2016, 12, 2);

/* Task 1 */
/* Write a JavaScript function to get the difference between two dates in days. */

function getDifferenceInDays(date1, date2) {
	var difference = Math.abs(date1.getTime() - date2.getTime());
	return Math.ceil(difference / (1000 * 3600 * 24));
}

console.log("getDifferenceInDays");
console.log(getDifferenceInDays(testDatePast, testDateFuture));

/* Task 2 */
/* Write a JavaScript that gets current date. */

function getCurrentDate() {
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	today = day + "." + month + "." + year;
	return today;
}

console.log("getCurrentDate");
console.log(getCurrentDate());

/* Task 3 */
/* Write a JavaScript function that displays the current day and time in the following format: Oct 22 2016; 11:45 */

function formatDate() {
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth();
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var day = today.getDate();
	var hour = today.getHours();
	var minute = today.getMinutes();

	today = monthNames[month] + " " + day + " " + year + "; " + hour + ":" + minute;
	return today;
}

console.log("formatDate");
console.log(formatDate(new Date()));