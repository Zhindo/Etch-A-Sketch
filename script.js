const btn = document.getElementById('submit');

btn.addEventListener('click', events => {
    
    const size = document.getElementById('size');
    createGrids(size.value)
})

function createGrids(size) {

   

    let container = document.querySelector('.container');

    let grids = container.querySelectorAll('div');
    grids.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        const grid = document.createElement('div');
        grid.style.border = '.1px solid rgb(57, 57, 57)'
        grid.setAttribute('class', 'plain');
        container.appendChild(grid);
    }
    changeColor();

}

function changeColor() {
    const grid = document.querySelectorAll('.plain')
    const eraser = document.getElementById('erase');
    
    grid.forEach(element => {
        element.addEventListener('mouseover', function() {
            element.classList.add('changeColor');
        }

        
    )});

   

}


function resetSketch() {
    const reset = document.getElementById('reset');
    const size = document.getElementById('size');
    
    reset.addEventListener('click', events => {
    
        const size = document.getElementById('size');
        createGrids(size.value)
    })
}

createGrids(16);
changeColor();
resetSketch();
