document.write('<br>--------question 1-------<br>')

document.write("<br>")
function power(a, b) {
    return Math.pow(a, b);
  }

  let result1 = power(2, 3);
document.write(result1);  // Output: 8

result1 = power(4, 0.5);
document.write(result1);  // Output: 2
document.write("<br>")

document.write('<br>--------question 2-------<br>')

document.write("<br>")
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;  // Divisible by 400, it's a leap year
        } else {
          return false;  // Divisible by 100 but not by 400, it's not a leap year
        }
      } else {
        return true;  // Divisible by 4 but not by 100, it's a leap year
      }
    } else {
      return false;  // Not divisible by 4, it's not a leap year
    }
  }
  let year = parseInt(prompt("Enter a year: "));
let result = isLeapYear(year);
if (result) {
  document.write(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
document.write("<br>")

document.write('<br>--------question- 3------<br>')

document.write("<br>")
function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;
  
    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  let a = 5;
  let b = 7;
  let c = 9;
  let area = calculateTriangleArea(a, b, c);
  document.write("The area of the triangle is: " + area);
    
document.write("<br>")

document.write('<br>--------question 4-------<br>')

document.write("<br>")
function calculateAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  }
  
  function calculatePercentage(totalMarks, obtainedMarks) {
    return (obtainedMarks / totalMarks) * 100;
  }
  
  function mainFunction() {
    let marks = [80, 90, 75]; // Example marks
    let totalMarks = 100; // Total marks for each subject
  
    // Calculate average
    let average = calculateAverage(marks);
    document.write("Average marks: " + average);
  
    // Calculate percentage
    let obtainedMarks = marks.reduce((sum, mark) => sum + mark, 0);
    let percentage = calculatePercentage(totalMarks * marks.length, obtainedMarks);
   document.write("Percentage: " + percentage + "%");
  }
  
  // Call the mainFunction
  mainFunction();
  
document.write("<br>")

document.write('<br>--------question 5-------<br>')

document.write("<br>")
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
  let str = "Hello, World!";
  let char = "o";
  
  let index = customIndexOf(str, char);
  document.write("Index of '" + char + "' in the string is: " + index);
    
document.write("<br>")

document.write('<br>--------question 6-------<br>')

document.write("<br>")
function deleteVowels(sentence) {
    // Create a regular expression pattern to match vowels (case-insensitive)
    let pattern = /[aeiou]/gi;
  
    // Remove all vowels from the sentence using the replace() method
    let result = sentence.replace(pattern, "");
  
    return result;
  }
  let sentence = "Hello, World!";
  let newSentence = deleteVowels(sentence);
  document.write("New sentence without vowels: " + newSentence);
    
document.write("<br>")

document.write('<br>--------question-  7------<br>')

document.write("<br>")
function countSuccessiveVowels(text) {
    let count = 0;
    let lowercaseText = text.toLowerCase();
  
    for (let i = 0; i < lowercaseText.length - 1; i++) {
      let currentChar = lowercaseText[i];
      let nextChar = lowercaseText[i + 1];
  
      switch (currentChar) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          switch (nextChar) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
              count++;
              break;
          }
          break;
      }
    }
  
    return count;
  }
  let text = "This is a sentence with multiple vowels.";
  let count = countSuccessiveVowels(text);
  document.write("Number of occurrences of successive vowels: " + count);
    
