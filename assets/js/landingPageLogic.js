// Create variables for modal, openModalButton, closeModalButton, and EACH tasklist

const modal = document.getElementById('formModal');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementsByClassName('closeModalButton');
const morningTasklist = document.getElementById('morningTasks');
const midDayTasklist = document.getElementById('midDayTasks');
const afternoonTasklist = document.getElementById('afternoonTasks');

// Ensure all tasklists are of the datatype OBJECT (Key/value pair: taskTitle, taskTimeOfDay)

let morningTasks = {};
let midDayTasks = {};
let afternoonTasks = {};

//--------------------------------------------------------------------
//                MODAL OPEN/CLOSE FUNCTIONS
//--------------------------------------------------------------------

// Add "onclick" to openModalButton that changes the style of the modal to "block"

openModalButton.onclick = function () {
    modal.style.display = "block";
};

// Add "onclick" to closeModalButton that hides the modal

closeModalButton.onclick = function () {
    modal.style.display = "none";
};

// Add "onclick" to the area outside of the modal to close when clicked

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//--------------------------------------------------------------------
//                RENDER/WRITE TASKLIST FUNCTIONS
//--------------------------------------------------------------------

// Render the MORNING tasklist
function renderMorningTasks() {
    morningTasklist.innerHTML = '';

// Write morningTasks to the DOM (Append list items to morningTasks container)
    for (let i = 0; i < morningTasks.length; i++) {
        const morningTask = morningTasks[i];
        const li = document.createElement('li');
        li.textContent = morningTask;
        li.setAttribute('data-index', i);
        morningTasklist.appendChild(li);
    }
};

// Render the MIDDAY tasklist
function renderMidDayTasks() {
    midDayTasklist.innerHTML = '';

// Write midDayTasks to the DOM (Append list items to midDayTasks container)
    for (let i = 0; i < midDayTasks.length; i++) {
        const midDayTask = midDayTasks[i];
        const li = document.createElement('li');
        li.textContent = midDayTask;
        li.setAttribute('data-index', i);
        midDayTasklist.appendChild(li);
    }
};

// Render the AFTERNOON tasklist
function renderAfternoonTasks() {
    afternoonTasklist.innerHTML = '';

// Write afternoonTasks to the DOM (Append list items to afternoonTasks container)
    for (let i = 0; i < afternoonTasks.length; i++) {
        const afternoonTask = afternoonTasks[i];
        const li = document.createElement('li');
        li.textContent = afternoonTask;
        li.setAttribute('data-index', i);
        afternoonTasklist.appendChild(li);
    }
};

//--------------------------------------------------------------------
// INITIALIZE TASKLISTS FUNCTION (Functions executed on page load)
//--------------------------------------------------------------------