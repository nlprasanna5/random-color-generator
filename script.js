let click = document.querySelector('.click');

let boxOne=document.querySelector('.first');

let mouse = document.querySelector(".second");
let boxTwo = document.querySelector('.second');

click.addEventListener("click", function() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    boxOne.style.backgroundColor = randomColor;

});

mouse.addEventListener("mousemove", function() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    boxTwo.style.backgroundColor = randomColor;

});