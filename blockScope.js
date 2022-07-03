function fruits() {
    
    if (true){
        var fruit = "Apple"; //function scope
        let fruit2 = "Kiwi"; // block scope
        const fruit3 = "Banana"; // block scope
    }

    console.log(fruit);
    console.log(fruit2);
    console.log(fruit3);

}

fruits()
// Salida Apple, luego referral error: fruit2 no esta definida/  solo vivde dentro del bloque, que en este caso es if{}
// let and const son block 

// deja de usar VAR 