let selectedRow = null;

function onFormSubmit() {
    let formData = readFormData();
    if(selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    let formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = `
                        <a href="#" onclick="onEdit(this)">Edit</a>
                        <a href="#" onclick="onDelete(this)">Delete</a>
                    `;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm("Delete this record?")) {
        let row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();    
    }
}