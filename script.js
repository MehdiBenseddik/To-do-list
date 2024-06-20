const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li'); // creates new empty li (list) element
        li.innerHTML = inputBox.value; // sets the li element string to the input box value 
        listContainer.appendChild(li); // appends (adds) this new <li> element to the listContainer
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); // appends (adds) this new <span> element to the <li> element
    }
    inputBox.value = ''; // sets the input box value back to empty string
    saveData();
}

// Add event listener for the Enter key
inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {  // If the LI element is clicked
        e.target.classList.toggle('checked'); // toggles the checkbox
        saveData();
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();