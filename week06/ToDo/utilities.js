import { toDo } from './toDo.js';

let toDoList = [];

// DESERIALIZE STRING INTO ARRAY ELEMENTS
if (localStorage.getItem('toDoList')) {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
    loadToDo();
}

// ATTACH EVENTLISTENER TO PAGE LOAD
window.addEventListener('load', renderCompleted, false);

// ATTACH EVENTLISTENER TO ADD STUDENT BUTTON
document.querySelector('#btn-add-todo').addEventListener('click', addToDo, false);
document.querySelector('#btn-add-todo').addEventListener('click', autoFocus, false);

// ATTACH EVENTLISTENER TO FILTER BUTTONS
document.querySelector('#btn-filter-all').addEventListener('click', filterAll, false);
document.querySelector('#btn-filter-active').addEventListener('click', filterActive, false);
document.querySelector('#btn-filter-completed').addEventListener('click', filterCompleted, false);
var checkboxElems = document.querySelectorAll("input[name='toDoCheckbox']");
// console.log(checkboxElems);


for (var i = 0; i < checkboxElems.length; i++) {
    checkboxElems[i].addEventListener("click", checkBox, false);
    // console.log(checkboxElems[i]);
}

/******************************************************************************
 * CHECKBOX - MARK TO DO ITEM COMPLETED
 *****************************************************************************/
function checkBox() {

    console.log(`checkBox()`);

    let toDoItemId = this.value;
    let pos = toDoList.findIndex(t => t.id == toDoItemId); // coerce toDoItemId to string with ==


    if (pos < 0) {
        return;
    }

    // toDoList[pos].completed = true;


    if(this.checked) {
        console.log('item checked');
        toDoList[pos].completed = true;
        // strike through the content of elements of classname 'item'
        // this.parentElement.nextSibling.style.textDecoration = "line-through";
        this.parentElement.nextSibling.classList.add('completed');

        toDoList.forEach(toDoItem => console.log(toDoItem));
    
        // SAVE TO LOCAL STORAGE
        saveToDo(toDoList);
    
    } else {
        console.log('item un-checked');
        toDoList[pos].completed = false;
        // this.parentElement.nextSibling.style.textDecoration = "none";
        this.parentElement.nextSibling.classList.remove('completed');


        // SAVE TO LOCAL STORAGE
        saveToDo(toDoList);
    }
}

/******************************************************************************
 * RENDER COMPLETED - ITEMS WITH STRIKETHROUGH
 *****************************************************************************/
function renderCompleted() {
    // do stuff
    let toDoItems = JSON.parse(localStorage.toDoList);

    for (let i = 0; i < toDoItems.length; i++) {
        // console.log(toDoItems[i].completed);
        if (toDoItems[i].completed === true) {
            // console.log(`this is completed: ${toDoItems[i].content}`);
            // console.log(this.document.innerHTML);
            checkboxElems[i].checked = true;
            // console.log(checkboxElems[i]);
            checkboxElems[i].parentElement.nextSibling.classList.add('completed');
        }
    }

}

/******************************************************************************
 * APPLY FILTER TO DISPLAY ALL
 *****************************************************************************/
function filterAll() {
    console.log('filterAll()');

    // POPULATE THE TABLE
    loadToDo();
}

/******************************************************************************
 * APPLY FILTER TO DISPLAY ACTIVE ONLY
 *****************************************************************************/
function filterActive() {
    console.log('filterActive()');
}

/******************************************************************************
 * APPLY FILTER TO DISPLAY COMPLETED ONLY
 *****************************************************************************/
function filterCompleted() {
    console.log('filterCompleted()');
}

/******************************************************************************
 * FOCUS TEXT FIELD ON ADD TO DO BUTTON CLICK
 *****************************************************************************/
function autoFocus() {
    document.getElementById('content').focus();
}

/******************************************************************************
 * ADD TODO
 *****************************************************************************/
function addToDo() {

    // get the timestamp
    let date = new Date();
    let timestamp = date.getTime();

    // get the checked bool
    let checked = false;

    // GET VALUES OF FORM FIELD AND SAVE INTO NEW TODO OBJECT
    const newToDo = new toDo(
        timestamp,
        document.getElementById('content').value,
        checked
    );

    // ADD STUDENT TO toDo List ARRAY
    toDoList.push(newToDo);

    // SAVE TO LOCAL STORAGE
    saveToDo(toDoList);

    // POPULATE THE TABLE
    loadToDo();

    // CLEAR FORM FIELDS
    clearFields();

    console.log(newToDo);


}

/******************************************************************************
 * CLEAR FORM FIELD FOLLOWING SUCCESSFUL SUBMISSION
 *****************************************************************************/
function clearFields() {
    document.querySelector('#content').value = '';
}

/******************************************************************************
 * CLEAR THE TABLE OF DATA
 *****************************************************************************/
function cleartoDoList() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

/******************************************************************************
 * DELETE TO DO ITEM
 *****************************************************************************/
function deleteToDo(toDoItem) {
    console.log('Deleted:');
    console.log(toDoItem);

    let pos = toDoList.indexOf(toDoItem);
    if (pos < 0) {
        return;
    }

    toDoList.splice(pos, 1);

    // SAVE TO LOCAL STORAGE
    saveToDo(toDoList);

    // POPULATE THE TABLE
    loadToDo();

}


/******************************************************************************
 * LOAD TO DO INTO HTML TABLE
 *****************************************************************************/
function loadToDo() {
    cleartoDoList();

    toDoList.forEach(
        (toDoItem) => {

            // find position of each to do item
            let pos = toDoList.indexOf(toDoItem);
            if (pos < 0) {
                return;
            }

            // console.log(toDoList[pos].completed);
        
            // create elements
            let tr = document.createElement('tr');
            let tdCheck = document.createElement('td');
            let tdCheckBox = document.createElement('input');
            let tdContent = document.createElement('td');
            let tdEdit = document.createElement('td');
            let aDelete = document.createElement('button');

            // Assigning the attributes to new checkbox element
            tdCheck.style.width = "1px";
            tdCheckBox.type  = "checkbox";
            tdCheckBox.name  = "toDoCheckbox";
            tdCheckBox.value  = toDoItem.id;
            tdCheckBox.checked = toDoItem.completed;


            // assigning the attributes to the new item
            tdContent.className = "item";
            tdContent.textContent = toDoItem.content;
            if (toDoItem.completed) {
                // console.log(tdContent.textContent);
                // tdContent.style.textDecoration = "line-through";
                tdContent.classList.add('completed');
                // tdContent.textContent.setAttribute("style", "background-color: red;");
                // tdContent.setAttribute("style", "background-color: red;");
            } else {
                tdContent.classList.remove('completed');
            }

            // assigning attributes to delete link
            aDelete.setAttribute('href', '#');
            aDelete.addEventListener('click', deleteToDo.bind(null, toDoItem), false);
            aDelete.textContent = 'X';

            // assemble the table structure and order of table elements
            tr.appendChild(tdCheck); // 1
            tdCheck.appendChild(tdCheckBox); // 2
            tr.appendChild(tdContent); // 3
            tr.appendChild(tdEdit); // 4
            tdEdit.appendChild(aDelete); // 5

            document.querySelector('tbody').appendChild(tr);

        }
    );
}

/******************************************************************************
 * SAVE toDoList INTO JSON STRING
 *****************************************************************************/
function saveToDo(toDoList) {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

/******************************************************************************
 * UPDATE toDoList IN LOCAL STORAGE
 *****************************************************************************/
function completeToDo(toDoList, completed) {
    let toDoItem = JSON.parse(localStorage.toDoList);

    for (let i = 0; i < toDoItem.length; i++) {
        if (inputName === toDoItem[i].name) {
            toDoItem[i].age += 2
            localStorage.setItem("toDoList", JSON.stringify(toDoItem[i].age));
        }
    }
}