let BOX_SIZE = 40;
let CANVAS_SIZE = 16

let canvas = document.querySelector("#canvas");
let btn = document.querySelector('#squares');

const COLORS = [
    "#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4",
    "#000000", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0",
    "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF",
    "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#006400", "#BDB76B", "#8B008B",
    "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B",
    "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#1E90FF",
    "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700",
    "#DAA520", "#808080", "#008000", "#ADFF2F", "#F0FFF0", "#FF69B4", "#CD5C5C",
    "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD",
    "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#90EE90", "#D3D3D3", "#FFB6C1",
    "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#B0C4DE", "#32CD32", "#FAF0E6",
    "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371",
    "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1",
    "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500",
    "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5",
    "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#663399",
    "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57",
    "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#FFFAFA",
    "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0",
    "#EE82EE", "#F5DEB3", "#9ACD32"
  ];


function get_random_color () {
    let random_color_id = Math.floor(Math.random() * (COLORS.length - 1))
    return COLORS[random_color_id]
}


function create_grid(canvasSize=CANVAS_SIZE, box_size = BOX_SIZE) {
    canvas.innerHTML = "";
    for (i = 0; i < canvasSize; i++) {
        let row = document.createElement("div")
        row.classList.add("row") 
        for (y = 0; y < canvasSize; y++) {
            let div = document.createElement("div");
            div.style.height = `${box_size}px`;
            div.style.width = `${box_size}px`;
            div.style.border = `1px solid black`;
            div.addEventListener('mouseenter', () => div.style.backgroundColor = get_random_color());
            row.appendChild(div)
        }
        canvas.append(row)
    }
}

function calculate_box_size (canvas_size) {
    const containerSize = 640; 
    return containerSize / canvas_size;
}


create_grid()

btn.addEventListener('click', () => {
    let newSquaresValue = parseInt(prompt("Enter the number of squares per side you would like the default is 16, the maximum is 100"));
    if (!isNaN(newSquaresValue) && newSquaresValue > 0 && newSquaresValue <= 100) {
        create_grid(newSquaresValue, calculate_box_size(newSquaresValue))
    }
});