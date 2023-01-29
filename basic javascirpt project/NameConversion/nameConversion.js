//select all the DOM objects
let text = document.querySelector("#text")
let button = document.querySelector("#convert-btn")
let camelcase = document.querySelector("#camel-case")
let pascalcase = document.querySelector("#pascal-case")
let snakecase = document.querySelector("#snake-case")
let screamingsnakecase = document.querySelector("#screaming-snake-case")
let kebabcase = document.querySelector("#kebab-case")
let screamingkebabcase = document.querySelector("#screaming-kebab-case")

//add event listner to the button
button.addEventListener("click", converttext)

//call the nameconverter function with the parameters
function converttext() {
    camelcase.textContent = nameConverter("").replace(/^[a-z]/i , (x)=> (x.toLowerCase()))
    pascalcase.textContent = nameConverter("")
    snakecase.textContent = nameConverter("_")
    screamingsnakecase.textContent = nameConverter("_").toUpperCase()
    kebabcase.textContent = nameConverter("-")
    screamingkebabcase.textContent = nameConverter("-").toUpperCase()
}

//nameconverter function to convert the string to different cases
function nameConverter(char) {
    //split the input wherever there is charecters and convert it to lowercase
    arr = text.value.toLowerCase().split(/[^a-zA-Z]/g)
    //filterout the empty elements 
    arr2 = arr.filter((x) => (x != ''));
    // if it is a camel case or pascal case capitalize the starting letter
    if(char == "") arr2 = arr2.map((x) =>(x[0].toUpperCase() + x.slice(1)));
    // join them with given parameter (for camelcase val = "",kababCase = "-", snakeCase = "_")
    return arr2.join(`${char}`)
}