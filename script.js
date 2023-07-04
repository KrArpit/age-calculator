let enteredDay= document.getElementById("dayValue");
let enteredMonth = document.getElementById("monthValue");
let enteredYear = document.getElementById("yearValue");

let labelValue = document.getElementsByClassName("label");

let dayErrorMessage = document.getElementById("dayError");
let monthErrorMessage = document.getElementById("monthError");
let yearErrorMessage = document.getElementById("yearError");

let button = document.getElementById("btn");

let displayYear = document.getElementById("yearResult");
let displayMonth = document.getElementById("monthResult");
let displayDay = document.getElementById("dayResult");

button.addEventListener("click",() => {
    if(enteredDay.value !="" && enteredMonth.value !="" && enteredYear.value !=""){
        
        let date = new Date();
        let currentDay = date.getDate();
        let currentMonth = date.getMonth() + 1;
        let currentYear = date.getFullYear();
        let months = [31,28,31,30,31,30,31,31,30,31,30,31];

        if(enteredYear.value < currentYear){
            if(enteredMonth.value <= 12){
                if(enteredDay.value <= months[(enteredMonth.value)-1]){
                    if(enteredDay.value > currentDay) {
                        currentDay = currentDay + months[currentMonth-1];
                        currentMonth  = currentMonth -1;
                    }
                    if(enteredMonth.value > currentMonth) {
                        currentMonth = currentMonth + 12;
                        currentYear = currentYear - 1;
                    }
            
                    displayDay.innerText= currentDay - enteredDay.value +" ";
                    displayMonth.innerText= currentMonth - enteredMonth.value + " ";
                    displayYear.innerText= currentYear - enteredYear.value+" ";
                }
                else{
                    dayErrorMessage.innerText= "Must be a valid day";
        labelValue[0].style.color='hsl(0, 100%, 67%)';
        enteredDay.style.border='1px solid hsl(0, 100%, 67%)';
        enteredDay.style.outline='none';
                }
                }
                else{
                    monthErrorMessage.innerText= "Must be a valid month";
                    labelValue[1].style.color='hsl(0, 100%, 67%)';
                    enteredMonth.style.border='1px solid hsl(0, 100%, 67%)';
                    enteredMonth.style.outline='none';
                    if(enteredDay.value > 31){
                    dayErrorMessage.innerText= "Must be a valid day";
                    labelValue[0].style.color='hsl(0, 100%, 67%)';
                    enteredDay.style.border='1px solid hsl(0, 100%, 67%)';
                    enteredDay.style.outline='none';
                }
            }
        }
    else if(enteredYear.value == currentYear ){
        if(enteredMonth.value <= currentMonth){
            if(enteredDay.value < currentDay){
        if(enteredDay.value > currentDay) {
            currentDay = currentDay + months[currentMonth-1];
            currentMonth  = currentMonth -1;
        }
        if(enteredMonth.value > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
        }

        displayDay.innerText= currentDay - enteredDay.value +" ";
        displayMonth.innerText= currentMonth - enteredMonth.value + " ";
        displayYear.innerText= currentYear - enteredYear.value+" ";
    }
    else{
        dayErrorMessage.innerText= "Must be a valid day";
        labelValue[0].style.color='hsl(0, 100%, 67%)';
        enteredDay.style.border='1px solid hsl(0, 100%, 67%)';
        enteredDay.style.outline='none';
    }
    }
    else{
        monthErrorMessage.innerText= "Must be a valid month";
        labelValue[1].style.color='hsl(0, 100%, 67%)';
        enteredMonth.style.border='1px solid hsl(0, 100%, 67%)';
        enteredMonth.style.outline='none';
        if(enteredDay.value > 31){
        dayErrorMessage.innerText= "Must be a valid day";
        labelValue[0].style.color='hsl(0, 100%, 67%)';
        enteredDay.style.border='1px solid hsl(0, 100%, 67%)';
        enteredDay.style.outline='none';
        }
    }
    }
    else{
        yearErrorMessage.innerText= "Must be in the past";
        labelValue[2].style.color='hsl(0, 100%, 67%)';
        enteredYear.style.border='1px solid hsl(0, 100%, 67%)';
        enteredYear.style.outline='none';
        if(enteredMonth.value > 12)
        monthErrorMessage.innerText= "Must be a valid month";
        labelValue[1].style.color='hsl(0, 100%, 67%)';
        enteredMonth.style.border='1px solid hsl(0, 100%, 67%)';
        enteredMonth.style.outline='none';
        if(enteredDay.value > currentDay){
        dayErrorMessage.innerText= "Must be a valid day";
        labelValue[0].style.color='hsl(0, 100%, 67%)';
        enteredDay.style.border='1px solid hsl(0, 100%, 67%)';
        enteredDay.style.outline='none';}
    }

    }
    else{
        dayErrorMessage.innerText= "This field is required";
        monthErrorMessage.innerText= "This field is required";
        yearErrorMessage.innerText= "This field is required";

        for(let i=0;i<labelValue.length;i++) {
        labelValue[i].style.color='hsl(0, 100%, 67%)';}
        
        enteredDay.style.border='1px solid hsl(0, 100%, 67%)';
        enteredDay.style.outline='none';

        enteredMonth.style.border='1px solid hsl(0, 100%, 67%)';
        enteredMonth.style.outline='none';

        enteredYear.style.border='1px solid hsl(0, 100%, 67%)';
        enteredYear.style.outline='none';

    }
});