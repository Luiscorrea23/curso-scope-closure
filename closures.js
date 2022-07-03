// Closures: Cierres: Permite accder al ambito de una funcion exterior desde una funcion interior
// Se crean cada vez que una función es creada
// una funcion puede acceder a una variable fuera de su contexto 

// lexical: Accesibilidad de variables anidadas dentro de funciones

const myGlobal = 0; 

function myFunction() {
    const myNumber = 1;
    console.log(myNumber)
    
    function parent () { // funcion interna = closure
        const inner = 2; 
        console.log(myNumber, myGlobal, myTest); // rompo el codigo: myTest no defined
    
        function child () {
            const myTest = "test"
            console.log(inner, myNumber, myGlobal, myTest) // ejecuta correctamente
        }
        return child();
        }
        return parent();
    };

myFunction()