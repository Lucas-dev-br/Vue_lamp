let btn = document.getElementById("btn");
let light = document.getElementById("light");

// Funções para animar o botão e desligar e ligar a luz
function toggleBtn(){
   
    btn.classList.toggle("active");
    light.classList.toggle("on");

}