let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirm_password")
const confirmPasswordBox = document.querySelector(".confirmBox")
const passwordsDoNotMatch = document.createElement("div")
passwordsDoNotMatch.textContent = "Passwords do not match"

function checkPasswords() {
    let password = document.querySelector("#password")
    let confirmPassword = document.querySelector("#confirm_password")
    if (password.value != confirmPassword.value) {
        confirmPasswordBox.appendChild(passwordsDoNotMatch)
        password.setCustomValidity("Invalid field.")
        confirmPassword.setCustomValidity("Invalid field.")
    } else {
        confirmPasswordBox.removeChild(passwordsDoNotMatch)
        password.setCustomValidity("")
        confirmPassword.setCustomValidity("")
    }
}

password.oninput = checkPasswords
confirmPassword.oninput = checkPasswords