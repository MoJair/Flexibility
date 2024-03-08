chrome.runtime.onInstalled.addListener(() =>{
    console.log("Flexibility安装成功！");
});

//所有设置
var allSetData = {
    monring:{time:"09:00:00",enableStatus:"",useStatus:"",title:"早上好！",message:""},
    after:{time:"09:00:00",enableStatus:"",useStatus:"",title:"中午好！",message:""},
    goodnight:{time:"09:00:00",enableStatus:"",useStatus:"",title:"下午好！",message:""},
    other:{time:"09:00:00",enableStatus:"",useStatus:"",title:"下午好！",message:""},
    timeShowModel:0,
    dayChangeStatus:0
}

setTimeout(st1,1000);
function st1(){
    console.log("6666666666666");
    test1();
}
function test1(){
    for (let key in allSetData) {
        console.log(key+"---->");
        console.log(allSetData[key]);
    }
}

function aa(){
    console.info("9999999999");
    setTimeout(aa,1000);
}
aa();
function getNowTime() {
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
    console.log("这是来之后台的时间方法");
    setTimeout(getNowTime,1000);
}
function getCountDown() {
    let timevalue = "23:10:00";
    let nowTimes = new Date();
    let hours = nowTimes.getHours();
    let Minutes = nowTimes.getMinutes();
    let Seconds = nowTimes.getSeconds();
    let split = timevalue.split(":");
    let allSeconds = (split[0]-hours)*3600+(split[1]-Minutes)*60+(split[2]-Seconds)*1;
    console.log(allSeconds);
    hours = Math.trunc(allSeconds/3600);
    Minutes = Math.trunc(allSeconds/60);
    Seconds = allSeconds%60;
    console.log(hours+":"+Minutes+":"+Seconds);
    setTimeout(getCountDown,1000);
}



chrome.alarms.create("test1",{ periodInMinutes: 2 });
chrome.alarms.onAlarm.addListener(() => {
    console.info("定时器"+new Date());
    //testnotification();
});

function testnotification() {
    chrome.notifications.create(null, {
        type:"basic",
        title:"测试通知",
        iconUrl:"../images/icon48.png",
        message:"准备睡觉！",
        contextMessage:"简略标题！",
        requireInteraction:true
    },function (){
        console.log("通知发出"+new Date());
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    console.log(sender);
    console.log(sendResponse);
    sendResponse({res: "hh"});
});
