import { Student } from './student.js';

let students = [];

if (localStorage.getItem('students')) {
    students = JSON.parse(localStorage.getItem('students'));
} else {
    loadStudents();
}

saveStudent(students);
console.table(students);

// LOAD STUDENT
function loadStudents() {

    const student1 = new Student( 'David', 'Headrick', '11-111-1111' );
    const student2 = new Student( 'Lindsey', 'Headrick', '22-222-2222' );
    const student3 = new Student( 'Jane', 'Headrick', '33-333-3333');

    students.push(student1);
    students.push(student2);
    students.push(student3);
    
    saveStudent(students);
    
}

// SAVE STUDENT
function saveStudent(students) {
    localStorage.setItem('students', JSON.stringify(students));
}


// console.table(students);