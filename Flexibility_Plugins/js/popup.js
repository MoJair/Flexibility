console.log("打开了popup页面");

window.onload = function startTime(){
    //getNowTime();
    //const bg = chrome.extension.getBackgroundPage();
    //var bg1 = chrome.runtime.getBackgroundPage();
    //bg.getNowTime();
    //getCountDown();
//console.log(bg1)
    //test();
}
//bg.test();



function test() {
    chrome.runtime.sendMessage("hello", (response) => {
        console.log(response);
    });
    setTimeout(test,1000);
}


