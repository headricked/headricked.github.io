import { Student } from './student.js';

let students = [];

if (localStorage.getItem('students')) {
    students = JSON.parse(localStorage.getItem('students'));
}

// ATTACH EVENTLISTENER TO ADD STUDENT BUTTON
document.querySelector('#btn-add-student').addEventListener('click', addStudent, false);

// window.addStudent = addStudent;

// ADD STUDENT
function addStudent() {
    // GET VALUES OF FORM FIELDS AND SAVE INTO NEW STUDENT OBJECT
    const newStudent = new Student(students) (
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('iNumber').value
    );

    // ADD STUDENT TO STUDENTS ARRAY
    students.push(newStudent);

    // SAVE TO LOCAL STORAGE
    saveStudent(students);

    // POPULATE THE TABLE
    loadStudents();

    // CLEAR FORM FIELDS
    clearFields();
}


// CLEAR FORM FIELDS FOLLOWING SUCCESSFUL SUBMISSION
function clearFields() {
    document.querySelector('firstName').value = '';
    document.querySelector('lastName').value = '';
    document.querySelector('iNumber').value = '';
}

// CLEAR THE TABLE OF DATA
function clearStudents() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

// LOAD STUDENT INTO HTML TABLE
function loadStudents() {
    clearStudents();

    students.forEach(
        (student) => {
            document.querySelector('tbody').innerHTML +=
            `
                <tr>
                    <td>${ student.firstName }</td>
                    <td>${ student.lastName }</td>
                    <td>${ student.iNumber }</td>
                </tr>
            `;
        }
    );
}

// SAVE STUDENT
function saveStudent(students) {
    localStorage.setItem('students', JSON.stringify(students));
}