function getFormvalue() {
	let firstName = document.getElementsByName("fname")[0].value;
    let lastName = document.getElementsByName("lname")[0].value;

    // Concatenate first name and last name and display in alert
    alert(firstName + " " + lastName);

}

