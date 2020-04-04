import { Milestone } from './milestone.js';

let selectedRow = null;
let milestones = [];

// DESERIALIZE STRING INTO ARRAY ELEMENTS
if (localStorage.getItem('milestones')) {
    milestones = JSON.parse(localStorage.getItem('milestones'));
    loadMilestone();
}

// ADD EVENTLISTENER
document.querySelector('#btn-save').addEventListener('click', onFormSubmit, false);

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
    // close modal
    modal.style.display = "none";
}

/*****************************************************************************
 * ADD MILESTONE
 ****************************************************************************/
function addMilestone() {
    const newMilestone = new Milestone(
        // document.getElementById('id').value,
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

    let inputMilestone = milestone.milestone;
    let inputDate = milestone.date;
    let inputAge = milestone.age;
    let inputLocation = milestone.location;
    let inputNotes = milestone.notes;

    document.getElementById("milestone").value = inputMilestone;
    document.getElementById("date").value = inputDate;
    document.getElementById("age").value = inputAge;
    document.getElementById("location").value = inputLocation;
    document.getElementById("notes").value = inputNotes;

    document.getElementById("milestone").readOnly = true;
    document.getElementById("date").readOnly = true;
    document.getElementById("age").readOnly = true;
    document.getElementById("location").readOnly = true;
    document.getElementById("notes").readOnly = true;

    document.getElementById("milestone").className = "read-only";
    document.getElementById("date").className = "read-only";
    document.getElementById("age").className = "read-only";
    document.getElementById("location").className = "read-only";
    document.getElementById("notes").className = "read-only";

    // open modal
    modal.style.display = "block";

    document.getElementById("btn-save").className = "hidden";
    document.getElementById("btn-edit").className = "visible";
    document.getElementById("btn-update").className = "hidden";
    document.getElementById("btn-delete").className = "visible";

    document.querySelector('#btn-edit').addEventListener('click', onEditMilestone.bind(null, milestone), false);
    document.querySelector('#btn-delete').addEventListener('click', deleteMilestone.bind(null, milestone), false);


}

/*****************************************************************************
 * ON EDIT MILESTONE RECORD
 ****************************************************************************/
function onEditMilestone(milestone) {

    document.getElementById("milestone").focus();

    // open modal
    modal.style.display = "block";

    document.getElementById("milestone").readOnly = false;
    document.getElementById("date").readOnly = false;
    document.getElementById("age").readOnly = false;
    document.getElementById("location").readOnly = false;
    document.getElementById("notes").readOnly = false;

    document.getElementById("milestone").classList.remove("read-only");
    document.getElementById("date").classList.remove("read-only");
    document.getElementById("age").classList.remove("read-only");
    document.getElementById("location").classList.remove("read-only");
    document.getElementById("notes").classList.remove("read-only");

    document.getElementById("btn-save").className = "hidden";
    document.getElementById("btn-edit").className = "hidden";
    document.getElementById("btn-update").className = "visible";
    document.getElementById("btn-delete").className = "visible";

    document.querySelector('#btn-update').addEventListener('click', updateMilestone.bind(null, milestone), false);

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
            let td = document.createElement('td');
            let tdMilestone = document.createElement('td');
            let tdDate = document.createElement('td');
            let tdAge = document.createElement('td');
            let tdLocation = document.createElement('td');
            let tdNotes = document.createElement('td');


            tdMilestone.textContent = milestone.milestone;
            tdDate.textContent = milestone.date;
            tdAge.textContent = milestone.age;
            tdLocation.textContent = milestone.location;
            tdNotes.textContent = milestone.notes;

            let aViewDetails = document.createElement('a');
            aViewDetails.setAttribute('href', '#');
            aViewDetails.addEventListener('click', onViewDetails.bind(null, milestone), false);
            aViewDetails.textContent = milestone.milestone;


            td.appendChild(aViewDetails);
            tr.appendChild(td);

            document.querySelector('tbody').appendChild(tr);
            document.getElementById("btn-modal-open").focus();

        }
    );
}

/*****************************************************************************
 * READ FORM DATA
 ****************************************************************************/
function readFormData() {
    let formData = {};
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
// function insertNewRecord(data) {
//     let table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
//     let newRow = table.insertRow(table.length);
//     let cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.id;
//     let cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.milestone;
//     let cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.date;
//     let cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.age;
//     let cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.location;
//     let cell6 = newRow.insertCell(5);
//     cell6.innerHTML = data.notes;
//     let cell7 = newRow.insertCell(6);
//     cell7.innerHTML = `
//                         <a href="#" onclick="onEdit(this)">Edit</a>
//                         <a href="#" onclick="onDelete(this)">Delete</a>
//                     `;
// }

/*****************************************************************************
 * RESET FORM
 ****************************************************************************/
function resetForm() {
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
// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     // document.getElementById("id").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("milestone").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("date").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("age").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("location").value = selectedRow.cells[4].innerHTML;
//     document.getElementById("notes").value = selectedRow.cells[5].innerHTML;
//     modal.style.display = "block";
// }

/*****************************************************************************
 * UPDATE MILESTONE
 ****************************************************************************/
function updateMilestone(milestone) {

    let id = milestone.id;
    let newMilestone = document.getElementById("milestone").value;
    let newDate = document.getElementById("date").value;
    let newAge = document.getElementById("age").value;
    let newLocation = document.getElementById("location").value;
    let newNotes = document.getElementById("notes").value;

    let newMilestones = JSON.parse(localStorage.milestones);

    // take the ID of the current milestone, loop through the milestones object in localStorage,
    // then update the local storage with the updated form value
    for (let i = 0; i < newMilestones.length; i++) {
        if(id === newMilestones[i].id){  //look for match by milestone ID
            milestones[i].milestone = newMilestone;
            milestones[i].date = newDate;
            milestones[i].age = newAge;
            milestones[i].location = newLocation;
            milestones[i].notes = newNotes;
            
            break;  //exit loop since you found the milestone ID
        }
    }

    localStorage.setItem("milestones", JSON.stringify(milestones));  //put the object back

    // close the modal
    modal.style.display = "none";

    saveMilestone(milestones);

    // load updated milestones from local storage
    milestones = JSON.parse(localStorage.getItem('milestones'));

    loadMilestone();
}

/*****************************************************************************
 * UPDATE RECORD
 ****************************************************************************/
function updateRecord(formData) {
    // selectedRow.cells[0].innerHTML = formData.id;
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
function deleteMilestone(milestone) {

    if (confirm(`Are you sure you want to deleted this milestone? ${milestone.milestone}`)) {

        let pos = milestones.indexOf(milestone);
        if (pos < 0) {
            return;
        }
    
        milestones.splice(pos, 1);

        milestone = null;

        resetForm();
        
        // SAVE TO LOCAL STORAGE
        saveMilestone(milestones);

        // POPULATE THE TABLE
        loadMilestone();

        // CLOSE THE MODAL
        modal.style.display = "none";

    }
}

/*****************************************************************************
 * MODAL
 ****************************************************************************/
// Get the modal
var modal = document.getElementById("form-modal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var btn = document.getElementById("btn-modal-open");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/*****************************************************************************
 * OPEN MODAL - when user clicks the 'Add Modal' button, open modal
 ****************************************************************************/
btn.onclick = function () {

    modal.style.display = "block";

    document.getElementById("milestone").focus();


    // document.getElementById("id").readOnly = false;
    document.getElementById("milestone").readOnly = false;
    document.getElementById("date").readOnly = false;
    document.getElementById("age").readOnly = false;
    document.getElementById("location").readOnly = false;
    document.getElementById("notes").readOnly = false;

    // document.getElementById("id").classList.remove("read-only");
    document.getElementById("milestone").classList.remove("read-only");
    document.getElementById("date").classList.remove("read-only");
    document.getElementById("age").classList.remove("read-only");
    document.getElementById("location").classList.remove("read-only");
    document.getElementById("notes").classList.remove("read-only");

    document.getElementById("btn-save").className = "visible";
    document.getElementById("btn-edit").className = "hidden";
    document.getElementById("btn-update").className = "hidden";
    document.getElementById("btn-delete").className = "hidden";
}

/*****************************************************************************
 * CLOSE MODAL - when user clicks on <span> (x), close the modal
 ****************************************************************************/
span.onclick = function () {
    modal.style.display = "none";
    resetForm();
}

/*****************************************************************************
 * CLOSE MODAL - when user clicks anywhere outside of modal, close modal
 ****************************************************************************/
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetForm();
    }
}

