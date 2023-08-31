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
});
