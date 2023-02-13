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
<button> Login </button>

<div id="where_to">
<p> New to this? register for free </p>
</div>
</div>`;

document.querySelector("#where_to").addEventListener("click", where_to);

function where_to(){
    document.querySelector("#where_to").classList.toggle("selected");
    if(document.querySelector("#where_to").classList.contains("selected")){
        start_registration()
    }   else {
        log_in()
    }
}

function log_in(){
    document.querySelector("body").style.backgroundColor = "turquoise";
    document.querySelector("h1").innerText = "Login";
    document.querySelector(".Paragraph").innerText = "Let the magic start!"
    document.querySelector("#where_to p").innerText = "New to this? register for free ";

}

function start_registration(){
    document.querySelector("body").style.backgroundColor = "rgb(97, 184, 97)";
    document.querySelector("h1").innerText = "Registration";
    document.querySelector(".Paragraph").innerText = "Ready when you are..."
    document.querySelector("#where_to p").innerText = "Already have an accounts? Go to login";

}
