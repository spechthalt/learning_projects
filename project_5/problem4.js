/**
 * PROBLEM 4
 * Intructions:
 * We have the same array of grades from problem 2 (not 3), but this time
 * we don't want to find the average. This time we want to find the 
 * lowest score and save that to the "lowestGrade" variable I created
 * for you.
 * 
 * There is a built in function is JS for arrays called "min". You can use
 * that if you'd like, you'd still be learning, but it would be better if
 * you found the minumum value manually using your loop from problem 2 again.
 */
{
let lowestGrade = 101;
const grades = [98, 97, 90, 88, 55, 79, 94, 94, 90, 91, 85, 75, 84, 92, 95];

// Your code/loop goes here
for (i = 0; i < grades.length; i++) { 
  if (grades[i] < lowestGrade) {
    lowestGrade = grades[i]
  }
}

// Don't remove this console.log 
console.log("Problem 4: " + lowestGrade);
}