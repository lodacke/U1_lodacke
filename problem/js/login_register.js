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
 

if(document.querySelector("button").innerHTML === "Registration"){
    console.log("start_regg");
}  



let password_value = document.querySelector("input[type='Password']");
let user_value = document.querySelector("input[type='User Name']");
let request = new Request("https://teaching.maumt.se/apis/access/");


function log_in(){
    document.querySelector("body").style.backgroundColor = "turquoise";
    document.querySelector("h1").innerText = "Login";
    document.querySelector(".Paragraph").innerText = "Let the magic start!"
    document.querySelector("#where_to p").innerText = "New to this? register for free";
    document.querySelector("button").innerText = "Login"
}



 function start_registration(){
    document.querySelector("body").style.backgroundColor = "rgb(97, 184, 97)";
    document.querySelector("h1").innerText = "Registration";
    document.querySelector(".Paragraph").innerText = "Ready when you are..."
    document.querySelector("#where_to p").innerText = "Already have an accounts? Go to login";
    document.querySelector("button").innerText = "Registration";

    document.querySelector("button").addEventListener("click", add_new_user)

    async function add_new_user(){
        if(password_value !== "" && user_value !== ""){

            let post_request = await fetch( request, {
                method: "POST",
                headers: {"Content-type": "application/json; charset=UTF-8"},
                body: JSON.stringify({
                    action: "register",
                    user_name: user_value.value,
                    password: password_value.value,

                }),
             });
 
             let response = await post_request.json();
                    if(response.status == 200){    //<--- Behöver lösa så att det inte bara är conflict
                        console.log(response);
                    }
                }
            

            /*const credentials = {
                action: "register",
                user_name: user_value.value,
                password: password_value.value,
            } */

        }
    }


