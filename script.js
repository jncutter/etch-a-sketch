let gridSize = 16;
let dimension;
const grid = document.querySelector("#drawspace");

function setGrid() {
    for (let i=0; i < gridSize**2; i++) {
        const box = document.createElement("div");
        dimension = 500 / gridSize;
        box.style.width = dimension + "px";
        box.style.height = dimension + "px";
        grid.appendChild(box);

        box.onmouseover = () => {
            box.style.backgroundColor = "black";
        }
    }
}



setGrid();