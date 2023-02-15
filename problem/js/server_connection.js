let request = "https://teaching.maumt.se/apis/access/";

async function get_response(request) {
    let response = await fetch(request)
    return response;
}


async function add_new_user(){

    if(document.querySelector("button").innerText === "Registration"){
       // if(password_value.value === " " && user_value.value === " "){
       //    
       // document.querySelector("#feedback").classList.add("visible");
       // document.querySelector("#feedback").innerHTML = `
       // <p>You have not added a value, Please add a credential and try again. </p>    <-- För att säkra upp så att inga tomma värden kan loggas, kanske överkurs.
       // <button> close </button>`
       // };
        document.querySelector("#feedback").classList.add("visible");
        document.querySelector("#feedback").innerText = "Contacting Server..."

        let post_request = await get_response(request, {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                action: "register",
                user_name: user_value.value,
                password: password_value.value,

            }),
         });

         const response = await post_request.json(); 
                    if (post_request.status == 200){
                        document.querySelector("#feedback").classList.add("visible");
                        document.querySelector("#feedback").innerHTML = `
                        <p> Registration complete. </p>
                        <p> Please proceed to login. </p>
                        <button> Close </button>`
                        
                        document.querySelector("#feedback button").addEventListener("click", e => {
                            document.querySelector("#feedback").classList.remove("visible");
                        })
                    }  else {
                       
                        switch(post_request.status){

                           case 418: 
                           document.querySelector("#feedback").classList.add("visible");
                           console.log(post_request)
                            document.querySelector("#feedback").innerHTML = `
                            <p> The server thinks it's not a teapot! </p>
                            <button> Close </button>`    
                            

                           case 409: 
                           document.querySelector("#feedback").classList.add("visible");
                            document.querySelector("#feedback").innerHTML = `
                            <p> Sorry, that name already exists. Please try with another one.</p>
                            <button> Close </button>`    
                            "The server finds a conflict"

                        }
                        document.querySelector("#feedback button").addEventListener("click", e => {
                                document.querySelector("#feedback").classList.remove("visible");
                    })
              }      
       }                
   }



async function login(){
    document.querySelector("#feedback").classList.add("visible");
    document.querySelector("#feedback").textContent = "Connecting to server...";


    let login_request = await get_response(`${request}?action=check_credentials&user_name=${user_value.value}&password=${password_value.value}`);
   console.log(login_request);

   document.querySelector("#feedback").classList.remove("visible");
   if(login_request.ok){
    document.querySelector("main").innerHTML = ``;
    get_game();
   } else {
    document.querySelector(".Paragraph").textContent = "Wrong user name or password";
    document.querySelector(".Paragraph").style.backgroundColor = "white";
   }
}

//async function get_fetch(){
//    if(re)
//}