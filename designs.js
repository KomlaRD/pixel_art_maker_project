// Select color input

let colorChoice = document.getElementById("colorPicker");

// Select size input

let sizeGrid = document.getElementById("sizePicker");

// Select table element

let table = document.getElementById("pixelCanvas");

// Select height input

let column = document.getElementById("inputHeight"); // Row variable

// Select width input

let cells = document.getElementById("inputWidth"); // Cell variable

// When size is submitted by the user, call makeGrid()

// Add submit event to make grid when form is submitted
sizeGrid.addEventListener("submit", function(event) {
    event.preventDefault();
    resetGrid();
    makeGrid();
});

// Make grid function

function makeGrid() {
    // Nested for loop to create grid with height and width input
    for (let a = 1; a <= column.value; a++) {
        //Create table row element and append to table
        let tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        //Create table cells and append to row
        for (let b = 1; b <= cells.value; b++) {
            let tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
            // Add color to cells
            tableCell.addEventListener("click", colorCells);
        }
    }
}

// Reset table function

function resetGrid() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}
