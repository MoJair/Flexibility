console.log("options打开了！");

window.onload = function test(){
    chrome.storage.local.set({"hh":66},function (){
        console.log("存储完成！");
    });
}

document.getElementById("button").addEventListener("click",function (){
    chrome.storage.local.get(["hh"],function (result){
        console.log("得到值");
        console.log(result);
    });
    testnotification();
});
document.getElementById("button2").addEventListener("click",function (){
    clearNotifications();
});

document.getElementById("button3").addEventListener("click",function (){
    getAllNotifications();
});
function testnotification() {
    chrome.notifications.create("123", {
        type:"basic",
        title:"测试通知",
        iconUrl:"../images/icon48.png",
        message:"准备睡觉！",
        contextMessage:"简略标题",
        requireInteraction:true
    },function (){
        console.log("通知发出");
    });
}

function clearNotifications() {
    chrome.notifications.clear("123",function (){
        console.log("清理通知");
    });
}

function getAllNotifications() {
    chrome.notifications.getAll(function (object) {
        console.log("获取所有通知");
        console.log(object);
    });
}



//创建并显示通知。
//chrome.notifications.create( notificationId?: string, options: NotificationOptions, callback?: function, )

//用户按下了通知中的按钮。
// chrome.notifications.onButtonClicked.addListener(
//     callback: function,
// )


//用户单击了通知的非按钮区域。
// chrome.notifications.onClicked.addListener(
//     callback: function,
// )


//通过系统或用户操作关闭通知。
// chrome.notifications.onClosed.addListener(
//     callback: function,
// )

//chrome.notifications.update( notificationId: string, options: NotificationOptions, callback?: function, )
