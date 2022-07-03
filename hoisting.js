//lo que hace: var nameOfDoog; - Undefined
console.log(nameOfDog);
var nameOfDog = "Elmo"; 
console.log(nameOfDog)

nameOfDog(); 
function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`)
}
// Primera ejecución
//elmo is not defined // no ejectua

//segundo ejecución
var elmo = "Elmito"
// El mejor perrito es undefined

//tercera ejecución
nameOfDog(); 
// el mejor perrito es Elmito