
function get_game(){
    document.querySelector("main").innerHTML = `
    <div id=login_box>
    <p>${user_value.value}</p> 
    <button>Logout</button>
    </div>
    <div id=game></div>`;
    
        document.querySelector("#feedback").textContent = "Getting a random image..."
        document.querySelector("main").style.backgroundImage = "url('media/logo.png')";
    
    }
    
    