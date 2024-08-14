let hourElem = document.getElementById('hour')
let minuteElem = document.getElementById('minute')
let secondElem = document.getElementById('seconds')





setInterval(function(){
    let date = new Date()

    let currentHour = date.getHours()
    let currentMinute = date.getMinutes()
    let currentSecond = date.getSeconds()

    if(currentSecond < 10){
        currentSecond = "0" + currentSecond
    }
    if(currentHour < 10){
        currentHour = "0" + currentHour
    }
    if(currentMinute < 10){
        currentMinute = "0" + currentMinute
    }
    hourElem.innerHTML = currentHour
    minuteElem.innerHTML = currentMinute
    secondElem.innerHTML = currentSecond
}, 1000)