function register(){

var user=document.getElementById("newuser").value;
var pass=document.getElementById("newpass").value;

if(user=="" || pass==""){
alert("Enter username and password");
return;
}

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account Created");

window.location="dashboard.html";

}

function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

var savedUser=localStorage.getItem("username");
var savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

window.location="dashboard.html";

}
else{

alert("Wrong Username or Password");

}

}
