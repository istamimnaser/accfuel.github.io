const TotalTimeHR = document.getElementById("totalhr");
const TotalTimeMIN = document.getElementById("totalmin");
const AvgLapHR = document.getElementById("laptimehr");
const AvgLapMIN = document.getElementById("laptimemin");
const FuelRate = document.getElementById("avgfuel");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const caclbtn = document.getElementById("submit");
const formation = document.getElementById("formation");

let avg_min ;
let total_min ;
let fuel;
let lap;
let result;
let safe_result;


   caclbtn.addEventListener('click', (e) => {
    e.preventDefault();

    try {
        avg_min   = parseFloat(AvgLapHR.value) + (parseFloat(AvgLapMIN.value) / 60);
        total_min = (parseFloat(TotalTimeHR.value) * 60) + parseFloat(TotalTimeMIN.value);
        fuel      = parseFloat(FuelRate.value);

        // check if any value is not a number
       

        // ✅ Only runs if inputs are valid
        if (formation.checked) {
            lap = Math.ceil(total_min / avg_min) + 1;
        } else {
            lap = total_min / avg_min;
        }
       

        result1 = Math.ceil(lap * fuel);
        result2 = Math.ceil((lap * fuel) + Math.ceil(fuel));

          if (isNaN(avg_min) || isNaN(total_min) || isNaN(fuel)|| isNaN(lap)|| isNaN(result1)|| isNaN(result2)) {
            throw new Error("Invalid input");
        }

        screen1.textContent = `Minimum Fuel     : ${result1}L`;
        screen2.textContent = `Recommmended Fuel: ${result2}L`;
        screen3.textContent = `Number of Laps   : ${Math.ceil(lap)}`;
        screen1.classList.add("show");
        screen2.classList.add("show");
        screen3.classList.add("show");
    } 
    catch (err) {
       
        screen1.textContent = ``;
        screen2.textContent = `PLEASE FILL ALL THE BOXES`;
        screen3.textContent = ``;
        screen1.classList.add("show");
        screen2.classList.add("show");
        screen3.classList.add("show");
    }
});


