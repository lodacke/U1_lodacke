
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
        let game_board = document.createElement("div");
        document.querySelector("main").append(game_board);

        let game_photo = document.createElement("div");
        let question_board = document.createElement("div");
        game_board.append(question_board);
        game_board.append(game_photo);

        for(let i = 0; i < 4; i++){
            let question_dom = document.createElement("div");
            question_board.append(question_dom);
            question_dom.textContent = random_number(ALL_BREEDS.length);

        }
    }


    
    