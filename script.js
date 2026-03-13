function showRegister(){
document.getElementById("register").style.display="block";
}

function register(){

var user=document.getElementById("newuser").value;
var pass=document.getElementById("newpass").value;

if(user=="" || pass==""){
alert("Enter Username and Password");
return;
}

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account Created Successfully");

}

function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

var savedUser=localStorage.getItem("username");
var savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

window.location.href="dashboard.html";

}else{

alert("Invalid Username or Password");

}

}
