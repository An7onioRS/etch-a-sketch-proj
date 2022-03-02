const gridSize = 16; // establish grid size as a variable in case of future change

const body = document.querySelector('body');
const mainContainer = document.createElement('div').classList.add('main-container');
body.appendChild(mainContainer);

const rowContainers = [];
const rowElements = [];

for (i = 0; i < gridSize; i++) {
    // The first loop creates a gridSize number of rows. The second loop creates a gridSize number of elements. The elements are then appended to each row. The row is then appended to the main-container
    
    const currentRow = document.createElement('div').classList.add('row-container');
    
    for (j = 0; j < gridSize; ) {
        const currentElement = document.createElement('div').classList.add('row-element');
        currentRow.appendChild(currentElement);
    }

    mainContainer.appendChild(currentRow);
}
