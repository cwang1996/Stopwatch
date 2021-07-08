const start_btn = document.querySelector('.start')
const stop_btn = document.querySelector('.stop')
const reset_btn = document.querySelector('.reset')

const tens_time = document.getElementById('tens');
const seconds_time = document.getElementById('seconds');

let timer;
let seconds = 00;
let tens = 00;

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

function startTimer(){
    start_btn.addEventListener('click', function(){
        clearInterval(timer)
        timer = setInterval(startWatch, 10);
        startWatch();
    })
}

function stopTimer(){
    stop_btn.addEventListener('click', function(){
        clearInterval(timer);
    })
}

function resetTimer(){
    reset_btn.addEventListener('click', function(){
        clearInterval(timer);
        tens = "00";
        seconds = "00";
        tens_time.innerHTML = tens;
        seconds_time.innerHTML = seconds;
    })
}

function startWatch(){
    seconds++;
    if(seconds <= 9) {
        seconds_time.innerHTML = "0" + seconds;
    }

    if(seconds > 9) {
        seconds_time.innerHTML = seconds;
    }

    if(seconds > 99) {
        tens++;
        tens_time.innerHTML = "0" + tens;
        seconds = 0;
        seconds_time.innerHTML = "0" + 0;
    }

    if(tens > 9){
        tens_time.innerHTML = tens;
    }
}

startTimer();
stopTimer();
resetTimer();
