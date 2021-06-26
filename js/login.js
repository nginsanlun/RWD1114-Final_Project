import { predefinedData } from "./mock_data.js";
let username, email, password;
let isNameSuccess, isEmailSuccess, isPasswordSuccess = false;

document.getElementById('login').onclick = 
function (){
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if(predefinedData.username == username){
        isNameSuccess = true;
    }
    if(predefinedData.email == email){
        isEmailSuccess = true;
    }
    if(predefinedData.password == password){
        isPasswordSuccess = true;
    }
    if(isNameSuccess && isEmailSuccess && isPasswordSuccess){
        window.location = "/admin-panel.html";
    }
    else{
        alert('Your Email and Password are incorrect.');
        window.location = "/login.html";
    }
    window.localStorage.setItem('username', JSON.stringify(username));
    window.localStorage.setItem('email', JSON.stringify(email));
    window.localStorage.setItem('password', JSON.stringify(password));
   
}