const DRAW = 'draw'
const P_WIN = 'player win'
const C_WIN = 'computer win'

let initScorePlayer = 0
let initScoreComputer = 0

let scorePlayer = document.getElementById('score-player')
let scoreComputer = document.getElementById('score-computer')

let imgPlayer = document.getElementById('img-player')

let imgComputer = document.getElementById('img-computer')

let playBtn = document.getElementsByClassName('play-btn')

let imgPath = 'images'

let options = ['rock', 'paper', 'scissor']

function play(option) {
    let playerDecision = setImage(option)
    let comDecision = setImageComputer()
    setTheWinner(option, comDecision)
}

function setImage(option) {
    imgPlayer.src = imgPath+'/'+option+'-player.jpg'

    return option
}

function setImageComputer() {
    let computerDecision = options[Math.floor(Math.random()*options.length)]
    imgComputer.src = imgPath+'/'+computerDecision+'-computer.jpg'

    return computerDecision
}

function setTheWinner(playerDecision, comDecision) {
    let result = ''
    if(playerDecision == 'rock') {
        switch (comDecision) {
            case 'rock':
                result = DRAW
                break;
        
            case 'paper':
                result = C_WIN
                break;        

            case 'scissor':
                result = P_WIN
                break;
        }
    }
        
    if(playerDecision == 'paper') {
        switch (comDecision) {
            case 'rock':
                result = P_WIN
                break;
        
            case 'paper':
                result = DRAW
                break;        

            case 'scissor':
                result = C_WIN
                break;
        }
    }

    if(playerDecision == 'scissor') {
        switch (comDecision) {
            case 'rock':
                result = C_WIN
                break;
        
            case 'paper':
                result = P_WIN
                break;        

            case 'scissor':
                result = DRAW
                break;
        }
    }

    scoring(result)
}

function scoring(result) {
    if(result == 'player win') {
        initScorePlayer++
        scorePlayer.innerHTML = initScorePlayer

        if(initScorePlayer >= 3) {
            for (let i = 0; i < playBtn.length; i++) {
                playBtn[i].setAttribute('disabled', '')
                
            }

        }

    }
    if(result == 'computer win') {
        initScoreComputer++
        scoreComputer.innerHTML = initScoreComputer

        if(initScoreComputer >= 3) {
            for (let i = 0; i < playBtn.length; i++) {
                playBtn[i].setAttribute('disabled', '')
                
            }
            
        }
    }

}