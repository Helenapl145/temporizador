import Sound from "js/sounds.js"
import Controls from "js/controls.js"


const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

const btnPlay = document.querySelector('.btnPlay')
const btnPause = document.querySelector('.btnPause')
const btnSet = document.querySelector('.btnSet')
const btnStop = document.querySelector('.btnStop')
const btnSoundOn = document.querySelector('.btnSoundOn')
const btnSoundOff = document.querySelector('.btnSoundOff')

let timerTimeOut
let minutes = Number(displayMinutes.textContent)
let newMinutes

const sound = Sound()
const control = Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
    btnSoundOn,
    btnSoundOff
})

function updateDisplay(seconds, minutes) {
    displaySeconds.textContent = String(seconds).padStart(2, "0")
    displayMinutes.textContent = String(minutes).padStart(2, "0") 
}

function countdown() {
    timerTimeOut = setTimeout(function(){
        
        let seconds = Number(displaySeconds.textContent)

        if(minutes <= 0 && seconds <= 0){
           sound.finished()
        }

        if(minutes === 0 && seconds === 0) {
            return reset()
         }

        if(seconds === 0){
            seconds = 60
           
            --minutes 
        }

        --seconds

        updateDisplay(seconds, minutes)
     
        countdown()
    },1000)
    
   
} 

function reset() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
    hold()
}

function hold(){
    clearTimeout(timerTimeOut)
}

btnPlay.addEventListener('click', () => { 
    if(minutes === 0){
        alert('Primeiro coloque um tempo')
        reset()
    }else{
        control.play()
        countdown()
        sound.pressBtn()
    }
  
})

btnPause.addEventListener('click', () => {
    control.pause()
    hold()
    sound.pressBtn()
})

btnSet.addEventListener('click', () => {
   
    control.set()
    sound.pressBtn()

    newMinutes = prompt('coloque os minutos que você quer:')
    if(newMinutes === ''){
        updateDisplay('0', '0')
    }else{
        minutes = newMinutes
        updateDisplay('0', newMinutes)
    }  
})

btnStop.addEventListener('click', () => {
    control.stop()
    sound.pressBtn()
    reset()
    updateDisplay('0', newMinutes)
})

btnSoundOn.addEventListener('click', () => {
    control.soundOn()
    sound.paused()
})

btnSoundOff.addEventListener('click', () => {
    control.soundOff()
    sound.playing()
    
})