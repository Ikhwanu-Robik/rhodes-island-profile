let header = document.querySelector("header");
let content = document.getElementById("content");
let footer = document.querySelector("footer");
let loadScreen = document.getElementById("loading-screen");
let box = document.getElementById("box");

function startGame() {
    loadScreen.style =
        "animation: imgFadeOut 4s linear; animation-fill-mode: forwards;";
    header.style =
        "animation: fadeIn 6s linear; animation-fill-mode: forwards;display: flex;";
    content.style =
        "animation: fadeIn 6s linear; animation-fill-mode: forwards;display: flex;";
    footer.style =
        "animation: fadeIn 6s linear; animation-fill-mode: forwards;display: flex;";
    box.style =
        "animation: rotateZero 1s linear; animation-fill-mode: forwards;";
    let welcomeBack = new Audio("../assets/audios/welcomeback.mp3");
    welcomeBack.play();
}
