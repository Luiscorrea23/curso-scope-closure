// local scope 

function saludo () {
    let userName = "Luis"; 
    console.log(userName)

    if (userName === "Luis") {
        console.log(`Hola ${userName}!`)
    }
}

saludo();

console.log(userName); 