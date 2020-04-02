import { Milestone } from './milestone.js';

let selectedRow = null;
let milestones = [];

// DESERIALIZE STRING INTO ARRAY ELEMENTS
if (localStorage.getItem('milestones')) {
    milestones = JSON.parse(localStorage.getItem('milestones'));
    loadMilestone();
    console.log("done");
}

// ATTACH EVENTLISTENER TO ADD STUDENT BUTTON
document.querySelector('#btn-save').addEventListener('click', onFormSubmit, false);
document.querySelector('#btn-edit').addEventListener('click', onEditMilestone, false);

/*****************************************************************************
 * SUBMIT FORM DATA
 ****************************************************************************/
function onFormSubmit() {
    let formData = readFormData();
    if (selectedRow == null) {
        // insertNewRecord(formData);
        addMilestone();
    } else {
        updateRecord(formData);
    }
    resetForm();
    modal.style.display = "none";
}

/*****************************************************************************
 * ADD MILESTONE
 ****************************************************************************/
function addMilestone() {
    const newMilestone = new Milestone(
        document.getElementById('id').value,
        document.getElementById('milestone').value,
        document.getElementById('date').value,
        document.getElementById('age').value,
        document.getElementById('location').value,
        document.getElementById('notes').value
    );

    // add to the object
    milestones.push(newMilestone);

    // save to local storage
    saveMilestone(milestones);

    // populate tbody of table
    loadMilestone();

}


/*****************************************************************************
 * SAVE TO LOCAL STORAGE AS JSON STRING
 ****************************************************************************/
function saveMilestone(milestones) {
    localStorage.setItem('milestones', JSON.stringify(milestones));
}



/*****************************************************************************
 * VIEW MILESTONE RECORD
 ****************************************************************************/
function onViewDetails(milestone) {
    console.log(`onViewMileston():`);
    console.log(milestone);


    let inputId = milestone.id;
    let inputMilestone = milestone.milestone;
    let inputDate = milestone.date;
    let inputAge = milestone.age;
    let inputLocation = milestone.location;
    let inputNotes = milestone.notes;

    console.log(inputMilestone);

    // selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = inputId;
    document.getElementById("milestone").value = inputMilestone;
    document.getElementById("date").value = inputDate;
    document.getElementById("age").value = inputAge;
    document.getElementById("location").value = inputLocation;
    document.getElementById("notes").value = inputNotes;

    document.getElementById("id").readOnly = true;
    document.getElementById("milestone").readOnly = true;
    document.getElementById("date").readOnly = true;
    document.getElementById("age").readOnly = true;
    document.getElementById("location").readOnly = true;
    document.getElementById("notes").readOnly = true;

    document.getElementById("id").className = "read-only";
    document.getElementById("milestone").className = "read-only";
    document.getElementById("date").className = "read-only";
    document.getElementById("age").className = "read-only";
    document.getElementById("location").className = "read-only";
    document.getElementById("notes").className = "read-only";

    modal.style.display = "block";

    document.getElementById("btn-save").className = "hidden";
    document.getElementById("btn-edit").className = "visible";
    document.getElementById("btn-delete").className = "visible";

}

/*****************************************************************************
 * ON EDIT MILESTONE RECORD
 ****************************************************************************/
function onEditMilestone(milestone) {
    console.log(`onEditMilestone:`);
    console.log(milestone);


    let inputId = milestone.id;
    let inputMilestone = milestone.milestone;
    let inputDate = milestone.date;
    let inputAge = milestone.age;
    let inputLocation = milestone.location;
    let inputNotes = milestone.notes;

    console.log(milestones[2].milestone);

    // selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = inputId;
    document.getElementById("milestone").value = inputMilestone;
    document.getElementById("date").value = inputDate;
    document.getElementById("age").value = inputAge;
    document.getElementById("location").value = inputLocation;
    document.getElementById("notes").value = inputNotes;
    modal.style.display = "block";

    document.getElementById("id").readOnly = false;
    document.getElementById("milestone").readOnly = false;
    document.getElementById("date").readOnly = false;
    document.getElementById("age").readOnly = false;
    document.getElementById("location").readOnly = false;
    document.getElementById("notes").readOnly = false;

    document.getElementById("id").classList.remove("read-only");
    document.getElementById("milestone").classList.remove("read-only");
    document.getElementById("date").classList.remove("read-only");
    document.getElementById("age").classList.remove("read-only");
    document.getElementById("location").classList.remove("read-only");
    document.getElementById("notes").classList.remove("read-only");

    document.getElementById("btn-save").className = "visible";
    document.getElementById("btn-edit").className = "hidden";
    document.getElementById("btn-delete").className = "visible";

    updateMilestone();

}

/*****************************************************************************
 * CLEAR MILESTONES FROM TABLE (SO NO REPEATS)
 ****************************************************************************/
function clearMilestones() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}


/*****************************************************************************
 * LOAD DATA FROM LOCAL STORAGE
 ****************************************************************************/
function loadMilestone() {
    clearMilestones();

    milestones.forEach(
        (milestone) => {

            let tr = document.createElement('tr');
            let tdId = document.createElement('td');
            let tdMilestone = document.createElement('td');
            let tdDate = document.createElement('td');
            let tdAge = document.createElement('td');
            let tdLocation = document.createElement('td');
            let tdNotes = document.createElement('td');
            // let tdEdit = document.createElement('td');


            tdId.textContent = milestone.id;
            tdMilestone.textContent = milestone.milestone;
            tdDate.textContent = milestone.date;
            tdAge.textContent = milestone.age;
            tdLocation.textContent = milestone.location;
            tdNotes.textContent = milestone.notes;

            let aViewDetails = document.createElement('a');
            // let aEdit = document.createElement('a');
            // let aDelete = document.createElement('a');
            aViewDetails.setAttribute('href', '#');
            // aEdit.setAttribute('href', '#');
            // aDelete.setAttribute('href', '#');
            aViewDetails.addEventListener('click', onViewDetails.bind(null, milestone), false);
            // aViewDetails.addEventListener('click', onEditMilestone.bind(null, milestone), false);
            // aEdit.addEventListener('click', onEditMilestone.bind(null, milestone), false);
            // aDelete.addEventListener('click', deleteStudent.bind(null, milestone), false);
            aViewDetails.textContent = milestone.milestone;
            // aEdit.textContent = 'Edit';
            // aDelete.textContent = 'Delete';


            tr.appendChild(aViewDetails);
            // tr.appendChild(tdMilestone);
            // tr.appendChild(tdDate);
            // tr.appendChild(tdAge);
            // tr.appendChild(tdLocation);
            // tr.appendChild(tdNotes);
            // tr.appendChild(tdEdit);
            // tdEdit.appendChild(aEdit);
            // tdEdit.appendChild(aDelete);

            document.querySelector('tbody').appendChild(tr);

        }
    );
}



/*****************************************************************************
 * READ FORM DATA
 ****************************************************************************/
function readFormData() {
    let formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["milestone"] = document.getElementById("milestone").value;
    formData["date"] = document.getElementById("date").value;
    formData["age"] = document.getElementById("age").value;
    formData["location"] = document.getElementById("location").value;
    formData["notes"] = document.getElementById("notes").value;
    return formData;
}

/*****************************************************************************
 * INSERT NEW RECORD
 ****************************************************************************/
function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.milestone;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.date;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.location;
    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.notes;
    let cell7 = newRow.insertCell(6);
    cell7.innerHTML = `
                        <a href="#" onclick="onEdit(this)">Edit</a>
                        <a href="#" onclick="onDelete(this)">Delete</a>
                    `;
}

/*****************************************************************************
 * RESET FORM
 ****************************************************************************/
function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("milestone").value = "";
    document.getElementById("date").value = "";
    document.getElementById("age").value = "";
    document.getElementById("location").value = "";
    document.getElementById("notes").value = "";
    selectedRow = null;
}

/*****************************************************************************
 * EDIT RECORD
 ****************************************************************************/
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("milestone").value = selectedRow.cells[1].innerHTML;
    document.getElementById("date").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("location").value = selectedRow.cells[4].innerHTML;
    document.getElementById("notes").value = selectedRow.cells[5].innerHTML;
    modal.style.display = "block";
}

/*****************************************************************************
 * UPDATE MILESTONE
 ****************************************************************************/
function updateMilestone() {

    let newId = document.getElementById("id").value;
    let newMilestone = document.getElementById("milestone").value;
    let newDate = document.getElementById("date").value;
    let newAge = document.getElementById("age").value;
    let newLocation = document.getElementById("location").value;
    let newNotes = document.getElementById("notes").value;


    let newMilestones = JSON.parse(localStorage.milestones);
    for (let i = 0; i < newMilestones.length; i++) {
        if(inputName === persons[i].name){  //look for match with name
            persons[i].age += 2;  //add two
            
            break;  //exit loop since you found the person
        }
    }
    localStorage.setItem("milestones", JSON.stringify(newMilestones));  //put the object back


    modal.style.display = "none";
}

/*****************************************************************************
 * UPDATE RECORD
 ****************************************************************************/
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.milestone;
    selectedRow.cells[2].innerHTML = formData.date;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.location;
    selectedRow.cells[5].innerHTML = formData.notes;
    modal.style.display = "none";
}

/*****************************************************************************
 * DELETE RECORD
 ****************************************************************************/
function onDelete(td) {
    if (confirm(`Are you sure you want to deleted this milestone?`)) {
        let row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}


/*****************************************************************************
 * MODAL
 ****************************************************************************/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";

    document.getElementById("id").readOnly = false;
    document.getElementById("milestone").readOnly = false;
    document.getElementById("date").readOnly = false;
    document.getElementById("age").readOnly = false;
    document.getElementById("location").readOnly = false;
    document.getElementById("notes").readOnly = false;

    document.getElementById("id").classList.remove("read-only");
    document.getElementById("milestone").classList.remove("read-only");
    document.getElementById("date").classList.remove("read-only");
    document.getElementById("age").classList.remove("read-only");
    document.getElementById("location").classList.remove("read-only");
    document.getElementById("notes").classList.remove("read-only");

    document.getElementById("btn-save").className = "visible";
    document.getElementById("btn-edit").className = "hidden";
    document.getElementById("btn-delete").className = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    resetForm();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetForm();
    }
}

