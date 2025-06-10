const WIDTH = 960;
const DEG = 361;
const COLOR_SPEED = 100;
let rgbArray = [];
let startDate = Date.now();

function createGrid(n) {
    // Creates an nxn grid of squares in the html. 
    // n <= 100
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

createGrid(32);