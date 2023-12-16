/*
DataType Conversion in JavaScript

*/

let score = "18ABC";
console.log(typeof(score));

let valueInNumbebr = Number(score)
console.log(typeof valueInNumbebr);
console.log(valueInNumbebr);


let defNull = null;
console.log(typeof(defNull));

let changeInNumber = Number(defNull)
console.log(typeof changeInNumber);
console.log(changeInNumber);


let defUndefined = undefined;
console.log(typeof(defUndefined));

let undefinedInNumber = Number(defUndefined)
console.log(typeof undefinedInNumber);
console.log(undefinedInNumber);



// advanced 1-> true, 0 -> false, " " -> false, "csp" -> true
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let rand = 55
let strinNumber = String(rand)
console.log(strinNumber);
console.log(typeof strinNumber);



// *********** Operation in Data Types **********

let value = 3
let nValue = -value
console.log(nValue);

let str1 = "Code"
let str2 = " Source"
let str3 = str1 + str2
console.log(str3);


console.log("11" + 12);
console.log(10 + "12");
console.log("11" + "12");
console.log("11" + 12 + 12);
console.log(5 + 5 + "12");


console.log(+true);
// console.log(ture+);
console.log(+"");
