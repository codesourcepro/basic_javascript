/*
Stack and Heap Memory



Memory
1. Stack => Primitive
2. Heap => Non Primitive
*/

// Primitive give us copy so only changed in copy variable
let myname =  "Code Source";
let another_name = myname;
console.log(myname);
console.log(another_name);
another_name = "Code Source Pro"
console.log(another_name);


// Non Primitive based on reference so it has changed on original variables
let userOne = {user:"hello@gmail.com, id:10211"}
let userTwo = userOne;
console.log(userOne);
console.log(userTwo)

userTwo.user = "csp@gmail.com"
console.log(userOne.user);
console.log(userTwo.user);

console.log(userOne);
console.log(userTwo)