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


    caclbtn.addEventListener('click',(e)=>{
       e.preventDefault();
    avg_min      =   parseFloat(AvgLapHR.value)  + (parseFloat(AvgLapMIN.value)/60);
    total_min    =(parseFloat(TotalTimeHR.value) * 60) +parseFloat(TotalTimeMIN.value);
    fuel        =   parseFloat(FuelRate.value);
    
    if(formation.checked){
        
        lap = Math.ceil((total_min/avg_min))+1;
    }
    else{
        lap = total_min/avg_min;
    }

    result1 =Math.ceil(lap*fuel);
    result2 = Math.ceil((( lap)*fuel)+Math.ceil(fuel));
    
    console.log(result1);

    screen1.textContent = `Minimum Fuel     : ${result1}L`;
    screen2.textContent = `Recommmended Fuel: ${result2}L`;
    screen3.textContent = `Number of Laps   : ${Math.ceil(lap)}`;
    });

