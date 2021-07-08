let counter = 0;
const currentNumber = document.getElementById('currentnumber');
const decrease_button = document.getElementById('decrease');
const reset_button = document.getElementById('reset');
const increase_button = document.getElementById('increase');

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

function end(){
    if(counter == 17){
        currentNumber.innerHTML = `<h2 style='color:#87D68D; font-size: 20px;'>I love you Jennifer <3</h2>`;
    }
}

function buttonClick(){
    decrease_button.addEventListener('click', function(){
        counter--;
        currentNumber.innerHTML = counter;
        end();
    });

    reset_button.addEventListener('click', function(){
        counter = 0;
        currentNumber.innerHTML = counter;
        end();
    });

    increase_button.addEventListener('click', function(){
        counter++;
        currentNumber.innerHTML = counter;
        end();
    });
}

buttonClick();