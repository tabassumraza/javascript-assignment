document.write('<br>--------question 1 date and time-------<br>')

document.write("<br>")
 // Function to update the date and time
 function updateDateTime() {
    var now = new Date();
    document.write(now.toLocaleString());
  }

  // Call the updateDateTime function
  updateDateTime();

document.write("<br>")

document.write('<br>--------question 2 month name alert -------<br>')

document.write("<br>")
  // Function to alert the current month in words
  function alertCurrentMonth() {
    var months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];

    var now = new Date();
    var currentMonth = now.getMonth(); // Returns a zero-based index for the month
    var monthName = months[currentMonth];

    alert("The current month is: " + monthName);
  }

  // Call the alertCurrentMonth function
  alertCurrentMonth();
document.write("<br>")

document.write('<br>--------question 3 alert month day name-------<br>')

document.write("<br>")
function alertCurrentDay() {
    var days = [
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];

    var now = new Date();
    var currentDay = now.getDay(); // Returns a zero-based index for the day
    var dayName = days[currentDay];

    alert("Today is: " + dayName);
  }

  // Call the alertCurrentDay function
  alertCurrentDay();
document.write("<br>")

document.write('<br>--------question 4 alert its a fun day-------<br>')

document.write("<br>")
 // Function to check if it's Saturday or Sunday
 function checkFunDay() {
    var now = new Date();
    var currentDay = now.getDay(); // Returns a zero-based index for the day

    if (currentDay === 0 || currentDay === 6) {
      alert("It's Fun day");
    }
  }

  // Call the checkFunDay function
  checkFunDay();
document.write("<br>")

document.write('<br>--------question 5   days of month-------<br>')

document.write("<br>")
function checkMonthDays() {
    var now = new Date();
    var currentDate = now.getDate();

    if (currentDate < 16) {
      alert("First fifteen days of the month");
    } else {
      alert("Last days of the month");
    }
  }

  // Call the checkMonthDays function
  checkMonthDays();
document.write("<br>")

document.write('<br>--------question 6-------<br>')

document.write("<br>")
 // Assign the minutes since Jan. 1, 1970 to a new variable
 var minutesSinceEpoch = new Date().getTime() / (1000 * 60);

 // Display the result
 console.log("Minutes since Jan. 1, 1970: " + minutesSinceEpoch);
document.write("<br>")

document.write('<br>--------question 7-------<br>')

document.write("<br>")
 // Function to test if it's before noon
 function checkTimeOfDay() {
    var now = new Date();
    var currentHour = now.getHours();

    if (currentHour < 12) {
      alert("It's AM");
    } else {
      alert("It's PM");
    }
  }

  // Call the checkTimeOfDay function
  checkTimeOfDay();
document.write("<br>")
document.write('<br>--------question  8-------<br>')

document.write("<br>")
 // Create a Date object for the last day of the last month of 2020
 var laterDate = new Date(2020, 11, 0);

 // Display the result
 console.log("Later Date: " + laterDate);
document.write("<br>")

document.write('<br>--------question 9-------<br>')

document.write("<br>")
 // Create a Date object for the starting date of Ramadan
 var startingDate = new Date(2015, 5, 18); // June is zero-based index

 // Calculate the number of days since the 1st Ramadan
 var currentDate = new Date();
 var timeDifference = currentDate.getTime() - startingDate.getTime();
 var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

 // Display the result
 alert("Number of days past since 1st Ramadan: " + daysPassed);
document.write("<br>")

document.write('<br>--------question 10-------<br>')

document.write("<br>")
// Create a Date object for the beginning of 2015
var beginningOf2015 = new Date(2015, 0, 1);

// Calculate the time difference in seconds
var referenceDate = new Date(0); // January 1, 1970
var timeDifference = (beginningOf2015.getTime() - referenceDate.getTime()) / 1000; // Convert milliseconds to seconds

// Display the result in the browser
document.write("Seconds elapsed between the reference date and the beginning of 2015: " + timeDifference);
document.write("<br>")

document.write('<br>--------question 11-------<br>')

document.write("<br>")
 // Create a Date object for the current date and time
 var currentDate = new Date();

 // Extract the hours from the date object
 var currentHours = currentDate.getHours();

 // Reset the date object an hour ahead
 currentDate.setHours(currentHours + 1);

 // Display the modified date object in the browser
 document.write("Modified Date: " + currentDate);
document.write("<br>")

document.write('<br>--------question 12-------<br>')

document.write("<br>")
  // Create a Date object
  var currentDate = new Date();

  // Reset the date 100 years back
  currentDate.setFullYear(currentDate.getFullYear() - 100);

  // Display the modified date in an alert box
  alert("Date reset to 100 years back: " + currentDate);
document.write("<br>")

document.write('<br>--------question 13-------<br>')

document.write("<br>")
 // Ask the user for their age
 var age = prompt("Please enter your age:");

 // Calculate the birth year
 var currentYear = new Date().getFullYear();
 var birthYear = currentYear - age;

 // Display the birth year in the browser
 document.write("Your birth year is: " + birthYear);
document.write("<br>")

document.write('<br>--------question 14-------<br>')

document.write("<br>")
 // Get user input for bill details
 var customerName = prompt("Enter customer name:");
 var currentMonth = prompt("Enter current month:");
 var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
 var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
 var latePaymentSurchargeRate = parseFloat(prompt("Enter late payment surcharge rate (%):"));

 // Calculate bill amounts
 var netAmountPayable = numberOfUnits * chargesPerUnit;
 var latePaymentSurcharge = (latePaymentSurchargeRate / 100) * netAmountPayable;
 var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

 // Round off amounts to 2 decimal places
 netAmountPayable = netAmountPayable.toFixed(2);
 latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
 grossAmountPayable = grossAmountPayable.toFixed(2);

 // Display the bill details in the browser
 document.write("<h1>K-Electric Bill</h1>");
 document.write("<p>Customer Name: " + customerName + "</p>");
 document.write("<p>Current Month: " + currentMonth + "</p>");
 document.write("<p>Number of Units: " + numberOfUnits + "</p>");
 document.write("<p>Charges per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
 document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable + "</p>");
 document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge + "</p>");
 document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable + "</p>");
document.write("<br>")



