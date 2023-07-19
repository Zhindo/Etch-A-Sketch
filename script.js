const container = document.querySelector('#box');



function createDiv(num) {
    for (let i = 0; i < num; i++)
    {
        const div = document.createElement('div');
        div.setAttribute('class', 'plain');
        div.setAttribute('class', 'grid');
        div.style.border = ".5px solid transparent";
        container.appendChild(div);
    }
}


createDiv(256);

let grid = document.querySelectorAll('.grid');



grid.forEach(element => {
    
    element.addEventListener('mouseover', function() {
        element.classList.add('changeColor');
    });
}); 

/*
var greetings = "Hello";

for (i of grid) {

    i.addEventListener('mouseover', function() {
        i.classList.add('changeColor');
    });
}   

*/
