// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
clearBtn = document.querySelector(".clear-btn")

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    console.log(value)
    //get unique ID
    const id = new Date().getTime().toString();
    //if the value is there and  NOT editing
    // if(value !=='' && editFlag === false)
    if(value && !editFlag){
        console.log("add item to the list")
    } //if the value is not there, i.e not empty and editing
    // else if(value !=='' && editFlag === true)
    else if(value && editFlag){
        console.log('editing');
    } else {
        displayAlert("please enter value", "danger");
    }
}

 //display  alert function
 function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert function
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`)
    }, 1000);
}




// ****** LOCAL STORAGE **********




// ****** SETUP ITEMS **********
