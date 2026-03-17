function predictDisease(){

var selected=[];
var boxes=document.querySelectorAll("input[name='symptom']:checked");

boxes.forEach(function(box){
selected.push(box.value);
});

if(selected.length < 2){
document.getElementById("result").innerHTML="⚠ Please select at least 2 symptoms";
document.getElementById("result").style.background="orange";
return;
}

var disease="Common Viral Infection";
var probability="60%";
var color="green";

/* Disease Logic */

if(selected.includes("fever") && selected.includes("cough")){
disease="Flu";
probability="85%";
color="green";
}

else if(selected.includes("fever") && selected.includes("vomiting")){
disease="Food Poisoning";
probability="80%";
color="green";
}

else if(selected.includes("headache") && selected.includes("blurvision")){
disease="Migraine";
probability="75%";
color="green";
}

else if(selected.includes("fatigue") && selected.includes("weightloss")){
disease="Diabetes";
probability="90%";
color="red";
}

else if(selected.includes("shortbreath") && selected.includes("chestpain")){
disease="Heart Problem";
probability="92%";
color="red";
}

else if(selected.includes("itching") && selected.includes("rash")){
disease="Skin Allergy";
probability="70%";
color="green";
}

else if(selected.includes("cold") && selected.includes("sorethroat")){
disease="Common Cold";
probability="65%";
color="green";
}

else if(selected.includes("dizziness") && selected.includes("fatigue")){
disease="Low Blood Pressure";
probability="70%";
color="green";
}

else if(selected.includes("diarrhea") && selected.includes("stomach")){
disease="Stomach Infection";
probability="80%";
color="green";
}

else if(selected.includes("backpain") && selected.includes("legpain")){
disease="Muscle Pain";
probability="60%";
color="green";
}

/* Result Display */

document.getElementById("result").innerHTML=
"🧠 AI Health Analysis <br><br>" +
"🩺 Possible Disease: <b>"+disease+"</b><br>" +
"📊 Probability: <b>"+probability+"</b><br><br>" +
"👨‍⚕ Suggestion: Please consult a doctor for confirmation.";

document.getElementById("result").style.background=color;
document.getElementById("result").style.color="white";

}

/* Clear Symptoms */

function clearSymptoms(){

var boxes=document.querySelectorAll("input[name='symptom']");
boxes.forEach(function(box){
box.checked=false;
});

document.getElementById("result").innerHTML="Result cleared";
document.getElementById("result").style.background="white";
document.getElementById("result").style.color="black";

}

function logout(){
window.location="index.html";
}
