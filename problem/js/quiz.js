let feedback_background_dom = document.querySelector("#feedback_background");
let feedback_dom = document.querySelector("#feedback");




function random_number(max) {
    return Math.floor(max * Math.random());
}

function get_game(user_value){
    document.querySelector("main").innerHTML = `
    <div id=login_box>
    <p>${user_value}</p> 
    <button>Logout</button>
    </div>
    <div id=game></div>`;

        document.querySelector("body").style.backgroundColor = "rgb(191, 232, 237);";
        feedback_dom.classList.add("visible");
        feedback_dom.textContent = "Getting a random image...";
        document.querySelector("main").style.backgroundImage = "url('media/logo.png')";
    

        start_game();
    }

    async function start_game(){

        feedback_dom.classList.remove("visible");
        feedback_background_dom.classList.remove("visible");
        document.querySelector("main").style.backgroundImage = "";


        let right_answer = ALL_BREEDS[random_number(ALL_BREEDS.length)];
            console.log(right_answer);
        let dog_resource = `https://dog.ceo/api/breed/${right_answer.url}/images/random`;
        let dog_response = await (await get_response(dog_resource)).json();

    
        let game_folder = document.createElement("div");
        game_folder.classList.add("game_folder");
        let game_photo = document.createElement("img");
        game_photo.src = `${dog_response.message}`;

        let question_board = document.createElement("div");
        question_board.classList.add("question_board");

        game_folder.append(game_photo);
        document.querySelector("#game").append(game_folder);
        document.querySelector("#game").append(question_board);


        
       
            for(let i = 1; i <= 4; i++){
                let question_dom = document.createElement("div");
                question_dom.classList.add("question");
                question_dom.addEventListener("click", test_question);
                question_board.append(question_dom);
                let id_value = random_number(4);
                question_dom.setAttribute("id", `id${id_value}`); // Filterar så att varje id bara kommer en gång. 


            

          //  for(let i = 1; i <= 4; i++){ // Random number på id:et, för att sen placera in dom. Lägga in id i en array, om värdet redan har lästs så läggs inte nästa värde till igen.
          //      if(random_placement){
          //          question_dom.textContent = right_answer.name;
          //          question_dom.style.backgroundColor = "red";
          //                  } else {
          //          question_dom.textContent = ALL_BREEDS[random_number(ALL_BREEDS.length)].name;
    //
          //      }
          //  }
        } 

        document.getElementById("id1").textContent = right_answer.name;
        document.getElementById("id2").textContent = "Wrong Answer";
        document.getElementById("id3").textContent = "Wrong Answer";
        document.getElementById("id0").textContent = "Wrong Answer";
        document.getElementById("id4").textContent = "Wrong Answer"; // Lägg till en ifsats som säger att om elementet har id 1 får den rätt svar, annars felaktigt. 

            
     function test_question(event){;

        if(event.currentTarget.innerText === right_answer.name){
            feedback_dom.classList.add("visible");
            feedback_background_dom.classList.add("visible");
            feedback_dom.innerHTML = `
           <p> Corrent Answer! </p> 
           <button> Try again </button> `;
            feedback_dom.style.backgroundColor = "green";
            feedback_dom.querySelector("button").addEventListener("click", e => {
                feedback_dom.classList.remove("visible");

                document.querySelector("#game").innerHTML = ``;
                start_game();
            })

        } else {
            feedback_dom.classList.add("visible");
            feedback_background_dom.classList.add("visible");
            feedback_dom.innerHTML = `
           <p>Wrong answer, please try again </p> 
           <button> Try again </button> `;
            feedback_dom.style.backgroundColor = "coral";
            feedback_dom.querySelector("button").addEventListener("click", e => {
                feedback_dom.classList.remove("visible");

                document.querySelector("#game").innerHTML = ``;
                start_game();

        });
    }

}

   document.querySelector("button").addEventListener("click", logout);

    }

    function logout(){

        localStorage.removeItem("user_name")

        start_page();

    }

    
    
    