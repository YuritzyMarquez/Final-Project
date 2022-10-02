var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}


function readFormData() {
    var formData = {};
    formData["champion"] = document.getElementById("champion").value;
    formData["rating"] = document.getElementById("rating").value;
    formData["reason"] = document.getElementById("reason").value;
    formData["modifications"] = document.getElementById("modifications").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("championRoster").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.champion;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.rating;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.reason;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.modifications;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("champion").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rating").value = selectedRow.cells[1].innerHTML;
    document.getElementById("reason").value = selectedRow.cells[2].innerHTML;
    document.getElementById("modifications").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.champion;
    selectedRow.cells[1].innerHTML = formData.rating;
    selectedRow.cells[2].innerHTML = formData.reason;
    selectedRow.cells[3].innerHTML = formData.modifications;
}


function onDelete(td) {
    if (confirm('Are you sure you want to delete this rating?')) {
        row = td.parentElement.parentElement;
        document.getElementById('championRoster').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("champion").value = '';
    document.getElementById("rating").value = '';
    document.getElementById("reason").value = '';
    document.getElementById("modifications").value = '';
    selectedRow = null;
}