// UC1
function showTime(){
    const date=new Date();
    return date.getHours()+"Hrs:"+date.getMinutes()+"Mins:"+date.getSeconds()+"Secs";
}

// UC2 Make AJAX call to read json
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function makeAJAXCall(methodType, url, callback, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.open(methodType,url,async);
    if(data !=null)
    {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }
    else
    {
        xhr.send();
    }

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

const deleteURL = "http://localhost:3000/employees/1";
function userDeleted(data){
   console.log("User Deleted at: " + showTime() + " data: "+data)
}
makeAJAXCall("DELETE", deleteURL, userDeleted, false);

const postURL = "http://localhost:3000/employees";
const emplData = {name: "Kavya",salary: "3000"};
function userAdded(data){
   console.log("User Added at: " + showTime() + " data: "+data)
}
makeAJAXCall("POST", postURL, userAdded, true, emplData);
