// variables 

var a; // declarando 
var b = a; // declarando / asignando 
b = "bb" // re-asignar 
var a = "aa"; //redeclaración 



// Global Scope 
var fruit = "apple"; // global 
console.log(fruit)

function bestFruit () {
    console.log(fruit)
}

bestFruit(); 

function countries() {
    country = "Venezuela" // global, porque no lo estoy declarando// le estoy asignado sin VAR
    console.log(country)
}

countries()
console.log(country)