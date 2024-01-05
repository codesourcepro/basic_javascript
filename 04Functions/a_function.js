// Functions are subprograms which are used to compute a value or perfrom a task.

/*
Syntax:

    function function_name(){
        block of statement
    }

example:
    function channel(){
        console.log("CodeSourcePro")
    }


Rules:
    - Function name only starts with a letter, an underscore(_).
        function bank(){
            console.log("World Bank")
        }

        function _name(){
            console.log("CodeSourcePro")
        }

    - Function name cannot start with number.
        function 123Street(){
            console.log("Its generate error.")
        }
    - Do not use reserved keyword.
        function this(){
            console.log("Reserved keyword not allowed")
        }
    - Function names are case-sensitive.
        function Differnt(){
            console.log("Capital Letter")
        }
        funtion different(){
            console.log("Small Letter")
        }

*/

// Display name five times
console.log("CodeSourcePro");
console.log("CodeSourcePro");
console.log("CodeSourcePro");
console.log("CodeSourcePro");
console.log("CodeSourcePro");


// Creating function
function Display(){
    console.log("CodeSourcePro");
}

// calling function
Display()