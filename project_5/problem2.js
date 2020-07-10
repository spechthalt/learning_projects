/**
 * PROBLEM 2
 * Intructions:
 * Given the list of "grades" that are stored in the array, calculate the
 * average and output the result to the console using the "averageGrade"
 * variable that has also been created for you already.
 * 
 * To do this you will need a loop. There are multiple tpes of loops/functions
 * that can work for this, but the basic "for" loop is a good place to start.
 * (You're supposed to use google, don't worry)
 * 
 * The array of grades could have thousands of grades in it. Your code needs
 * to work no matter what array of grades was given to you.
 * 
 * DO NOT use the "reduce" function that you may see on Google. That's cheating ;) 
 */



 /*why do we have to set total to 0? I also changed it form averageGrade to total 
 because when it was originally set to "averageGrade = 0" and I tried to define it again 
 as "let averageGrade = total / grades.length", it showed an error that averageGrade was 
 already defined.
 */
{
let averageGrade = 0; 
let total = 0;
const grades = [98, 97, 90, 88, 55, 79, 94, 94, 90, 91, 85, 75, 84, 92, 95];


// Your code/loop goes here

for (i = 0; i < grades.length; i++) { 
    total += grades[i]; //I dont understand how this line functions
}

averageGrade = total / grades.length;


// Don't remove this console.log 
console.log("Problem 2: " + averageGrade);
}