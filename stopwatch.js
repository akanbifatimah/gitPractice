const timeInterval =setInterval(myStopWatch, 10);

let ms = 0;
let sec =0;
let min = 0;
let hour = 0;


function myStopWatch(){
    ms = ms + 1;
    if(ms === 99){
        sec = sec + 1;

        ms = 0
    }

    if(sec ===59){
        min= min + 1;

        sec = 0;
    }

    if (min === 59){
        hour= hour + 1;

        min = 0;
    }

    if (hour === 6){
        clearInterval(timeInterval)
    }
 console.log(`${ms} milliseconds, ${sec} seconds, ${min} minutes  and ${hour} hours.`)
}
