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
