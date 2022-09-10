'use strict';

/*
HTML elements are everything from the start tag to the end tag. An example of one div element would be: <div>edabit</div>.

Find out how many <div> elements are used in a string. Use the character class \W in your expression.
*/


const divs=str=>str.match(/\W{1,2}div\W/g).length/2;


/*
Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
*/

const combinations=(...arr)=>arr.reduce((acc,num)=>num>0?acc*num:acc+num)


/*
Write a function that returns the minimum number of swaps to convert the first binary string into the second.
*/


const swaps=(str1,str2)=>{
    let amount=0;
for (let i = 0; i < str1.length; i++) {

   if(str1[i]!==str2[i])amount++
    
  
    
}
return amount/2
}


/*
Write a function that returns the least common multiple (LCM) of two integers.
*/

const lcm=(x,y)=>{
    let int=1;
    while(int%x!==0 || int%y!==0){
        int++
    }
    return int
}


/*
Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

The criteria for a candidate to be qualified in the coding interview is:

The candidate should have complete all the questions.
The maximum time given to complete the interview is 120 minutes.
The maximum time given for very easy questions is 5 minutes each.
The maximum time given for easy questions is 10 minutes each.
The maximum time given for medium questions is 15 minutes each.
The maximum time given for hard questions is 20 minutes each.
If all the above conditions are satisfied, return "qualified", else return "disqualified".

You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.

Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

The maximum time to complete the interview includes a buffer time of 20 minutes.
*/

const interview=(arr,time)=>{
 let result='qualified';
 if(arr.length<8||time>120) result='disqualified';
 const grouped=arr.filter((x,i)=>i%2===0).map(x=>[x,arr[arr.indexOf(x)+1]])
 
 grouped.forEach((group,index)=>{
    let mult=(index+1)*5;
    group.forEach(x=>x>mult?result='disqualified':result)
 })
return result;
}


/*
An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
*/

//create two arrays with filter function for positive and negative numbers
//create two sets from those arrrays
//compare sizes

const positive=(arr)=>new Set(arr.filter(x=>x>0)).size>new Set(arr.filter(x=>x<0)).size


/*
Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.
*/

const reversed=num=>{
    
   const binary= num.toString(2).split('').reverse().join('');
   return parseInt(binary, 2);

}


/*
You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
*/

const stolen=obj=>{
    let amount=Object.values(obj).reduce((acc,val)=>acc+val,0);
    return amount>0?amount:"Lucky you"
}


/*
 You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.
 */ 

 const precious=obj=>{
    let values=Object.values(obj);
    let max=Math.max(...values);
     return Object.keys(obj).find(key => obj[key] === max);
 }


 /*
 Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:

"Rambo is gone..." if the name is on the list.
"Rambo is here!" if the name is not on the list.
Note that the first letter of the name in the return statement is capitalized.
 */

const timmy=obj=>{
    return obj['timmy']? "Timmy is gone...":"Timmy is here!";
}



/*
Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
*/

const add=(obj,naame,val)=>{
    obj[naame]=val;
    return obj;
}

/*
Write a function to replace all instances of character c1 with character c2 and vice versa.
*/

const doubleSwap=(str,c1,c2)=>str.split('').map(x=>new RegExp([c1]).test(x)?c2:new RegExp([c2]).test(x)?c1:x).join('')


/*
Create a function which replaces all the x's in the string in the following ways:

Replace all x's with "cks" UNLESS:

The word begins with "x", therefore replace it with "z".
The word is just the letter "x", therefore replace it with "ecks".

*/

const xs=str=>str.replace(/\sx(?=\w{1,})/g,' z').replace(/x/g,'cks').replace(/\s(?=cks)/g,' e');



/*
Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
*/

const insert=str=>str.replace(/(?=[A-Z])/g,' ').trim();


/*
Create a RegExp myRegExp to test if a string is a valid pin or not.

A valid pin has:

Exactly 4 or 6 characters.
Only numerical characters (0-9).
No whitespace.
*/

const myRegExp=/^\d{4}$|^\d{6}$/



/*
Write the regex to match only the street.
Use a quantifier in your expression.
Example
let address = "Harry Potter, 4 Privet Drive, Little Whinging, Surrey"
address.match(REGEXP) ➞ "4 Privet Drive"
*/

const reg=/\d+[\s\w]+/g;


/*
Groups and ranges indicate groups and ranges of expression characters. Named capturing groups matches "x" in (?\<Name>x) and stores it on the groups property of the returned matches under the name specified by \<Name>. The angle brackets, < and >, are required for group name.

To extract the United States area code from a phone number, we could use:

let match = "(214) 987-6482".match(/\((?<area>\d\d\d)\)/)
console.log(match.groups.area) ➞ 214
Grab the year, month and day from a string of dates. Name your groups with year, month, and day and in that order in your expression. You only have to come up with the regular expression. The replace() function is already implemented in the test.
*/

let REGEXP = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g
let str = "2019-10-30, 2020-01-01"

/*
Create a program that converts a phone number with letters to one with only numbers.

Number	Letter
0	none
1	none
2	ABC
3	DEF
4	GHI
5	JKL
6	MNO
7	PQRS
8	TUV
9	WXYZ

*/

const toNum=str=>str.replace(/[A-C]/g,'2').replace(/[D-F]/g,'3').replace(/[G-I]/g,'4').replace(/[J-L]/g,'5').replace(/[M-O]/g,'6').replace(/[P-S]/g,'7').replace(/[T-V]/g,'8').replace(/[W-Z]/g,'9');


/*
Write a regular expression that checks if a string is a valid initial. Valid initials either look like (ex. for Chandler Muriel Bing):

C. B.
C. M. B.
Rules for a valid initial:

Each letter must be upper case.
Each letter must be immediately followed by a period.
There must be exactly one space separating each letter-period pair.
Leading or trailing whitespaces are valid.
*/

const initials=/[A-Z][.]\s{0,1}/g

const func=str=>{
 const arr=str.match(initials);
 if(!arr)return false
 return arr.length===str.split(' ').length;
}


/*
Write a function that finds the sum of the first n natural numbers. Make your function recursive.
*/


const sum=n=>{
    if(n<=1)return n;

return n + sum(n-1);

}

/*
Write a function that reverses a string. Make your function recursive.
*/

const reverse=str=>{
   if(str.length <= 1){
        return str;
    }
    
        return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
 
}

/**
 Write a function that finds the sum of an array. Make your function recursive.
 */

 const rec=arr=>{
    if(arr.length===0)return 0;
     if(arr.length <= 1){
        return arr[0];
    }
    
        return arr[arr.length-1] + rec(arr.slice(0,arr.length-1));
    
 }                               
 /*
 Write a function that calculates the factorial of a number recursively.
 */

 const factorial=num=>{
    if(num<=1) return 1;

    return num*factorial(num-1)

 }

console.log(factorial(4));

/*
Given a number, return the total sum of that number multiplied by every number between 1 and 10.
*/

const multi=(n,m=10)=>{
    if(m<=1)return n;
return n*m+ multi(n,m-1)
}


/*
Create a function that finds the highest integer in the array using recursion.
*/

const highest=arr=>{
if(arr.length==1){
    return arr[0]
}
else{
    let res=highest(arr.slice(1));
    let ret=res>arr[0]?res:arr[0];
       //
    return ret;
}
}


/*
Fibonacci numbers are created in the following way:

F(0) = 0
F(1) = 1
...
F(n) = F(n-2) + F(n-1)
*/

const fibonacci=num=>{
 if (num < 2){
        return num;
    }else{
        return fibonacci(num-2) + fibonacci(num-1);
    }
}
/*
Write a JavaScript function to count the number of days passed since beginning of the year. 

*similar to the previous
*/

const since=date=>Math.round((date - new Date(date.getFullYear(),0,0))/1000/60/60/24)


/*
Write a JavaScript program to test the first character of a string is uppercase or not.
*/

const firstChar=str=>/^[A-Z](?=.*)/.test(str);

/*
3. Write a pattern that matches e-mail addresses
The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
*/

const email=str=>/^[A-Za-z0-9! # $ % & ' * + - / = ? ^ _ ` { | } ~]+[\.-]?[A-Za-z0-9! # $ % & ' * + - / = ? ^ _ ` { | } ~]*[@]{1}[A-Za-z0-9! # $ % & ' * + - / = ? ^ _ ` { | } ~]+[.]{1}[A-Za-z0-9! # $ % & ' * + - / = ? ^ _ ` { | } ~]+(?!.*)/.test(str)



/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
*/

const scramble = (str1, str2) => {
  let chars = {};
  
  for (const c of str2) chars[c] ? chars[c]++ : chars[c] = 1;
  for (const c of str1) chars[c] && chars[c]--;
  
  for (const c in chars) {
    if (chars[c] > 0)
      return false;
  }
  
  return true;
}
