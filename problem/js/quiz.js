
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
        document.querySelector("#feedback").textContent = "Getting a random image..."
        document.querySelector("main").style.backgroundImage = "url('media/logo.png')";
    

        start_game()
    }

    function start_game(){

        let game_photo = document.createElement("div");
        game_photo.classList.add("game_photo");
        let question_board = document.createElement("div");
        question_board.classList.add("question_board");
        document.querySelector("#game").append(game_photo);
        document.querySelector("#game").append(question_board);
        
        for(let i = 0; i < 4; i++){
            let question_dom = document.createElement("div");
            question_board.append(question_dom);
            question_dom.textContent = ALL_BREEDS[random_number(ALL_BREEDS.length)].name;
        }

        /*If(question_dom.innerText === "vad som nu kommer från bilden"){

        }
        */ 


        //Lägga till bild på en random ras i game_photo, sen matcha ihop dom med textcontent i question_dom.
        //https://dog.ceo/api/breeds/image/random för att nå bilderna
    }



   document.querySelector("button").addEventListener("click", logout);

    
    function logout(){

        document.querySelector("main").reset("denna funktion gick inte alls");
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

    } 
    
    