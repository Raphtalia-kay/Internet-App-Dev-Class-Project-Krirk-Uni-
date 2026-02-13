function validateForm() {

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    // First Name validation (only letters, min 6 characters)
    var namePattern = /^[A-Za-z]+$/;

    if (firstName.value.trim() === "") {
        alert("First Name cannot be empty");
        firstName.focus();
        return false;
    }

    if (!namePattern.test(firstName.value)) {
        alert("First Name must contain only alphabets");
        firstName.focus();
        return false;
    }

    if (firstName.value.length < 6) {
        alert("First Name must be at least 6 characters long");
        firstName.focus();
        return false;
    }

    // Last Name validation
    if (lastName.value.trim() === "") {
        alert("Last Name cannot be empty");
        lastName.focus();
        return false;
    }

    if (!namePattern.test(lastName.value)) {
        alert("Last Name must contain only alphabets");
        lastName.focus();
        return false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        alert("Email cannot be empty");
        email.focus();
        return false;
    }

    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address (name@domain.com)");
        email.focus();
        return false;
    }

    // Subject validation
    if (subject.value === "") {
        alert("Please select a subject");
        subject.focus();
        return false;
    }

    // Message validation
    if (message.value.trim() === "") {
        alert("Message cannot be empty");
        message.focus();
        return false;
    }

    return true; // Form submits to success.html
}
function toggleOtherField() {
    var subject = document.getElementById("subject");
    var otherField = document.getElementById("otherSubjectGroup");

    if (subject.value === "other") {
        otherField.style.display = "block";
    } else {
        otherField.style.display = "none";
        document.getElementById("otherSubject").value = "";
    }
}
if (subject.value === "other") {
    var otherSubject = document.getElementById("otherSubject");

    if (otherSubject.value.trim() === "") {
        alert("Please specify your subject");
        otherSubject.focus();
        return false;
    }
}
