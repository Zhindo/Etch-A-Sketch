const container = document.querySelector('#box');

const div = document.createElement('div');




function createDiv(num) {
    for (let i = 0; i < num; i++)
    {
        const div = document.createElement('div');
        div.setAttribute('id', 'grid');
        div.style.border = ".5px solid black";
        container.appendChild(div);
    }
}


createDiv(256);

const grid = document.querySelectorAll("[id='grid']");

document.getElementById('grid').addEventListener('mouseover', changeColor);

function changeColor() {
    frid.style.backgroundColor = 'black';
}