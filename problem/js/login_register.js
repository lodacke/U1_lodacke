"use strict"

document.querySelector("main").innerHTML = `
<div class="center_object">
<h1>LOGIN</h1>
</div> <div>
<label for=User Name"> User Name:</label>
<br>
<input type="User Name">
</div>

<div>
<label for="Password"> Password:</label>
<br>
<input type="Password">
</div>

<div>
<p class="Paragraph"> Let the magic start! </p>
<br>
<button class=login_button> Login </button>

<div id="where_to">
<p> New to this? register for free </p>
</div>
</div>`;

let password_value = document.querySelector("input[type='Password']");
let user_value = document.querySelector("input[type='User Name']");

document.querySelector("#where_to").addEventListener("click", where_to);

document.querySelector("main button").addEventListener("click", e => {
    if(document.querySelector("main button").innerText === "Login"){
        login();
     }  
 })

function where_to(){
    document.querySelector("#where_to").classList.toggle("selected");
    if(document.querySelector("#where_to").classList.contains("selected")){
        start_registration()
    }   else {
        log_in_side()
    }
}


//document.querySelector("main button").addEventListener("click", reg_or_login); <-- funktion för att se till att det inte går att regga en användare på knappen både när den är login och regg.
//function reg_or_login(){
//    if(document.querySelector("button").innerText === "Register"){
//        add_new_user()
//    }else { 
//        log_in()
//    }
//}


function log_in_side(){
    document.querySelector("body").style.backgroundColor = "turquoise";
    document.querySelector("h1").innerText = "LOGIN";
    document.querySelector(".Paragraph").innerText = "Let the magic start!"
    document.querySelector("#where_to p").innerText = "New to this? register for free";
    document.querySelector("button").innerText = "Login"
}

 function start_registration(){
    document.querySelector("body").style.backgroundColor = "rgb(97, 184, 97)";
    document.querySelector("h1").innerText = "REGISTRATION";
    document.querySelector(".Paragraph").innerText = "Ready when you are..."
    document.querySelector("#where_to p").innerText = "Already have an accounts? Go to login";
    document.querySelector("button").innerText = "Registration";

    document.querySelector("button").addEventListener("click", add_new_user)
 }





