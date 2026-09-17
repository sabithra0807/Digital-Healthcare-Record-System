let records = [];
let editIndex = -1;

function addRecord() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;
    let doctor = document.getElementById("doctor").value;

    if (name === "" || age === "" || disease === "" || doctor === "") {
        alert("Please fill all fields");
        return;
    }

    let record = {
        name: name,
        age: age,
        disease: disease,
        doctor: doctor
    };

    if (editIndex === -1) {
        records.push(record);
    } else {
        records[editIndex] = record;
        editIndex = -1;
    }

    displayRecords();
    clearForm();
}

function displayRecords() {

    let table = document.getElementById("patientTable");

    table.innerHTML = "";

    records.forEach(function(record, index) {

        table.innerHTML += `
            <tr>
                <td>${record.name}</td>
                <td>${record.age}</td>
                <td>${record.disease}</td>
                <td>${record.doctor}</td>
                <td>
                    <button onclick="editRecord(${index})">Edit</button>
                    <button class="delete" onclick="deleteRecord(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editRecord(index) {

    document.getElementById("name").value = records[index].name;
    document.getElementById("age").value = records[index].age;
    document.getElementById("disease").value = records[index].disease;
    document.getElementById("doctor").value = records[index].doctor;

    editIndex = index;
}

function deleteRecord(index) {

    records.splice(index, 1);

    displayRecords();
}

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";
    document.getElementById("doctor").value = "";
}