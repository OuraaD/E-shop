
import {LocalAuthService} from "./services/local-services/local-auth_service.js";

const bouton= document.getElementById("logoutButton")


bouton.addEventListener("click", function (e){
    LocalAuthService.logout();
    
})
