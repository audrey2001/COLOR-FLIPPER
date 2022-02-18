// declaring constants
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".hex_color")

// button operation
btn.addEventListener('click', function(){
let hex = "#";
// because the hex is a 6 digit
for(let i=0; i<6; i++) 
{
    hex += colors[getRandomNumber()];
}

color.textContent = hex;
document.body.style.backgroundColor = hex;

});

function getRandomNumber(){
    // this makes sure the number is an Integer
return Math.floor(Math.random() * colors.length);
}