/**
 * PROBLEM 5
 * Intructions:
 * Holy hell the grades have been replaced by something else now.
 * This is still a list, but it's no longer an array of numbers.
 * In fact, it's no longer called an "array" anymore because we stopped 
 * using the [] square brackets and now we're using the {} curly brackets.
 * 
 * {} When you see the curly bois it means we're working with an "object".
 * It's also sometimes refered to as an "associative array" because as you
 * might have noticed, everything in the list also has a title that it's
 * associated with.
 * 
 * The first item in this object can be found with:
 *  personData[0]
 * ... but can also be found with its title like this:
 *  personData.firstName
 * 
 * The only difference is the curly brackets and the titles. The titles are
 * technically called "keys", but that doesn't actually matter.
 * 
 * The goal of this problem is to simply use the "key" to get the last
 * name of this person and output it to the console using the "name" 
 * variable that I've created for you. No loop needed, this is just like
 * problem 1. 
 */
{
let name = 0;
const personData = { firstName: "Cooper", lastName: "Goeke", grade: 90 };



// Your code goes here

name = personData.lastName;

// Don't remove this console.log 
console.log("Problem 5: " + name);
}