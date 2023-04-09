//============Second assignment===========
//=====Q1=========
function createAdder(num) {
    return function(x) {
      return num + x;
    };
  }

  const user = createAdder(5);
console.log(user(10)); 
console.log(user(20)); 
//=============Q2===============

function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    } else if (arr[0] === value) {
      return true;
    } else {
      return searchArray(arr.slice(1), value);
    }
  }
 const arr = [1, 2, 3, 4, 5];
console.log(searchArray(arr, 3)); 
console.log(searchArray(arr, 6)); 
//======================Q3=====================

function addParagraph(text) {
    const newParagraph = document.createElement("p"); 
    newParagraph.textContent = text; 
    document.body.appendChild(newParagraph); 
  }
  addParagraph("Hello, world!");
  //==============Q4==================
  
  function addListItem(text) {
    const list = document.querySelector("ul"); 
    const newListItem = document.createElement("li"); 
    newListItem.textContent = text; 
    list.appendChild(newListItem); 
  }

  addListItem("First item"); 
  //=================Q5=================

  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color; 
  }

  const myElement = document.querySelector("#my-element");
changeBackgroundColor(myElement, "blue");
//=====================Q6===============

function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object)); 
  }

  const myObject1 = { name: "John", age: 30 };
saveToLocalStorage("my-object", myObject1); 

//=================Q7===================

function getFromLocalStorage(key) {
    const storedObject = localStorage.getItem(key); 
    return JSON.parse(storedObject); 
  }

  const myObject = getFromLocalStorage("my-object"); 
console.log(myObject); 
//====================Q8=================

function saveObjectToLocalStorage(object) {
    
    for (let key in object) {
      localStorage.setItem(key, JSON.stringify(object[key]));
    }
    const newObject = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      newObject[key] = value;
    }
    return newObject;
  }
const myOb = { name: "Ali", age: 30 };
const newObject = saveObjectToLocalStorage(myOb); 
console.log(newObject);
//============Assignment end================



  

