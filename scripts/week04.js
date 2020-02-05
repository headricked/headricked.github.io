import { Student } from './student.js';

let students = [];

let student1 = new Student('Joe','Montana','11-111-111', 101);
let student2 = new Student('Jill','Montana','22-222-222', 202);
let student3 = new Student('Bill','Montana','33-333-333', 303);

students.push(student1);
students.push(student2);
students.push(student3);

students.forEach(
    student => {
        // console.log(student);
        document.querySelector("tbody").innerHTML +=
            `
            <tr>
                <td>${ student.firstName }</td>
                <td>${ student.lastName }</td>
                <td>${ student.iNumber }</td>
                <td>${ student.age }</td>
            </tr>
            `
    }
);

console.log(JSON.stringify(students));