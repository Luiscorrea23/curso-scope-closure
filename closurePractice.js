function saludar () {
    let userName = "Luis"; 

    function displayUserName() {
        return `Hello ${userName}`
    }
    
    return displayUserName; 
}

const hello = saludar()
console.log(hello); // la definición : [Function: displayUserName]
console.log(hello()) // instanciamos: Hello Luis


