"use strict"

let main = document.querySelector("main");

function start_page() { //<-- behöver få denna funktion att funka för att få logga-ut knappen att fungera, problemet är i att få resten av länkarna att funka efteråt, document. funkar inte, och inte main heller. 
    main.innerHTML = `
<div class="center_object">
<h1>LOGIN</h1>
</div>
<div class="login_page">
<label for=User Name"> User Name:</label>
<input type="User Name">

<label for="Password"> Password:</label>
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

main.querySelector("#where_to").addEventListener("click", where_to);

main.querySelector("main button").addEventListener("click", e => {
    if(document.querySelector("main button").innerText === "Login"){
        login();
     }  
 })

}


function where_to(){
    document.querySelector("#where_to").classList.toggle("selected");
    if(document.querySelector("#where_to").classList.contains("selected")){
        start_registration()
    }   else {
        log_in_side()
    }
}

function log_in_side(){
    document.querySelector("body").style.backgroundColor = "rgb(191, 232, 237);";
    document.querySelector("h1").innerText = "LOGIN";
    document.querySelector(".Paragraph").style.backgroundColor = "";
    document.querySelector(".Paragraph").innerText = "Let the magic start!"
    document.querySelector("#where_to p").innerText = "New to this? register for free";
    document.querySelector("button").innerText = "Login"
}

 function start_registration(){
    document.querySelector("body").style.backgroundColor = "rgb(97, 184, 97)";
    document.querySelector("h1").innerText = "REGISTRATION";
    document.querySelector(".Paragraph").style.backgroundColor = "";
    document.querySelector(".Paragraph").innerText = "Ready when you are..."
    document.querySelector("#where_to p").innerText = "Already have an accounts? Go to login";
    document.querySelector("button").innerText = "Registration";

    document.querySelector("button").addEventListener("click", add_new_user)
 }





