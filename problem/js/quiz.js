let feedback_background_dom = document.querySelector("#feedback_background");
let feedback_dom = document.querySelector("#feedback");


function random_number(max) {
    return Math.floor(max * Math.random());
}

function get_game(user_value){

    feedback_dom.style.backgroundColor = "";


    document.querySelector("main").innerHTML = `
    <div id=login_box>
    <p>${user_value}</p> 
    <button id="log_out">Logout</button>
    </div>
    <div id=game></div>`;

        document.querySelector("#log_out").addEventListener("click", logout);
        document.querySelector("#wrapper").classList.add("log_page");
        feedback_dom.classList.add("visible");
        feedback_dom.textContent = "Getting a random image...";
        document.querySelector("#game").classList.add("waiting_for_game"); 
    
        start_game();
    }

async function start_game(){

        let answers = [];
        while (answers.length < 4){
            let answer = ALL_BREEDS[random_number(ALL_BREEDS.length)];
            if(!answers.includes(answer)){
                answers.push(answer);
            }
        }


        let right_answer = answers[random_number(answers.length)];
        let dog_resource = `https://dog.ceo/api/breed/${right_answer.url}/images/random`;
        let dog_response = await (await get_response(dog_resource)).json();

        document.querySelector("#game").classList.remove("waiting_for_game");
        feedback_dom.classList.remove("visible");
        feedback_background_dom.classList.remove("visible");
  
        let game_folder = document.createElement("div");
        game_folder.classList.add("game_folder");
        let game_photo = document.createElement("img");
        game_photo.src = `${dog_response.message}`;

        let question_board = document.createElement("div");
        question_board.classList.add("question_board");

        game_folder.append(game_photo);
        document.querySelector("#game").append(game_folder);
        document.querySelector("#game").append(question_board);


        for(let i = 0; i < answers.length; i++){
            let question_dom = document.createElement("div");
            question_dom.classList.add("question");
            question_dom.addEventListener("click", test_question);
            question_board.append(question_dom);
            question_dom.textContent = answers[i].name;

        }
       
             function test_question(event){;

                if(event.currentTarget.innerText === right_answer.name){
                    feedback_dom.classList.add("visible");
                    feedback_background_dom.classList.add("visible");
                    feedback_dom.style.backgroundColor = "green";
                    feedback_dom.innerHTML = `
                     <p> Corrent Answer! </p> 
                     <button> Try again </button> `;
                     feedback_dom.classList.add("log_page");
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

                         feedback_dom.querySelector("button").addEventListener("click", e => {
                         feedback_dom.classList.remove("visible");

        
                         document.querySelector("#game").innerHTML = ``;
                         start_game();
        
                    });
              }
        
        }         
        
    function test_question(event){;

        if(event.currentTarget.innerText === right_answer.name){
            feedback_dom.classList.add("visible");
            feedback_background_dom.classList.add("visible");
            feedback_dom.style.backgroundColor = "lightgreen";
            feedback_dom.innerHTML = `
           <p> Corrent Answer! </p> 
           <button> Try again </button> `;
            feedback_dom.querySelector("button").addEventListener("click", e => {
            feedback_dom.classList.remove("visible");

                document.querySelector("#game").innerHTML = ``;
                get_game();
            })

        } else {
            feedback_dom.classList.add("visible");
            feedback_background_dom.classList.add("visible");
            feedback_dom.style.backgroundColor = "coral";

            feedback_dom.innerHTML = `
           <p>Wrong answer, please try again </p> 
           <button> Try again </button> `;

                feedback_dom.querySelector("button").addEventListener("click", e => {
                feedback_dom.classList.remove("visible");

                document.querySelector("#game").innerHTML = ``;
                get_game();

                 });
       
             }

        }
    }


function logout(){

    localStorage.removeItem("user_name")
    start_page();   

    }

    
    
    