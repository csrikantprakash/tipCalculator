let bill = document.querySelector("#bill");
let buttons = document.getElementsByTagName("button");
let tip = document.querySelector("#tip-display");
let total = document.querySelector("#total-display");
let noOfPeople = document.querySelector("#people");
let custom = document.querySelector("#custom");
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
}
noOfPeople.addEventListener("change", handleChange);
custom.addEventListener("change", handleCustom);

function handleCustom(e){  
    let billAmount = parseInt(bill.value);
    let tipPercentage = parseInt(e.target.value);
    tip.value = billAmount*(tipPercentage/100);
    custom.style.visibility = "hidden"
}

function handleClick(e){
    if(e.target.value != "reset"){
        if(e.target.value == "custom"){
            let custom = document.querySelector("#custom");
            custom.style.visibility = "visible";        
        }
        let billAmount = parseInt(bill.value);
        let tipPercentage = e.target.value;
        tip.value = billAmount*(tipPercentage/100);
    }
    else{
        bill.value = "";
        tip.value = "";
        total.value = "";
        noOfPeople.value = "";
        custom.style.visibility = "hidden";
        custom.value = ""       
    }
}
function handleChange(e){
    console.log("test");
    if(e.target.value != "" && tip.value != ""){
        console.log(bill.value);
        console.log(tip.value);
        console.log(e.target.value);
        total.value = parseInt(bill.value)+(parseInt(tip.value)/parseInt(e.target.value));
    } 
    console.log(total.value);
}