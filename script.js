window.onload=function(){

setTimeout(function(){

document.getElementById("doors").classList.add("open");

},800);

}

function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234"){

window.location="dashboard.html";

}
else{

document.getElementById("error").innerHTML="Invalid Login";

}

}
