const container = document.querySelector(".container");

const resize = document.querySelector("#resize");

makeGrid(16, 16);
draw();

function makeGrid(rows, columns){
    document.documentElement.style.setProperty("--grid-rows", rows);
    document.documentElement.style.setProperty("--grid-columns", columns);
    for (let i = 0; i < rows * columns; i++){
        const dot = document.createElement("div");
        container.appendChild(dot);
        dot.className = "grid-dot";
    }
}

function erase(){
    const dots = document.querySelectorAll(".grid-dot")
    dots.forEach(dot => dot.classList.remove("draw"));
}

function resizeGrid(){
    erase();
    container.innerHTML = "";
    let newSize = prompt("How many squares would you like on each side of your Etch a Sketch?", "16");
    makeGrid(newSize, newSize);
    draw();
}

function draw(){
    const dots = document.querySelectorAll(".grid-dot");

    dots.forEach(dot => {
        dot.addEventListener("mouseover", function(){
            dot.classList.add("draw");
        })
    })
}


resize.addEventListener("click", resizeGrid);


