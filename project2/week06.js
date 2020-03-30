import { Milestone } from './student.js';

let students = [];

// DESERIALIZE STRING INTO ARRAY ELEMENTS
if (localStorage.getItem('students')) {
    students = JSON.parse(localStorage.getItem('students'));
    loadStudent();
}

// ATTACH EVENTLISTENER TO ADD STUDENT BUTTON
document.querySelector('#btn-add-milestone').addEventListener('click', addStudent, false);
document.querySelector('#btn-add-milestone').addEventListener('click', autoFocus, false);

// window.addStudent = addStudent;

// FOCUS TEXT FIELD ON ADD STUDENT BUTTON CLICK
function autoFocus() {
    document.getElementById('milestone').focus();
}


// ADD STUDENT
function addStudent() {
    // GET VALUES OF FORM FIELDS AND SAVE INTO NEW STUDENT OBJECT
    const newStudent = new Milestone(
        document.getElementById('milestone').value,
        document.getElementById('date').value,
        document.getElementById('age').value,
        document.getElementById('location').value,
        document.getElementById('notes').value
    );

    // ADD STUDENT TO STUDENTS ARRAY
    students.push(newStudent);

    // SAVE TO LOCAL STORAGE
    saveStudent(students);

    // POPULATE THE TABLE
    loadStudent();

    // CLEAR FORM FIELDS
    clearFields();

    // CLOSE THE MODAL
    modal.style.display = "none";
}


// CLEAR FORM FIELDS FOLLOWING SUCCESSFUL SUBMISSION
function clearFields() {
    document.querySelector('#milestone').value = '';
    document.querySelector('#date').value      = '';
    document.querySelector('#age').value       = '';
    document.querySelector('#location').value  = '';
    document.querySelector('#notes').value     = '';
}

// CLEAR THE TABLE OF DATA
function clearStudents() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

// EDIT MILESTONE
function editStudent(student) {

    // let pos = students.indexOf(student);
    // if (pos < 0) {
    //     return;
    // }

    // // students.splice(pos, 1);

    // if (pos) {

    //         // define elements
    //         let div            = document.createElement('div');
    //         let br             = document.createElement('br');
    //         let inputMilestone = document.createElement('input');
    //         let inputDate      = document.createElement('input');
    //         let inputAge       = document.createElement('input');
    //         let inputLocation  = document.createElement('input');
    //         let inputNotes     = document.createElement('input');

    //         // set their attributes
    //         inputMilestone.setAttribute("type", "text");
    //         inputDate.setAttribute("type", "text");
    //         inputAge.setAttribute("type", "text");
    //         inputLocation.setAttribute("type", "text");
    //         inputNotes.setAttribute("type", "text");
        
    //         inputMilestone.setAttribute("value", student.milestone);
    //         inputDate.setAttribute("value", student.date);
    //         inputAge.setAttribute("value", student.age);
    //         inputLocation.setAttribute("value", student.location);
    //         inputNotes.setAttribute("value", student.notes);

    //         // build the form
    //         div.appendChild(inputMilestone);
    //         div.appendChild(document.createElement('br'));
    //         div.appendChild(inputDate);
    //         div.appendChild(document.createElement('br'));
    //         div.appendChild(inputAge);
    //         div.appendChild(document.createElement('br'));
    //         div.appendChild(inputLocation);
    //         div.appendChild(document.createElement('br'));
    //         div.appendChild(inputNotes);

    //         document.querySelector('#testForm').appendChild(div);


    // }
    
    console.log('EDIT STUDENT');
    console.log(student);
    console.log(student.milestone);
    console.log(student.date);
    console.log(student.age);
    console.log(student.location);
    console.log(student.notes);

    // SAVE TO LOCAL STORAGE
    saveStudent(students);

    // POPULATE THE TABLE
    loadStudent();
    
}

// DELETE MILESTONE
function deleteStudent(student) {
    console.log(student);

    let pos = students.indexOf(student);
    if (pos < 0) {
        return;
    }

    students.splice(pos, 1);

    // SAVE TO LOCAL STORAGE
    saveStudent(students);

    // POPULATE THE TABLE
    loadStudent();
    
}

function viewDetails(student) {
    // view more details about the milestone   
}

// LOAD STUDENT INTO HTML TABLE
function loadStudent() {
    clearStudents();

    students.forEach(
        (student) => {

            let tr          = document.createElement('tr');
            let tdMilestone = document.createElement('td');
            let tdDate      = document.createElement('td');
            let tdAge       = document.createElement('td');
            let tdLocation  = document.createElement('td');
            let tdNotes     = document.createElement('td');
            let tdEdit      = document.createElement('td');


            tdMilestone.textContent = student.milestone;
            tdDate.textContent      = student.date;
            tdAge.textContent       = student.age;
            tdLocation.textContent  = student.location;
            tdNotes.textContent     = student.notes;

            let aViewDetails = document.createElement('a');
            let aEdit        = document.createElement('a');
            let aDelete      = document.createElement('a');
            aViewDetails.setAttribute('href', '#');
            aEdit.setAttribute('href', '#');
            aDelete.setAttribute('href', '#');
            aViewDetails.addEventListener('click', viewDetails.bind(null, student), false);
            aEdit.addEventListener('click', editStudent.bind(null, student), false);
            aDelete.addEventListener('click', deleteStudent.bind(null, student), false);
            aViewDetails.textContent = student.milestone;
            aEdit.textContent = 'Edit';
            aDelete.textContent = 'Delete';


            tr.appendChild(aViewDetails);
            // tr.appendChild(tdMilestone);
            tr.appendChild(tdDate);
            // tr.appendChild(tdAge);
            // tr.appendChild(tdLocation);
            // tr.appendChild(tdNotes);
            tr.appendChild(tdEdit);
            tdEdit.appendChild(aEdit);
            tdEdit.appendChild(aDelete);

            document.querySelector('tbody').appendChild(tr);

        }
    );
}

// SAVE STUDENTS INTO JSON STRING
function saveStudent(students) {
    localStorage.setItem('students', JSON.stringify(students));
}

// MODAL FORM
// Get the modal
var modal = document.getElementById("modal-add-milestone");

// Get the button that opens the modal
var btn = document.getElementById("btn-modal-add-milestone");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


