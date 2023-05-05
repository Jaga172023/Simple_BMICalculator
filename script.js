const calcBtn = document.getElementById("btn")
const heightEl = document.getElementById("height")
const weightEl = document.getElementById("weight")
const resultBMI = document.getElementById("resultBMI")
const infoCondition = document.getElementById("weightCondition")

function calcBMI() {
    //console.log("Clicked!!");
    const heightEl = document.getElementById("height").value / 100
    const weightEl = document.getElementById("weight").value
    // console.log(heightEl, weightEl);

    const bmiValue = (+weightEl / (heightEl * heightEl)).toFixed(2);
    // console.log(bmiValue);
    resultBMI.innerText = bmiValue;

    if (bmiValue < 18.5) {
        console.log("UnderWeight");

        infoCondition.innerText = "Under Weight";
    } else if (bmiValue > 18.5 && bmiValue <= 22.9) {
        infoCondition.innerText = "Normal"
    } else if (bmiValue > 22.9 && bmiValue <= 24.9) {
        infoCondition.innerText = "OverWeight"
    } else if (bmiValue > 25 && bmiValue <= 29.9) {
        infoCondition.innerText = "Pre-Obese"
    } 
    else if (bmiValue > 29.9 && bmiValue <= 40) {
        infoCondition.innerText = "Obese - Type 1"
    } 
    else if (bmiValue > 40 && bmiValue <= 50) {
        infoCondition.innerText = "Obese - Type 2(Morbid Obese)"
    } 
    else if (bmiValue > 50) {
        infoCondition.innerText = "Obese - Type 2(Super Obese)"
    }
}

calcBtn.addEventListener("click", calcBMI)