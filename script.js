const enteredValue=document.getElementById("enteredValue");
const degreeDropdownInput = document.getElementById("DegreeIdInput");
const degreeDropdownOutput = document.getElementById("DegreeIdOutput");
const answer=document.getElementById("answer");
const button=document.getElementById("find");
button.addEventListener("click",handleClick);
function handleClick(){
    const selectedDegreeInput = degreeDropdownInput.value;
    const selectedDegreeOutput = degreeDropdownOutput.value;
    const inputValue = parseFloat(enteredValue.value);
   
    if(selectedDegreeInput==="Celcius" && selectedDegreeOutput=="Fahrenheit"){
        answer.value=(inputValue*1.8) +32;
        }
        else if(selectedDegreeInput==="Fahrenheit" && selectedDegreeOutput=="Celcius"){
            //Celsius (°C) = (Fahrenheit (°F) - 32) × 5/9
            answer.value=(inputValue-32)* (5/9);
          
        }
        else {
            answer.value=inputValue;
          
        }
}



