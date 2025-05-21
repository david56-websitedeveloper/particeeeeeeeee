const inputBox = document.getElementById("todo-lists");
const inputLists = document.getElementById("list-container");

function addTask () {
    if(inputBox.value === ''){
        alert("Write Somthings");
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        inputLists.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }

    inputBox.value = "";
    saveData();
}

inputLists.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
    }
    else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove();
          saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", inputLists.innerHTML);
}

function getData(){
    inputLists.innerHTML = localStorage.getItem("data");
}

getData();