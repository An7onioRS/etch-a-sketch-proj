const GRID_SIZE = 16;

const btnToClearGrid = document.createElement('button');
btnToClearGrid.innerHTML = "Clear Grid";
document.body.appendChild(btnToClearGrid);

let grid = document.createElement('div');
grid.classList.add('grid')
grid.style.width = "960px";
grid.style.border = "10px solid #faed27";
document.body.appendChild(grid);

fillGrid(GRID_SIZE, grid);

function fillGrid(GRID_SIZE, grid) {

    for (i = 0; i < GRID_SIZE; i++) {
        // The first loop creates a gridSize number of rows
        
        const currentRow = createRowWithClass();
        
        for (j = 0; j < GRID_SIZE; j++) {
            // creates and adds a class to a gridSize number of elements and adds them to the row
            const currentElement = createElementWitchClass();
            
            implementHoverEffect(currentElement);

            currentRow.appendChild(currentElement);
        }
    
        grid.appendChild(currentRow);
    };
}

function implementHoverEffect(element) {

    const randomColor = getRandomColor();
    element.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = randomColor;
    });
    element.addEventListener('mouseleave', (e) => {
        e.target.style.background = randomColor;
    });
}

function createRowWithClass() {
    const row =  document.createElement('tr');
    row.classList.add('row-container');
    return row;
}

function createElementWitchClass() {
    const element = document.createElement('td');
    element.classList.add('row-element');
    return element;
}

function clearGrid(gridClassName)
{
    document.querySelector(`.${gridClassName}`).innerHTML = "";
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btnToClearGrid.addEventListener('click', () => {
    
    clearGrid(grid.className);

    setTimeout(() => {
        let updatedGridSize = "";

        while (updatedGridSize > 100 || updatedGridSize <= 0) {
        updatedGridSize = parseInt(prompt('The number of the Grid has to be a between 0 and 100! Please select another number!'));
        }

        fillGrid(updatedGridSize, grid);
    }, 1000);
});