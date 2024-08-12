/* problem 3 Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length 
(tells you how many items are in it) of the object.
*/

const vehicle= {
    model: "Lexus",
    color: "Red",
    type: "SUV",
};


 function getObjectLength(obj) {
    return Object.keys(obj).length // Using the object.key() method, i pass in the obj, follow by the length method to get length of the obj
 };

 console.log(getObjectLength(vehicle));





