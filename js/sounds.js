export default function(){
    const bgMusic = new Audio('https://github.com/Helenapl145/temporizador/blob/main/assests/music.mp3?raw=true')
    const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
        
    bgMusic.loop = true
    

    function playing() {
        bgMusic.play()
    }

    function paused() {
        bgMusic.pause()
    }

    function pressBtn() {
        buttonPress.play()
    }

    function  finished() {
        kitchenTimer.play()

    }

    return{
        playing,
        paused,
        pressBtn,
        finished
    }
      
    
}