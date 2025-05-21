const inputValue = document.getElementById("input");
const inputLists = document.getElementById("list");

function myLists() {
    if(inputValue.value === ''){
        alert("write something");

    } else{
        let li = document.createElement('li');
        li.innerHTML = inputValue.value;
        inputLists.appendChild(li);
    }
    inputValue.value = '';
}