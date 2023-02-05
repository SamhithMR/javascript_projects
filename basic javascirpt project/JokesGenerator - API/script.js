
function randomJoke(){
    // fetch the data from the api
    fetch("https://official-joke-api.appspot.com/random_joke")
    //convert it to json formate
    .then((e)=>(e.json()))
    // display it to user
    .then(x=> document.querySelector("#joke").textContent =x.setup +"\n" + x.punchline)
}


// alternatively get data form other API

// function randomJoke(){
    // fetch("https://icanhazdadjoke.com/",{ headers: { "Accept": "application/json" } })
    // .then((e)=>(e.json()))
    // .then(x=> document.querySelector("#joke").textContent = x.joke);
// }

// call randomJoke funciton on loading the webpage
window.addEventListener("load", randomJoke);
document.querySelector("#jokeBtn").addEventListener("click",randomJoke)