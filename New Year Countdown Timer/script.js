const days = document.getElementById('Days');
const hours = document.getElementById('Hours');
const minutes = document.getElementById('Minutes');
const seconds = document.getElementById('Seconds');


function countdown(){
    let newYear = '1 January 2023'
    let currentDate = new Date()
    let date = new Date(newYear);
    let totalSeconds = (date-currentDate)/1000;
    let day = Math.floor(totalSeconds/3600/24);
    let hour = Math.floor(totalSeconds/3600%24);
    let minute = Math.floor(totalSeconds/60%60);
    let second = Math.floor(totalSeconds%60);
    //console.log(day,hour,minute,second);
    
    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
}

setInterval(countdown,1000);