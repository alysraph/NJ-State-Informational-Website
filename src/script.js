function checkEmail() {
    let email1 = document.getElementById("email-input1").value;
    let email2 = document.getElementById("email-input2").value;
    let email_message = document.getElementById("email-result");

    if (email1 && email2) {
        if (email1 === email2) {
            email_message.textContent = "Emails match";
            email_message.style.color = "white";
        } else {
            email_message.textContent = "Input does not match"
            email_message.style.color = "red";
        }
    } else {
        email_message.textContent = "";
    }
}

function checkEmailMatch() {
    let email1 = document.getElementById("email-input1").value;
    let email2 = document.getElementById("email-input2").value;

    if (email1 && email2) {
        if (email1 === email2) {
            alert("Thank you. Your submission has been sent.");
        } else {
            alert("Emails do not match. Please try again");
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-button").forEach(button => {
        button.addEventListener("click", function () {
            let dropdown = this.nextElementSibling;
            dropdown.classList.toggle("hidden");
        });
    });
});