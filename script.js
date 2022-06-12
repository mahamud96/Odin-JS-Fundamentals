/* 
----------------
Table of content
---------------- 

1. The Odin Project Fundamentals Part 1
2. The Odin Project Fundamentals Part 2

 



/* ------------------------------------
   The Odin Project Fundamentals Part 1
   ------------------------------------ */

let user = 'John'
let admin = user

let ourPlanetName = "Earth";
let currentUserName = "John";

let a = 6
let b = 5
let c = a+b

let six = 6
let five = 5
let answer = six-five


let x = 5;
x++;
let y = x;

console.log (x *= y)

let l = 5;
l--;
let m = l;

let p = 3;
let q = p ** 3;
let r = Math.pow(p,5)


console.log (r)

const myInt = 5;
const myFloat = 6.667 


console.log (10 + 7)
console.log (9 * 8)
console.log (60 % 3)

let num1 = 10;
let num2 = 40;

console.log (9 * num1)
console.log (num1 ** 3)
console.log (num2 / num1)

console.log (5 + 10 * 3)
console.log (num2 % 9 * num1)
console.log (num2 + num1 / 8 + 2)
console.log ((num2 + num1)/(8+2))
console.log (++num1)
console.log (num1)
console.log (num2--)
console.log (num2)
console.log (num1<=num2)

let max = 57;
let actual = max - 13;
let percentage = actual / max

console.log (percentage)

myInt
myFloat

 
/* -----------------------------------
  The Odin Project Fundamentals Part 2
  ------------------------------------ */

const string = "The revolution will be televised";

console.log (string);

// Examples of bad strings

/* had to change the following bad strings to comments to enable console.log.

const badstring1 = "My name is Mahamud;
const badstring2 = My name is Mahamud";
const badstring4 = My name is Mahamud; */

// Conecting a string via a variable

const goodstring = string

console.log (goodstring)

// Single quotes vs. double quotes

const squote = 'My name is Mahamud'
const dquote = "My name is Mahamud"

console.log (squote)
console.log (dquote)

// Doesn't matter if you use single or double quotes in a string

// in some instances it does matter what quotes you use as can bbe seen in the the strings below

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

//  To keep hings simple, in the strings above you can see when using a double quote within the string the whole string needs to be contained within single quotes and vice versa. This is because if you use the same quotes through out it will confues the browser.

//However there is a way of using a single quote within a string thats contained by a single quote. This is called using escapping characters. Escaping characters make it knwon that what follows it is just plain text and not part of the code, see example below

const escchar = 'I\'m surrently teaching how I\'d use escaping characters in a string';

console.log (escchar);

// Concatenating Strings

const name = 'Mahamud';
const greeting = `Hello, ${name}`;

console.log (greeting)

// when concatenating a string the most simple way is to use backtick quotes (`) to contain the string and wrap a variable inside $()

const one = 'Hello,';
const two = 'how are you?';
const joined = `${one} ${two}`;

console.log (joined);

// As shown above you can use also concatenate two variablles