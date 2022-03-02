const gridSize = 16; // establish grid size as a variable in case of future change
const externalIMG = '<img src="images/square-png.png">'

let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container')
document.body.appendChild(mainContainer);

const rowContainers = [];
const rowElements = [];

for (i = 0; i < gridSize; i++) {
    // The first loop creates a gridSize number of rows. The second loop creates a gridSize number of elements. The elements are then appended to each row. The row is then appended to the main-container
    
    const currentRow = document.createElement('div');
    currentRow.classList.add('row-container')
    
    for (j = 0; j < gridSize; j++) {
        const currentElement = document.createElement('div');
        currentElement.classList.add('row-element');
        currentElement.innerHTML = externalIMG;
        currentRow.appendChild(currentElement);
    }

    mainContainer.appendChild(currentRow);
}
