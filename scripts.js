document.addEventListener("DOMContentLoaded", () =>{
    //const form = document.forms[0];
    let email = document.getElementById("email").value;
    let successMessage = "Thank you! Your email address " + email + " has been submitted to our mailing list!";
    let errorMessage = "Please enter a valid email address";

    let message = document.getElementsByClassName("message");

    document.getElementsByClassName("btn").addEventListener("click", showMessage);

    function showMessage() {
        if(email == "") {
            message.innerHTML = errorMessage;
        } else {
            message.innerHTML = successMessage;
        }
    }
});