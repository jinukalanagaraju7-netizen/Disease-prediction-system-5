function predictDisease(){

let symptoms=document.querySelectorAll("input[type='checkbox']:checked");
let count=symptoms.length;

let disease="";
let medicine="";

if(count<2){

disease="Please select minimum 2 symptoms";
medicine="";

}

else{

let fever=document.querySelector("input[value='Fever']").checked;
let cough=document.querySelector("input[value='Cough']").checked;
let headache=document.querySelector("input[value='Headache']").checked;
let cold=document.querySelector("input[value='Cold']").checked;
let chest=document.querySelector("input[value='Chest Pain']").checked;

if(fever && cough){

disease="Common Cold";
medicine="Paracetamol, Cetirizine, Drink warm water";

}

else if(fever && headache){

disease="Viral Fever";
medicine="Paracetamol, Rest, Drink fluids";

}

else if(cough && chest){

disease="Bronchitis";
medicine="Cough syrup, Steam inhalation";

}

else if(cold && cough){

disease="Flu";
medicine="Antiviral medicine, Rest";

}

else{

disease="Possible infection";
medicine="Consult doctor";

}

}

document.getElementById("result").innerHTML=
"🦠 Disease: "+disease+"<br>💊 Medicine: "+medicine;

}
