function openDoors(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234"){

document.querySelector(".door-container").classList.add("open");

setTimeout(function(){
window.location="dashboard.html";
},2000);

}

else{
alert("Wrong Username or Password");
}

}
