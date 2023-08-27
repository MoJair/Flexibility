console.log("打开了popup页面");

window.onload = function startTime(){
    let nowTimes = new Date();
    let hours = nowTimes.getHours();
    let Minutes = nowTimes.getMinutes();
    let Seconds = nowTimes.getSeconds();
    console.log(hours+":"+Minutes+":"+Seconds);
    document.getElementById("hours1").innerText = hours.toString().length===1?0:hours.toString().substring(0,1);
    document.getElementById("hours2").innerText = hours.toString().length===1?hours:hours.toString().substring(0,1);
    document.getElementById("minutes1").innerText = Minutes.toString().length===1?0:Minutes.toString().substring(0,1);
    document.getElementById("minutes2").innerText = Minutes.toString().length===1?Minutes:Minutes.toString().substring(1,2);
    document.getElementById("seconds1").innerText = Seconds.toString().length===1?0:Seconds.toString().substring(0,1);
    document.getElementById("seconds2").innerText = Seconds.toString().length===1?Seconds:Seconds.toString().substring(1,2);
    setTimeout(startTime,1000);
}
