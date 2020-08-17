const container = document.querySelector(".container");


function makeGrid(rows, columns){
    for (let i = 0; i < rows * columns; i++){
        const dot = document.createElement("div");
        container.appendChild(dot);
        dot.className = "grid-dot";
    }
}

makeGrid(16, 16);

const dots = document.querySelectorAll(".grid-dot");

dots.forEach(dot => {
    dot.addEventListener("mouseover", function(){
        dot.classList.add("draw");
    })
})

