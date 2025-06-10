const WIDTH = 960;
const DEG = 361;
const COLOR_SPEED = 100;
let rgbArray = [];
let startDate = Date.now();

function createGrid(n) {
    // Creates an nxn grid of squares in the html. 
    // requires: n <= 100
    if (n > 100) {
        alert("Number of squares can be at most 100!")
        return;
    }
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
            square.addEventListener("mousemove", () => {
                square.style.backgroundColor = getRandomColor();
                square.style.opacity = 0.8;
            });
            row.appendChild(square)
        }
        container.appendChild(row);
    }
}

function removeGrid() {
    // Removes the grid from the DOM
    let container = document.querySelector(".container");
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function setup() {
    // For RGB wheel pallete
    colorMode(HSB);
    noStroke();
    for (let i=0; i<=360; i++) {
        rgbArray.push(color(i, 100, 100));
    }
}

function getElapsedTime() {
    // Returns time elapsed in seconds, as float quantity
    let endDate = Date.now();
    return (endDate - startDate)/1000;
}

function getRandomColor() {
    // Get color from color wheel based off of current time
    return rgbArray[Math.floor(getElapsedTime()*COLOR_SPEED)%DEG]
}

resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", () => {
            let numSquare = prompt("Choose number"
            +" of squares per side for new grid (must be between 1 - 100):")
            if (numSquare > 100) {
                alert("Number of squares can be at most 100!")
                return;
            } else if (numSquare < 1) {
                alert("Number of squares can be more than 1!")
                return;
            }
            removeGrid();
            createGrid(numSquare);
            });
createGrid(32);