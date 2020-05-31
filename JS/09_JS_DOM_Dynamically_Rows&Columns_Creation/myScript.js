function clearInputFields() {
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#contact').value = '';
    document.querySelector('#email').value = '';
}

function addRow(argument) {
   let fName= document.querySelector('#firstName').value;
    let lName = document.querySelector('#lastName').value;
    let contact= document.querySelector('#contact').value;
    let email= document.querySelector('#email').value;

    // check if input fields are empty
    if (fName !="" && lName != "" && contact !="" && email !=""){

        // Insert New Row at the end of the table
        let newTable = document.querySelector('#displayUserInput');
        let addRow = newTable.insertRow(newTable.rows.length);
        let addSerialNumber = function () {
            $('table tr').each(function(index) {
                $(this).find('td:nth-child(1)').html(index+1);
            });
        };

        // create new clearInput Fields
        let sNoCell = addRow.insertCell(0);
        let fNameCell = addRow.insertCell(1);
        let lNameCell = addRow.insertCell(2);
        let contactCell = addRow.insertCell(3);
        let emailCell = addRow.insertCell(4);

        sNoCell.innerHTML = addSerialNumber();
        fNameCell.innerHTML = fName;
        lNameCell.innerHTML = lName;
        contactCell.innerHTML = contact;
        emailCell.innerHTML = email;
    }else {
        alert("One or More Input fields are empy")
    }
}