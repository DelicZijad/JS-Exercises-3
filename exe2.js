'use strict';

//codewars

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

//use match regex to look for number of o's and x's

const xo=str=>{
let o=str.match(/o/gi);
let x=str.match(/x/gi);

return (o && o.length)===(x && x.length)
}

/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').


*/

//use match to find groups of two chars
//map to see if there exists a standalone char
//add '_' to it

const solution=(str)=>{
  let match=str.match(/.{1,2}/g)
    return match ?match.map(x=>x.length===1?x+"_":x):[]
}

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
const high=(s)=>{
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
//solution from site


/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution1(number){
  if(number<0)return 0;
  let sum=0;
  for(let i=1;i<number;i++){
    if(i%3===0 ||i%5===0)sum+=i
  }
  return sum
}

/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/

function solution2(string) {
    return string.replace(/(?=[A-Z])/g,' ')
}


/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

const  generateHashtag =(str)=> {7
   
    const reg=str.match(/(^|s*)\w+(?=\s*)/g)
  const cpt=reg?reg.map(x=>x.slice(0,1).toUpperCase()+x.slice(1)).join(''):''
  const final=cpt.length>0?"#"+cpt:false
  return final.length<140?final:false;
}


/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
*/

const longestConsec=(strarr,k)=>{
    let longest=k>0?strarr.slice(0,k).join(''):''

for (let i = 0; i < strarr.length; i++) {
    
  if(strarr.slice(i,i+k).join('').length>longest.length)longest=strarr.slice(i,i+k).join('')
    
}
 return (k<=0 ||k>strarr.length)?'':longest
}


/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

//lowercase the entire string
//create str.match(regex)
//create set from match
//check if set.size===26

const isPangram=string=>{
    let str=string.toLowerCase();
    let match=str.match(/[a-z]/g);
    let unique=new Set(match);
    return unique.size===26;
}




/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

//turn string to array
//map the array
//use lastindexof to check if chars appear only once


const duplicateEncode=str=>{
    return str.split('').map((x,i,arr)=>arr.lastIndexOf(x)==arr.indexOf(x)?'(':')').join('')
}



/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
*/

//turn string to array by split('')
//check for indexes (x,i)=>i%2===0;

const toWeirdCase=string=>{
    return string.split(' ').map(x=>x.split('').map((y,i)=>i%2===0?y.toUpperCase():y.toLowerCase()).join('')).join(' ')
}




/*

The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

alternative text

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

Examples in general form:
(depending on the language)

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
  
  You can see examples for your language in **"SAMPLE TESTS".**
Notes:
lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem).

When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing or return {} with C++, Array() with Scala, [] with Perl, Raku.

In that case the returned structure of C will have its sz component equal to 0.

Return the string "nil" with Bash, PowerShell, Pascal and Fortran.
*/

function sqInRect(lng, wdth){
  let arr = []
  if(lng === wdth) return null
  while(lng > 0 && wdth > 0){
    arr.push(lng > wdth ? wdth : lng)
    lng > wdth ? lng -= wdth : wdth -= lng
  }
  return arr
}

/*
The Fibonacci sequence is traditionally used to explain tree recursion.

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion. Can you make it so the memoization cache is private to this function?
*/

const fib=(n, memo)=>{
memo=memo||[]
if(n <=2) return 1;
else return memo[n]?memo[n]:fib(n-1,memo)+fib(n-2,memo)
}


/*
Write a function that recursively determines if a string is a palindrome.
*/

const checkPalindrome=(str)=>{
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1));
      //za abcba->a===a--->                 checkPalidnrome(bcb)
      //za   bcb->b===b--->                 checkPalindrome(c)->str.length===->true

    return str.length===0|| false;
}

/*
Write a function that recursively returns the number of vowels in a string.
All letters will be in lower case
*/

const countVowels=str=>{
   if (!str.length) return 0;
  return (
"aeiou".includes(str.charAt(0).toLowerCase()) +
countVowels(str.substring(1))
  );
   
};

/*
Write a function that returns the greatest common divisor (GCD) of two integers.

*/
const gcd=function (x, y) {
    if (y === 0) return x;
     return gcd(y, x % y);
   }
   
/*
1. Write a JavaScript program to list the properties of a JavaScript object

*/

const list=obj=>{
if(typeof obj!=='object'||Array.isArray(obj)||!obj)return []
return Object.keys(obj)
}


/*
. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
*/

const remove=obj=>{
  if(typeof obj!=='object'||Array.isArray(obj)||!obj)return {}
  let obj1={}
  const keys=Object.keys(obj);
   for (let i = 0; i < keys.length; i++) {
  if(keys[i]!=='rollno')obj1[keys[i]]=obj[keys[i]]
    
   }
return obj1
}

/*
3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/

const len=obj=>{
  if(typeof obj!=='object'||Array.isArray(obj)||!obj)return 0
 return Object.keys(obj).length
}

/*
Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor


*/


   const dis=arr=>arr.forEach(obj=>console.log(`${obj.title} by ${obj.author} is ${obj.readingStatus?'being read':'not being read'}`))



/*
Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
Sample Object :
*/

const sorting=arr=>arr.sort((a,b)=>b.libraryID-a.libraryID)


/*
 Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys
*/

const rev=obj=>{
    if(typeof obj!=='object'||Array.isArray(obj)||!obj)return {}
  let switched={}
 for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    switched[obj[key]]=key
    
  }
 }

  return switched
}


/*
17. Write a JavaScript function to check whether an object contains given property.
*/
const cont=(obj,prop)=>{
  if(typeof obj!=='object'||Array.isArray(obj)||!obj)return {}

  return prop in obj
}



/*
6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
*/

const dashes=num=>num.toString().split('').map((x,i,arr)=>x%2===0&&arr[i-1]%2===0?'-'+x:x).join('')



/*
Write a JavaScript program to find the most frequent item of an array. 
*/

//create empty object
//each time item occurs push 1 to corresponding key in obj

const frequent=arr=>{
const obj={}
for (let i = 0; i < arr.length; i++) {
  const elm = arr[i];
  if(elm in obj) obj[elm]++
  else obj[elm]=1
}
let entries=Object.entries(obj)
let max=entries.sort((a,b)=>b[1]-a[1])[0]
  return  max[0] +', '+max[1]+' times'
}



/*
Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

const swap=str=>str.split('').map(x=>x===x.toLowerCase()?x.toUpperCase():x.toLowerCase()).join('')



/*
Write a JavaScript function to check whether an `input` is a date object or not
*/
const check=date=>date instanceof Date;


/*
 Write a JavaScript function to get the current date. Go to the editor

Note : Pass a separator as an argument.

*/

const today=sep=>`${new Date().getMonth()+1}${sep}${new Date().getDate()}${sep}${new Date().getFullYear()}`



/*
Write a JavaScript function to get the month name from a particular date.
*/

const months=['january','february','march','april','may','june','july','august','september','october','november','december']

const monthName=date=>months[date.getMonth()];


/*
 Write a JavaScript function to test whether a date is a weekend. 
*/

const days=['sun','mon','tue','wed','thur','fri','sat']
const day=date=>days[date.getDay()]==='sat'||days[date.getDay()]==='sun'?'weekend':'not weekend';


/*
 Write a JavaScript function to get the maximum/minimum date from an array of dates. 
*/
//use getTime to comapare the highest date

const highest=arr=>arr.sort((x,y)=>new Date(y).getTime()-new Date(x).getTime())[0]

const lowest=arr=>arr.sort((x,y)=>new Date(x).getTime()-new Date(y).getTime())[0]



/*
 Write a JavaScript function to get difference between two dates in days.
*/

const diff=(date1,date2)=>Math.floor((Math.abs(new Date(date1)-new Date(date2)))/1000/60/60/24)

/*
Write a JavaScript function to get the last day of a month
*/

const last=(year,month)=>new Date(year,month+1,0).getDate()


/*
Write a JavaScript function to get the amount of days of a year.
*/
const amount=year=>(new Date(year+1,0,1)-new Date(year,0,1))/1000/60/60/24;


