//Generate grid of squares

function generateGrid() {
    const parentNode = document.querySelector(".container");
    const gridSize = 16;


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




generateGrid();
hoverEffect();