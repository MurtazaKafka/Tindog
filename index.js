import dogsData from '../data.js'
import Dog from '../Dog.js'

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex])



document.getElementById('heart').addEventListener("click", approved)
document.getElementById('cross').addEventListener("click", rejected)
render()

function render(){
    document.getElementById('mate').innerHTML = currentDog.getDogHtml()
}

function getNewDog(){
    if (currentDogIndex < dogsData.length - 1){
        currentDogIndex += 1
        currentDog = new Dog(dogsData[currentDogIndex])
        render()
    } else {
        return document.body.innerHTML = `
        <style>
            body{
                background-color: darkgray;
                background-image: url('images/plane.jpg');
                background-size: 120px;
                font-size: 3rem;
                padding: 5px;
                width: 100%;
                text-align: center;
                color: yellow;
                font-weight: bold;
                text-shadow: 3px 3px 6px black;
            }
        </style>
        <p>
            There are no more dogs in your area 🐶
        </p>
        
        `
    }
}

function approved(){
    document.getElementById('mate').innerHTML += currentDog.getApprovedHtml()
    
    const message = setTimeout( function(){
        currentDog.setMatchStatus(true)
        getNewDog()
    }, 1000)
}

function rejected(){
    document.getElementById('mate').innerHTML += currentDog.getRejectedHtml()
    
    const message = setTimeout( function(){
        currentDog.setMatchStatus(false)
        getNewDog()
    }, 1000)
}

