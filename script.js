let btn = document.querySelector("#btn2");

btn.addEventListener("mouseover", movimiento);

function movimiento(){
    if(btn.classList.contains("posicion_normal")){
        btn.classList.replace("posicion_normal","move1");
    } else if (btn.classList.contains("move1")){
        btn.classList.replace("move1","move2");
    }else if (btn.classList.contains("move2")){
        btn.classList.replace("move2","move3");
    }else if (btn.classList.contains("move3")){
        btn.classList.replace("move3","posicion_normal");
    }
}