function predictDisease() {

let fever = document.querySelector("input[value='Fever']").checked;
let cough = document.querySelector("input[value='Cough']").checked;
let chestpain = document.querySelector("input[value='Chest Pain']").checked;
let dryskin = document.querySelector("input[value='Dry Skin']").checked;

let result = "";

// Disease conditions
if(fever && cough && chestpain){
    result = "Flu / Viral Infection";
}
else if(cough && chestpain){
    result = "Bronchitis";
}
else if(dryskin){
    result = "Skin Allergy";
}
else if(fever && cough){
    result = "Common Cold";
}
else{
    result = "No disease detected";
}

document.getElementById("result").innerText = "Possible Disease: " + result;
}
