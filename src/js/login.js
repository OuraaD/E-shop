console.log('coucou')
import {LocalAuthService} from "./services/local-services/local-auth_service.js";

console.log("cc")
const inputEmail= document.getElementById("email")
console.log(inputEmail)
const inputPassword= document.getElementById("password")
console.log(inputPassword)

const formulaire= document.getElementById("form")

console.log(formulaire)
formulaire.addEventListener("submit", function (e){
    e.preventDefault() 
    const emailValue= inputEmail.value
    console.log(emailValue)
    const passwordValue= inputPassword.value
    console.log(passwordValue);

    LocalAuthService.login(emailValue, passwordValue)
})
