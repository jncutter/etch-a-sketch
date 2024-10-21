let gridSize = 16;
let dimension;
const grid = document.querySelector("#drawspace");

function setGrid() {
    for (let i=0; i < gridSize**2; i++) {
        const box = document.createElement("div");
        box.class = "box";
        dimension = 500 / gridSize;
        box.style.width = dimension + "px";
        box.style.height = dimension + "px";
        grid.appendChild(box);
        console.log(i);

        box.onmouseover = () => {
            box.style.backgroundColor = "black";
        }

        document.getElementById("reset").addEventListener("click", () => {
            box.style.backgroundColor = "lightgray";
        });
    }
}

setGrid();
