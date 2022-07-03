// function moneyBox (coins) {
//     let saveCoins = 0; 
//     saveCoins += coins;
//     console.log(`moneyBox:€${saveCoins}`)
// }

// ASi no funciona: NO ALMACENA EL VALOR 
// moneyBox(5); 
// moneyBox(10);

function moneyBox(coins) {
    let saveCoins = 0;

    function countCoins (coins) {
        saveCoins += coins;
        console.log(`moneyBox:€${saveCoins}`)
    }
    return countCoins; 
}

const myMoneyBox = moneyBox();
myMoneyBox(5); 
myMoneyBox(10);

const moneyBoxLuis = moneyBox(); 
moneyBoxLuis(10); 
moneyBoxLuis(5); 