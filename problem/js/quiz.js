let feedback_dom = document.querySelector("#feedback");

function random_number(max) {
    return Math.floor(max * Math.random());
}

function get_game(){
    document.querySelector("main").innerHTML = `
    <div id=login_box>
    <p>${user_value.value}</p> 
    <button>Logout</button>
    </div>
    <div id=game></div>`;

        document.querySelector("body").style.backgroundColor = "rgb(191, 232, 237);";
        feedback_dom.classList.add("visible");
        feedback_dom.textContent = "Getting a random image...";
        document.querySelector("main").style.backgroundImage = "url('media/logo.png')";
    

        start_game()
    }

    async function start_game(){

        feedback_dom.classList.remove("visible");

        let right_answer = ALL_BREEDS[random_number(ALL_BREEDS.length)];
            console.log(right_answer);
        let dog_resource = `https://dog.ceo/api/breed/${right_answer.url}/images/random`;
        let dog_response = await (await get_response(dog_resource)).json();

        let game_photo = document.createElement("div");
        game_photo.style.backgroundImage = `url(${dog_response.message})`;
        game_photo.classList.add("game_photo");

        let question_board = document.createElement("div");
        question_board.classList.add("question_board");

        document.querySelector("#game").append(game_photo);
        document.querySelector("#game").append(question_board);
       
        for(let i = 1; i <= 4; i++){
            let question_dom = document.createElement("div");
            question_dom.setAttribute("id", `answer_${i}`);
            question_dom.addEventListener("click", test_question);
            question_board.append(question_dom);
        } 

        let random_placement = random_number(4);

        for(let i = 0; i <= 4; i++){
            if(random_placement){
                document.querySelector("#answer_4").textContent = right_answer.name;
                document.querySelector(`#answer_4`).style.backgroundColor = "red";
                        } else {
                document.querySelector(`#answer_${i}`).textContent = ALL_BREEDS[random_number(ALL_BREEDS.length)].name;

            }
        }

            
     function test_question(event){;

        if(event.currentTarget.innerText === right_answer.name){
            feedback_dom.classList.add("visible");
            feedback_dom.innerHTML = `
           <p> Answer! </p> 
           <button> Try again </button> `;
            feedback_dom.style.backgroundColor = "green";
            feedback_dom.querySelector("button").addEventListener("click", e => {
                feedback_dom.classList.remove("visible");

                document.querySelector("#game").innerHTML = ``;
                start_game();
            })

        } else {
            feedback_dom.classList.add("visible");
            feedback_dom.innerHTML = `
           <p>Wrong answer, please try again </p> 
           <button> Try again </button> `;
            feedback_dom.style.backgroundColor = "coral";
            feedback_dom.querySelector("button").addEventListener("click", e => {
                feedback_dom.classList.remove("visible");

        });
       // if(event.currentTarget.innerText === )
    }

}


    



  

        /*If(question_dom.innerText === "vad som nu kommer från bilden"){

        }
        */ 


        //Lägga till bild på en random ras i game_photo, sen matcha ihop dom med textcontent i question_dom.
        //https://dog.ceo/api/breeds/image/random för att nå bilderna



   document.querySelector("button").addEventListener("click", logout);

    }

    function logout(){

        //     document.querySelector("main").reset("denna funktion gick inte alls");
    /* document.querySelector("main").innerHTML = `
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
</div>`; */
console.log("inne");
    }

    
    
    