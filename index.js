const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let resultOne = document.getElementById("resultOne")
let resultTwo = document.getElementById("resultTwo")
let genrateButton = document.getElementById("generateButton")
let characterNumber = ""
let arrayOne = []
let arrayTwo = []

console.log(characterNumber)

function getUserInput() {
    var userInput = document.getElementById("characterNumber").value
    characterNumber = userInput
}

genrateButton.addEventListener("click", function() { //This does listen for click

    arrayOne = []
    arrayTwo = []

    getUserInput()

    while(arrayOne.length <characterNumber) {
        let randomNumber = Math.floor( Math.random() * characters.length)
        arrayOne.push(characters[randomNumber])
        resultOne.textContent = arrayOne.join("")
    }

    while(arrayTwo.length <characterNumber) {
        let randomNumber = Math.floor( Math.random() * characters.length)
        arrayTwo.push(characters[randomNumber])
        resultTwo.textContent = arrayTwo.join("")
    }


})

