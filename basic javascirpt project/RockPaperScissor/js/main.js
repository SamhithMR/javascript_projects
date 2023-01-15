let userData = document.querySelectorAll("#r,#p,#s")

let resultUser = document.querySelector("#result-user-stat")
let resultComputer = document.querySelector("#result-comp-stat")
let resultFinal = document.querySelector("#result-final-stat")

let userScore = document.querySelector("#userScoreVal")
let compScore = document.querySelector("#compScoreVal")

let arrayOfItems = ["rock", "paper", "scissor"]

//userData consists of array of object
userData.forEach((x) => {
    x.addEventListener("click", () => {

        // select a random value from arrayOfItems array and display it
        let computerInput = arrayOfItems[Math.floor(Math.random() * 3)]
        resultComputer.textContent = `Computer:${computerInput}`
       
        //get the user input and display it
        let userInput = (x.id == "r" ? "rock" : x.id == "p" ? "paper" : "scissor")
        resultUser.textContent = `User:${userInput}`

        if (userInput == computerInput) {
            match()
        } 
        
        // if the condition that make computer win has met, than call compWin funtion
        else if (computerInput == "rock" && userInput == "scissor" ||
            computerInput == "scissor" && userInput == "paper" ||
            computerInput == "paper" && userInput == "rock") {
            compWin()
        } else {
            userWin()
        }

    })
})

// if computer wins increment the score and display that computer is the winnder
function compWin() {
    compScore.textContent = +compScore.textContent + 1;
    resultFinal.textContent = `computer win`
}

// if user wins increment the score and display that user is the winner
function userWin() {
    userScore.textContent = +userScore.textContent + 1;
    resultFinal.textContent = `User win`
}

function match() {
    resultFinal.textContent = 'matched'
}