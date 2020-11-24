// UC1
function showTime(){
    const date=new Date();
    return date.getHours()+"Hrs:"+date.getMinutes()+"Mins:"+date.getSeconds()+"Secs";
}
function showSessionExpire(){
    console.log("Activity-B: Your session expired at" +showTime());
}
console.log("Activity-A:Trigerring Activity-B at"+showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A:Trigerring Activity-B at"+showTime()+"will execute after 5 seconds");

// UC2 Make AJAX call to read json
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function makeAJAXCall(methodType, url, callback, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.open(methodType,url,async);
    xhr.send();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201){
                callback(xhr.responseText);
            } else if (xhr.status >= 400) {
                console.log("Handle 400 Client Error or 500 Server Error at: "+showTime());
            }
        }
    }
}

let getURL = "http://localhost:3000/employees";
makeAJAXCall("GET",getURL,getUserDetails,true)
function getUserDetails(data){
    console.log("Get User Data at: " + showTime() + " data: " +data)
 } 