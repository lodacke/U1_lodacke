"use strict"

"use strict"


let main = document.querySelector("main");


function login_page(){
   if (localStorage.getItem("user_name") === null) {
       start_page();
   } else {
       get_game(localStorage.getItem("user_name"));
   }
}

function start_page() {


   document.querySelector("#wrapper").classList.add("log_page");


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
           <button class="start_page_button"> Login </button>


           <div id="where_to">
               <a href="#"> New to this? register for free </a>
           </div>
       </div>`;


   document.querySelector("#where_to").addEventListener("click", where_to);   
   function where_to(){
       document.querySelector("#where_to").classList.toggle("selected");
       if(document.querySelector("#where_to").classList.contains("selected")){
           start_registration()
       }   else {
           log_in_side()
       }
   }


   main.querySelector(".start_page_button").addEventListener("click", e => {


       if(document.querySelector(".start_page_button").innerText === "Login"){
           login();
       } else {
           add_new_user();
       }
   });


   function log_in_side(){
       document.querySelector("#wrapper").classList.remove("reg_page");
       document.querySelector("#wrapper").classList.add("log_page");
       document.querySelector("h1").innerText = "LOGIN";
       document.querySelector(".Paragraph").style.backgroundColor = "";
       document.querySelector(".Paragraph").innerText = "Let the magic start!"
       document.querySelector("#where_to a").innerText = "New to this? register for free";
       document.querySelector(".start_page_button").textContent = "Login"
   }


   function start_registration(){
       document.querySelector("#wrapper").classList.remove("log_page");
       document.querySelector("#wrapper").classList.add("reg_page");
       document.querySelector("h1").innerText = "REGISTRATION";
       document.querySelector(".Paragraph").style.backgroundColor = "";
       document.querySelector(".Paragraph").innerText = "Ready when you are..."
       document.querySelector("#where_to a").innerText = "Already have an accounts? Go to login";
       document.querySelector(".start_page_button").textContent = "Registration";


   }




}

