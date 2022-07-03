var firstName; // declarando // undefined 
firstName = "Oscar" // asigno 
console.log(firstName)

// reasignar 

var lastame = "David"; //asigno y declaro 
lastame = "Luis";
console.log(lastame)

//redeclaramos 
var secondName = "Luis" // declaro y asigno
var secondName = "Luis Correa" // reasigno
console.log(secondName); 

// AHORA VAMOS CON LET: Puede reasignar pero no redeclarar

let fruit = "Apple" // declarar y asignar 
fruit = "kiwi"; // reasignar 
let fruit = "Banana" // No puede redeclarar

// AHORA CONST: No puede reasignar ni redeclarar

const animal = "Dog"; // declaro y asigno
animal = "cat"; // no puedo reasignar
const animal = "Conejo" // no puedo redeclarar
console.log(animal)


// AHORA VALORES Y REFERENCIAS
//Esto no es reasignar ni redeclarar: Trabajo con referencia. 
const vehicles = []; 
vehicles.push("Luis");
vehicles.push("Correa");
console.log(vehicles)
vehicles.pop(); 

