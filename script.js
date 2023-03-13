let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirm_password")
const confirmPasswordBox = document.querySelector(".confirmBox")
const passwordsDoNotMatch = document.createElement("div")
passwordsDoNotMatch.textContent = "Passwords do not match"
console.log(passwordsDoNotMatch.textContent)

console.log(password)
console.log(confirmPassword)

password.oninput = function () {
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

confirmPassword.oninput = function () {
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