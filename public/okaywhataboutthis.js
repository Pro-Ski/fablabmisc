document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('alert-button').addEventListener("click", function() {
        alert('Hello, world!');
    });
});


function alertmessage(){
    alert('Hello, world!');
    }

// JS practice
var a = 3;
let b = 5;
const name = Austin;
console.log("The creator of this code is" + name. name + "is a" + typeof name);
console.log(a + "and" + b + "are" + typeof a);
console.log("Do you know what" + a + "+" + b + "is?");
// I need to make a function that takes the user's answer, compares it, reports it, and comes back with
// true/false, and possiblity to retry. 
let uanser = prompt('The answer is');
let unumber = Number(uanser);
function compans(unumber, a, b) {while (unumber !== a+b);
    let uanser=prompt("That isn't it, try again:");
    let unumber = Number(uanser)
}
console.log('Correct!');
console.log("We also know that it's" + b<a + "that" + b + "is greater than" + a);