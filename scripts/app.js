function init() {

// CREATE GRID

const grid = document.querySelector('.grid')
// let scoreBoard = document.getElementById('scoreboard')


// CONFIG
const width = 28
const height = 26
const cellCount = width * height
let cells = []
// let score = 0
// scoreBoard.innerText =`Score ${score}`

// CHARACTER CONFIG
const startingPosition = 574
let currentPosition = startingPosition

// Map key
// 1 =  wall
// 2 =  Food
// 3 =  Background


const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, ],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, ],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, ],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, ],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, ],
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 3, 3, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],     
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, ],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, ],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, ],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
]


// ! FUNCTIONS
function createGrid(){
    //  CREATE GRID CELLS

// Use cellCount to create our grid cells
for (let i = 0; i < cellCount; i ++ ){
    // Create div cell
    const cell = document.createElement('div')    
    // Index numbers in cells (div elements)
    cell.datasetText = i
    // Addindex as attribute
    cell.dataset.index = i
    // Add height and width to each grid cell
    cell.style.height =`${100 /height}%`
    cell.style.width = `${100 / width}%`

    // Set walls and foof based on map data
    const row = Math.floor(i / width)
    const col = i % width
    if (map[row][col] === 1) {
        // Set wall class for walls 
        cell.classList.add('wall')
    } else if (map[row][col] === 2) {
        // Set food class for food 
        cell.classList.add('food')
    }

    // Add Cell to grid
    grid.appendChild(cell)
    // Add newly created div to cells array
    cells.push(cell)
}
// Add pac character class to starting position
addPac(startingPosition)
}

// ? ADD PAC CLASS
function addPac(position){
    // console.log(position)
    cells[position].classList.add('pac')
}

// ? REMOVE PAC CLASS
function removePac(){
    //console.log('PAC REMOVED')
    cells[currentPosition].classList.remove('pac')
}

// ? HANDLE MOVEMENT
function handleMovement(event) {
    const key = event.keyCode;

    const up = 38;
    const down = 40;
    const left = 37;
    const right = 39;

    // Remove pac from previous postion before updating current position to new cell
    removePac();

    // Calculate new position based on the key pressed
    let newPosition = currentPosition; // Initialize with current position

    if (key === up && currentPosition >= width && !cells[currentPosition - width].classList.contains('wall')) {
        newPosition -= width;
    } else if (key === down && currentPosition + width < cellCount && !cells[currentPosition + width].classList.contains('wall')) {
        newPosition += width;
    } else if (key === left && currentPosition % width !== 0 && !cells[currentPosition - 1].classList.contains('wall')) {
        newPosition--;
    } else if (key === right && (currentPosition + 1) % width !== 0 && !cells[currentPosition +1].classList.contains('wall')) {
        newPosition++;
    } else {
        console.log('INVALID MOVE or WALL');
        newPosition = currentPosition; // Don't change position for invalid moves
    }
      // Check if the new position contains food (assuming 'food' class)
      if (cells[newPosition].classList.contains('food')) {
        // Pac-Man eats the food by replacing it with the 'background' class
        cells[newPosition].classList.remove('food');
        cells[newPosition].classList.add('background');
        // Here I will want to  add logic to increase the score, etc.

    }

    // Repace starting position with 'background class once pac moves ...
    if (currentPosition !== newPosition) {
        cells[currentPosition].classList.remove('pac')  // remove pac class once he starts
        cells[currentPosition].classList.add('background') // add background class once he moves away
    }

    // Update Pac-Man's position if it's a valid move
    if (newPosition !== currentPosition) {
        currentPosition = newPosition;
    }

    // Add pac class once current position has been updated 
    addPac(currentPosition);
    
    // score++
    // scoreBoard.innerText = `Score ${score}`
    // console.log("Score:", score)
}



// ! EVENTS
document.addEventListener('keydown', handleMovement)




// ! PAGE LOAD
createGrid()  // Create grid

}

window.addEventListener('DOMContentLoaded', init)