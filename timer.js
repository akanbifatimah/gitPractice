const timerInterval =setInterval(myTimer, 1000);

let sec = 1;
let min = 0;
let hour = 2;


function myTimer(){
    sec = sec - 1
    if(sec < 0){
        sec = 59;

        min=min - 1;
    }

    if(min < 0){
        min=59

        hour= hour - 1;
    }

    if (hour === 0 && min === 0 && sec === 0){
        clearInterval(timerInterval)
    }
 console.log(`${sec} seconds, ${min} minutes  and ${hour} hours.`)
}