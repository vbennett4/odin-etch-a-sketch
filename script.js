//Generate grid of squares

function generateGrid(gridSize) {
    const parentNode = document.querySelector(".container");

    for (let i = 0; i < (gridSize ** 2); i++) {
        const childNode = document.createElement("div");
        childNode.classList.add("square");
        childNode.style.flex = `0 0 calc(100% / ${gridSize})`;

        parentNode.appendChild(childNode);
    }
}

//Remove old grid before generating new grid

function removeGrid() {
    const parentNode = document.querySelector(".container");
    const childNodes = document.querySelectorAll(".square");
    const childNodesArr = Array.from(childNodes);

    childNodesArr.forEach(child => {
        parentNode.removeChild(child);
    })
}

//Add hover-effect to squares

function hoverEffect() {
    const squares = document.querySelectorAll(".square");
    const squaresArr = Array.from(squares);

    squaresArr.forEach(square => {
        square.addEventListener("mouseenter", (event) => {
            square.style.backgroundColor = randomizeColors();
        })
    })
}

//Randomize the colors of the squares

function randomizeColors() {
    const hexCharacters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

//Add Grid Size Button that prompts user for grid size

function gridSizeButton() {
    const sizeBtn = document.querySelector("#size");

    sizeBtn.addEventListener("click", () => {
        let answer = +prompt("Please enter the size you would like your grid. The size can be no greater than 100.");
        console.log(answer);
        if (answer > 0 && answer <= 100) {
            removeGrid();
            generateGrid(answer); 
        } else {
            while (answer < 0 || answer > 100 || Number.isNaN(answer)) {
                answer = +prompt("Invalid input! Please enter a number between 1 and 100.");
            }
            generateGrid(answer);
        }
    
    hoverEffect();
    })
}

// Add Reset Button that erases the grid

function resetButton() {
    const resetBtn = document.querySelector("#reset");

    resetBtn.addEventListener("click", () => {
        const resetSquares = document.querySelectorAll(".square");
        const resetSquaresArr = Array.from(resetSquares);

        resetSquaresArr.forEach(square => {
            square.style.backgroundColor = "white";
        })
    })
}

gridSizeButton();
resetButton();