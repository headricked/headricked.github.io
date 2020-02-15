import { Student } from './student.js';

let students = [];

// DESERIALIZE STRING INTO ARRAY ELEMENTS
if (localStorage.getItem('students')) {
    students = JSON.parse(localStorage.getItem('students'));
    loadStudent();
}

// ATTACH EVENTLISTENER TO ADD STUDENT BUTTON
document.querySelector('#btn-add-student').addEventListener('click', addStudent, false);
document.querySelector('#btn-add-student').addEventListener('click', autoFocus, false);

// window.addStudent = addStudent;

// FOCUS TEXT FIELD ON ADD STUDENT BUTTON CLICK
function autoFocus() {
    document.getElementById('firstName').focus();
}


// ADD STUDENT
function addStudent() {
    // GET VALUES OF FORM FIELDS AND SAVE INTO NEW STUDENT OBJECT
    const newStudent = new Student(
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('iNumber').value
    );

    // ADD STUDENT TO STUDENTS ARRAY
    students.push(newStudent);

    // SAVE TO LOCAL STORAGE
    saveStudent(students);

    // POPULATE THE TABLE
    loadStudent();

    // CLEAR FORM FIELDS
    clearFields();
}


// CLEAR FORM FIELDS FOLLOWING SUCCESSFUL SUBMISSION
function clearFields() {
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#iNumber').value = '';
}

// CLEAR THE TABLE OF DATA
function clearStudents() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}


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


// LOAD STUDENT INTO HTML TABLE
function loadStudent() {
    clearStudents();

    students.forEach(
        (student) => {

            let tr = document.createElement('tr');
            let tdFirstName = document.createElement('td');
            let tdLastName = document.createElement('td');
            let tdINumber = document.createElement('td');
            let tdEdit = document.createElement('td');

            tdFirstName.textContent = student.firstName;
            tdLastName.textContent = student.lastName;
            tdINumber.textContent = student.iNumber;

            let aDelete = document.createElement('a');
            aDelete.setAttribute('href', '#');
            aDelete.addEventListener('click', deleteStudent.bind(null, student), false);
            aDelete.textContent = 'Delete';


            tdEdit.appendChild(aDelete);

            tr.appendChild(tdFirstName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdINumber);
            tr.appendChild(tdEdit);

            document.querySelector('tbody').appendChild(tr);

            // document.querySelector('tbody').innerHTML +=
            // `<tr>
            //     <td>${ student.firstName }</td>
            //     <td>${ student.lastName }</td>
            //     <td>${ student.iNumber }</td>
            // </tr>`;
        }
    );
}

// SAVE STUDENTS INTO JSON STRING
function saveStudent(students) {
    localStorage.setItem('students', JSON.stringify(students));
}