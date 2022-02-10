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
//clear items
clearBtn.addEventListener("click", clearItems);

const deleteBtn = document.querySelector('.delete-btn');
console.log(deleteBtn)

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    //get unique ID
    const id = new Date().getTime().toString();
    //if the value is there and  NOT editing
            // if(value !=='' && editFlag === false)
    if(value && !editFlag){
        //create the todo or grocery element
        const element = document.createElement('article');
        //add class
        element.classList.add('grocery-item');
        //add id
        const idAttr = document.createAttribute('data-id');
        idAttr.value = id;
        element.setAttributeNode(idAttr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;

        //selecting child elements
        const deleteBtn = element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn')
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        //append child
        list.appendChild(element);
        //display alert
        displayAlert('item added to the list','success')
        //show container
        container.classList.add("show-container");
        //add to local storage
        addToLocalStorage(id,value);
        //set back to default
        setBackToDefault()
    } //else if the value is not there, i.e not empty and editing
            // else if(value !=='' && editFlag === true)
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("value changed","success");
        //edit local storage
        editLocalStorage(editID,value);
        setBackToDefault();
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

//clear items
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");

    if(items.length > 0){
        items.forEach(function (item){
            list.removeChild(item);
        });
    }

    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    //localStorage.removeItem('list');
}

//edit function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set grocery form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

//delete function
function deleteItem(e){
   const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

   list.removeChild(element);

   //if grocery container is empty, remove clear item function by removing show-container
   if(list.children.length === 0){
       container.classList.remove("show-container")
   }
   displayAlert("item removed", "danger");
   setBackToDefault();
   //remove from Local Storage
   removeFromLocalStorage(id)
}

//set back to default
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    const grocery = {id, value};
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem('list')) : [];
    console.log(items);

    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));
}


function removeFromLocalStorage(id){}
function editLocalStorage(id, value) {}
function getLocalStor

//localStorage API
//setItem
//getItem
//removeItem
//save as strings

localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
const oranges = JSON.parse(localStorage.getItem('orange'));
console.log(oranges)
localStorage.removeItem("orange");

// const oranges = localStorage.getItem
// ****** SETUP ITEMS **********
