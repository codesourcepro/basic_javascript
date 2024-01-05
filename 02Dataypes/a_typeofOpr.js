/*

-> Using the 'typeof' operator on value returns one of the following strings:

        --> 'undefined' - If the value is undefined
        --> 'boolean' - If the value is Boolean.
        --> 'string' - If the value is string.
        --> 'number' - If the value is number
        --> 'object' - If the value is an object (other than function) or null.
        --> 'function' - If the value is function

The Undefined Type
The Undefined type has only one value, which is the special value undefined. When a variable is 
declared using var but not initialized, it is assigned the value of undefined as follows:
    var message;
    alert(message == undefined); //true

The Null Type
The Null type is the second data type that has only one value: the special value null. Logically, 
a null value is an empty object pointer, which is why typeof returns “object” when it’s passed a 
null value in the following example:
    var car = null;
    alert(typeof car); //”object”


*/

// Example of Undefined
var name
console.log(name);
console.log(typeof name);
console.log(name == undefined);