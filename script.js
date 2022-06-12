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

const myname = 'Mahamud';
const mygreeting = `Hello, ${myname}`;

console.log (mygreeting)

// when concatenating a string the most simple way is to use backtick quotes (`) to contain the string and wrap a variable inside $() which is also known as template literal

const one = 'Hello,';
const two = 'how are you?';
const joined = `${one} ${two}`;

console.log (joined);

// As shown above you can use also concatenate two variablles

// Concatenation in context

const button = document.querySelector('button');

function greet() {
    const name = prompt ('what is your name?');
    alert (`Hello ${name}, nice to meet you`);
}

button.addEventListener('click', greet);

// In the example above the promt() function is being used which asks the user for his name which is stored, then the alert() function is used to grab the stored name and concatenate it within a simple greeting message

// Concatenating using "+"

const greeting = 'Hello';
const name = 'Mahamud';

console.log (greeting + ', ' + name)

// You can use the above code however using template literal makes the code easier to read see below

console.log (`${greeting}, ${name}`)

//Numbers vs Strings

const word = "Front ";
const number = 252;

console.log (`${word}${number}`);

// You may have expected the above code to return some sort of error, the reason it hasn't is because the browser converts the number to a string and concatenates the two strings together

const mystring = '123';
const mynum = Number(mystring);

console.log (typeof mynum);

// If you want to convert to a string but not change otherwise you'll have to use the above construct, below i will show you how to convert a number to a string

const mynum2 = 123;
const mystring2 = mynum2.toString();

console.log (typeof mystring2);

// The above constructs can be used in the real world. For example, if a user enters a number into a form's text field, it's a string. However, if you want to add this number to something, you'll need it to be a number, so you could pass it through Number()

// Including expressions in strings

const song = 'tranquillity'
const score = 9.9
const maxscore = 10
const output = `I really love the song ${song}. I'd give it a score of ${score}/${maxscore}`

console.log (output)

// In the example above i used JS expressions in template literals, you can also use simple variables and the results will be included in the outcome

// Multiline strings

// There is two ways of achieve multi line stings dependent on what quotes you use 

const output2 = `I really love the song ${song}.
I'd give it a score of ${score/maxscore * 100}%`

console.log (output2)

// As above if you are using backtick quotes (template literal) it respects line breakls in code, however when using either of the two quotes (normal string) you'll need to add a (\n) to signify where you want the line break as you can see below

const output3 = 'I like the song.\nI gave it a score of 90%.';
console.log(output3);  

// JavaSxript String Length

// the followiing length property will return the length of the sting it's applied to 

let txt = 'abcdefghijklmnopqrstuvwxyz';
let length = txt.length;

console.log (length);

// Extracting String Parts

/* 
There are 3 ways of extracting a part of a sting:
1. slice(start, end)
2. substring(start, end)
3. substr(start, length)
*/

//JavaScript String slice()

let str = "Apple, Banana, Kiwi";
let part = str.slice (7,13);

console.log (part);

// if you want to extract a specific word you'd use the above method however if you want to extract the remainder of the string from a certain you'd omit the second number and if you want to extart the sting up to a certain point you'd make the first number 0 and not 1 as JavaScripts first position is 0

let part2 = str.slice (7);
let part3 = str.slice (0,13)

console.log (part2);
console.log (part3);


// As you can see in my above examples i have only used positive parameters, however you can use negative parameters and if you use a negative parameter, the position is counted from the end of the string see below.

let part4 = str.slice (-19,-6)
let part5 = str.slice (-4)

console.log (part4)
console.log (part5)

// JavaScript String substring()

// substring() and slice() are very similar in fact the only differentiating factor is that you can not use negative parameters and any value less than 0 is treated as 0, other than that they work exactly the same

// JavaScript String substr()

// Again substr() is also similar to alice(), difference is where slice() noth parameters counted from the beggining of the string with substr() only the first parameter counts from the beggining and the second parameter is used to specify the legth of the extracted part see below for example:

let part6 = str.substr (7,6);

console.log (part6);

// You cam also use negative parameters with substr() in the exact same way it is used in slice()

// Replacing String Content

// The replace() method replaces only the first matchand is also case sensitive unless specified, below is an example of it just replacing the first match whilst being cas sensitive, spevifivstion will be shown later

let text = 'Visit Microsoft and Microsoft';
let newText = text.replace ('Microsoft', 'the Apple Store');

console.log (newText)

// To replace case insensitive, use a regular expression with an /i flag (insensitive)

let newText2 = text.replace (/MICROSOFT/i, 'Google');

console.log (newText2)

//3. To replace all matches, use a regular expression with a /g flag (global match)

let newText3 = text.replace (/Microsoft/g, 'Facebook');

console.log (newText3)

//Converting to Upper and Lower Case

// toUpperCase() is used to make a whole string capital and likewise toLowerCase() is used to make a whole string lowercased see below for examples

let mytxt = 'i love arsenal';
let caps = mytxt.toUpperCase();

console.log (caps);

let lctxt = caps.toLowerCase();

console.log (lctxt)

//JavaScript String concat()

// concat() joins tow or more strings together, this method can be used instead of the + operator. They do the same thing

let txt1 = 'Hello';
let txt2 = 'World';
let txt3 = '!';
let txt4 = txt1.concat(' ', txt2, txt3);

console.log (txt4)


// JavaScript String trim()

// The trim() method removes whitespace from both sides of a string

let hw = '     Hello World!     ';
let hw2 = hw.trim();

console.log (hw2)

// JavaScript String Padding

// JavaScript String padStart() and padEnd()
// Both the padStart() and padEmd() methods pad a string with another string

let padStart = 5;
let padStart2 = padStart.toString();
let padded = padStart2.padStart(4,"x");

console.log (padded)

let padEnd = 5;
let padEnd2 = padEnd.toString();
let padded2 = padEnd2.padEnd(4,"0");

console.log (padded2)

// Extracting string characters

/* There are 3 ways of ectracting sting characters:
1. charAt(position)
2, charCodeAt(position)
3. Property access [ ]
*/

//JavaScript String charAt()

// If you use the charAt() method  will give you the character at that specified position

let TEXT = 'HELLO WORLD';
let chat = TEXT.charAt(0);

console.log (chat)

// JavaScript String charCodeAt()

// If you use the chatCodeAt() method it will return the unicode of the charcter at a specifed position of the string

let char = TEXT.charCodeAt(0);

console.log (char)

// This ,ethod returns a UTF-16 code (an integer between 0 and 65535)

// Property Access

// ECMAScript 5 (2009) allows property access [ ] on strings

let propacc = 'HELLO WORLD'
let Char = propacc[8];

console.log (Char)

// Converting a String to an Array

// JavaScript String split()

// Using the split() command toy can chanfge a string into an array

let arsenal = 'Greatest the world has ever seen';
let arsenal1 = 'Greatest, the, world, has, ever, seen';
let comma = arsenal1.split(',');
let space = arsenal.split(' ');
let split = arsenal.split('|');

console.log (comma)
console.log (space)
console.log (split)

// If the separator is omitted, the returned array will contain the whole string in index [0]

// If the separator is "", the returned array will be an array of single characters:

let omit = arsenal.split('');

console.log (omit)


// login code

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}



