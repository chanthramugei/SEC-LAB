// Simple if statement
let temp = 30;
if (temp > 25) {
  console.log("It's hot outside.");
}

// if-else block
let age = 17;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are not eligible to vote.");
}

// else-if block
let marks = 72;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}

// switch statement for day selection
let day = 5;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}
