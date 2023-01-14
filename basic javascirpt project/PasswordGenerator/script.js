const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

//create object the call function that generate random charecters
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// event listner to copy password to keyword
clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText)
})

// event listner on generate button to generate random password
generateEl.addEventListener('click', () => {
    // check, weather we want to add the charecter or no
    hasLower = lowercaseEl.checked ? "lower" : "";
    hasUpper = uppercaseEl.checked ? "upper" : "";
    hasnumber = numbersEl.checked ? "number" : "";
    hassymbol = symbolsEl.checked ? "symbol" : "";

    //call generatepassword using the information given by the user
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasnumber, hassymbol, lengthEl.value);
})

//function to generate random password
function generatePassword(lower, upper, number, symbol, length) {
    
    //create a array of elements that includes those charecter that has to be included in the password
    // filter out if the element is empty using filter mehtod
    mustInclude = [lower, upper, number, symbol].filter((x) => (x != ''))

    //let take a empty string to generate a password
    let randomPassword = '';

    // iterate for upto length specifie by the user
    for (let i = 0; i < +length; i++) {
        //call functions randomly as specified in the array through randomFunc object
        randomPassword += randomFunc[mustInclude[Math.floor(Math.random() * mustInclude.length)]]()
    }
    return randomPassword
}

//used fromCharCode method to generate charecter form ASCII code
//the ASCII values form 97- 122 we get lowercharecter
//the ASCII values form 65-90 we get uppercharecter

function getRandomLower() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26))
}

function getRandomUpper() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}

// get random numbers between 0 to 9
function getRandomNumber() {
    return Math.floor(Math.random() * 10)
}

//get random symbols from the list of string
function getRandomSymbol() {
    let symbols = "\"!\"#$%&'()*+,-./:;<=>?@[]^_`\\{|}~";
    return symbols[Math.floor(Math.random() * 33)]
}