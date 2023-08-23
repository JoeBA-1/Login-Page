document.title = "Sign up"
let loginBtnEl = document.getElementById("loginbtn")
let userRegEl = document.getElementById("Userreg")
let passRegEl = document.getElementById("Passreg")
// function logout_btn(){
//     window.location.replace("index.html")
// }

loginBtnEl.addEventListener("click", function(){

    window.location.replace("index.html")   

})

import { userpass } from './script.js';

function newuser(){
    if(userRegEl.value == userpass.users && passRegEl.value == userpass.users){
        alert(`Try another username`)
    }
}