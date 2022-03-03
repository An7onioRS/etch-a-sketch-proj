const GRID_SIZE = 16;

let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container')
mainContainer.style.width = "960px";
document.body.appendChild(mainContainer);

for (i = 0; i < GRID_SIZE; i++) {
    // The first loop creates a gridSize number of rows. The second loop creates a gridSize number of elements. The elements are then appended to each row. The row is then appended to the main-container
    
    const currentRow = document.createElement('tr');
    currentRow.classList.add('row-container')
    
    for (j = 0; j < GRID_SIZE; j++) {
        const currentElement = document.createElement('td');
        currentElement.classList.add('row-element');
        currentElement.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = "yellow";
        })
        currentElement.addEventListener('mouseleave', (e) => {
            e.target.style.background = "black";
        })
        currentRow.appendChild(currentElement);
    }

    mainContainer.appendChild(currentRow);
};