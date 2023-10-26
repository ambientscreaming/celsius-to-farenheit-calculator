function farenheitTemp(userTemp, multScale, add32) {
    return userTemp * multScale + add32
}

function giveTemp(whatToSay) {
    window.alert(whatToSay)
}

const userTemp = parseInt(prompt("Enter your temperature in Celsius!"));
const multScale = 1.8;
const add32 = 32;

giveTemp("The temperature in Farenheit is " + farenheitTemp(userTemp, multScale, add32) + " degrees.");