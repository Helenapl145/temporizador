export default function({
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
    btnSoundOn,
    btnSoundOff
}) {
   
    function play() {
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
    }

    function pause(){
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
    }

    function set(){
        btnSet.classList.add('hide')
        btnStop.classList.remove('hide')
    }

    function stop(){
        btnStop.classList.add('hide')
        btnSet.classList.remove('hide')
    }

    function soundOn(){
        btnSoundOn.classList.add('hide')
        btnSoundOff.classList.remove('hide')
    
    }

    function soundOff(){
        btnSoundOff.classList.add('hide')
        btnSoundOn.classList.remove('hide')
    }

    return{
        play,
        pause,
        set,
        stop,
        soundOn,
        soundOff
    }
}