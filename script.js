function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    let squareSize = 960 / size;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

function changeColor(e) {
    let currentColor = e.target.style.backgroundColor;
    if (!currentColor) {
        let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        e.target.style.backgroundColor = randomColor;
        e.target.dataset.darkness = 10;
    } else {
        let darkness = e.target.dataset.darkness || 10;
        darkness = Math.min(100, parseInt(darkness) + 10);
        e.target.dataset.darkness = darkness;
        e.target.style.filter = `brightness(${100 - darkness}%)`;
    }
}

function setGridSize() {
    let size = parseInt(prompt('Enter grid size (max 100):'));
    if (size > 100 || size < 1 || isNaN(size)) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    createGrid(size);
}

createGrid(16);