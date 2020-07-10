/**
 * PROBLEM 6
 * Intructions:
 * Last problem, hardest one but it's not bad.
 * 
 * Here we have another array of grades, but this time it's an array
 * of objects rather than just numbers. If you can wrap your head around
 * this concept then you're well on your way to doing great things with 
 * JavaScript. You'll notice we're using [] square brackets around 
 * everything so it's just a normal array like problem 1-4. I've 
 * made it easier to read but putting it on several lines rather than
 * 1 big long line.
 * 
 * The grades listed here have names associated with them so we 
 * can tell which students got which grades. Also, the students all 
 * belong to binary, heteronormative genders: Male and female. SAD!
 * 
 * Your goal is to find the average grade of both genders and then 
 * output the gender with the highest average grade (a simple letter
 * is fine).
 * 
 * Remember, the grades could have been anything so you can't cheat by
 * just reading the data yourself. This code should be able to work even
 * if the list of grades contained thousands of grades.
 */
{

let countF = 0;
let countM = 0;
let totalF = 0;
let totalM = 0;
let averageF = 0;
let averageM = 0;
let betterSex = ""

const grades = [
  { firstName: "Cooper", sex: "M", grade: 80 },
  { firstName: "Carlos", sex: "F", grade: 98 },
  { firstName: "David", sex: "F", grade: 84 },
  { firstName: "Rick", sex: "M", grade: 100 },
  { firstName: "LeBron", sex: "M", grade: 96 },
  { firstName: "Michael", sex: "F", grade: 86 }
];

for (i = 0; i < grades.length; i++) {
  if (grades[i].sex == "M") {
    countM++;
    totalM += grades[i].grade;
  } else if (grades[i].sex == "F") {
    countF++;
    totalF += grades[i].grade;
  }
}

averageF = totalF / countF;
averageM = totalM / countM;

if (averageF > averageM) {
  betterSex = "F"
} else if (averageM > averageF) {
  betterSex = "M"
}

// Don't remove this console.log 
console.log("Problem 6: " + betterSex);
}