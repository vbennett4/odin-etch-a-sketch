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

//Add hover-effect to squares

function hoverEffect() {
    const squares = document.querySelectorAll(".square");
    const squaresArr = Array.from(squares);

    squaresArr.forEach(square => {
        square.addEventListener("mousemove", (event) => {
            square.style.backgroundColor = "black";
        })
    })
}

//Add Grid Size Button that prompts user for grid size

function gridSizeButton() {
    const sizeBtn = document.querySelector("#size");

    sizeBtn.addEventListener("click", () => {
        let answer = +prompt("Please enter the size you would like your grid. The size can be no greater than 100.");

        if (answer > 0 && answer <= 100) {

            generateGrid(answer); 
        } else {
            while (answer < 0 || answer > 100) {
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