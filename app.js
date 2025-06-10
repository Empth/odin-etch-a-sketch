const WIDTH = 960;

function createGrid(n) {
    // Creates an nxn grid of squares in the html. 
    // n <= 100
    let container = document.querySelector(".container");
    for (let i=0; i<n; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j=0; j<n; j++) {
            let square = document.createElement("div");
            square.setAttribute("class", "square")
            scaledHeight = (Math.floor(WIDTH/n) 
                            - Math.ceil(WIDTH/(10*n+n**2/10))).toString() + "px";
            square.style.height = scaledHeight;
            square.style.width = scaledHeight;
            row.appendChild(square)
        }
        container.appendChild(row);
    }
}

createGrid(16);