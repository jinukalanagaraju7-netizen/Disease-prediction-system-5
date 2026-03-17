function predictDisease(){

let symptoms=document.querySelectorAll("input[type='checkbox']:checked");
let count=symptoms.length;

let disease="";
let medicine="";

if(count<2){

disease="Select at least 2 symptoms";

}

else{

let fever=document.querySelector("input[value='Fever']").checked;
let cough=document.querySelector("input[value='Cough']").checked;
let headache=document.querySelector("input[value='Headache']").checked;
let cold=document.querySelector("input[value='Cold']").checked;
let chest=document.querySelector("input[value='Chest Pain']").checked;
let rash=document.querySelector("input[value='Skin Rash']").checked;

if(fever && cough){

disease="Common Cold";
medicine="Paracetamol, Cetirizine";

}

else if(fever && headache){

disease="Viral Fever";
medicine="Paracetamol, Rest";

}

else if(cough && chest){

disease="Bronchitis";
medicine="Cough Syrup";

}

else if(rash){

disease="Skin Allergy";
medicine="Antihistamine";

}

else{

disease="Possible Infection";
medicine="Consult doctor";

}

}

document.getElementById("result").innerHTML=
"🦠 Disease: "+disease+"<br>💊 Medicine: "+medicine;

}
