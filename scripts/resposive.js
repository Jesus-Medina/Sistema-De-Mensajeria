document.addEventListener("DOMContentLoaded", mostrar,ocultar);

function ocultar() {
    let query = window.matchMedia("(max-width: 500px)")

    if(query.matches){
        document.getElementById("despliege").style.display = "block";
        document.getElementById("volver").style.display = "block";
        document.getElementById("settings").style.display = "flex";
        document.getElementById("settings").style.width = "100%";
        document.getElementById("chats").style.width = "0";
        document.getElementById("chats").style.display = "none";
    }
}

function mostrar() {
    let query = window.matchMedia("(max-width: 500px)")

    if(query.matches){
        document.getElementById("volver").style.display = "none";
        document.getElementById("despliege").style.display = "block";
        document.getElementById("settings").style.display = "none";
        document.getElementById("chats").style.width = "100%";
        document.getElementById("settings").style.width = "0";
        document.getElementById("chats").style.display = "flex";
    }
}
