let BOX_SIZE = 40;
let CANVAS_SIZE = 16

let canvas = document.querySelector("#canvas");


function create_grid() {
    for (i = 0; i < CANVAS_SIZE; i++) {
        let row = document.createElement("div")
        row.classList.add("row") 
        for (y = 0; y < CANVAS_SIZE; y++) {
            let div = document.createElement("div");
            div.style.height = `${BOX_SIZE}px`;
            div.style.width = `${BOX_SIZE}px`;
            div.style.border = `1px solid black`;
            row.appendChild(div)
        }
        canvas.append(row)
    }
}


create_grid()