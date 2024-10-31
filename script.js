
const container = document.querySelector("#container");
const button = document.querySelector(`#btn`);
const userColor = document.querySelector('#colorBtn');
let isRainbow = false;
let isBlack = true;

userColor.addEventListener('click',()=>{
    if(isRainbow === false){
        isRainbow = true;
        isBlack = false;
        userColor.innerHTML = "make black";
    }
    else if (isRainbow === true){
        isRainbow = false;
        isBlack = true;
        userColor.innerHTML = "make rainbow";
    }
})

// init
for (let i = 0; i < 16; i++){
    let rowDiv = document.createElement("div");
    rowDiv.classList.toggle(`r${i}`);
    rowDiv.classList.toggle(`rowDiv`);
    for(let j = 0; j < 16; j++){
        let colDiv = document.createElement("div");
        colDiv.classList.toggle(`r${i}c${j}`);
        colDiv.classList.toggle(`colDiv`);
        rowDiv.appendChild(colDiv);
        // console.log(`row: ${i}, col: ${j}`);
    }
    container.appendChild(rowDiv);
}


function randomRGB(){
    let value = Math.floor(Math.random() * (255 - 0 + 1));
    return value;
}

document.querySelector("#container").addEventListener("mouseover", (e) => {
    if(e.target.matches('.colDiv')){
        const hoverDiv = e.target;
        const computedStyle = window.getComputedStyle(hoverDiv);
        const opacity = computedStyle.opacity;

        if(isRainbow === true && !hoverDiv.matches('.rainbow')){
            hoverDiv.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`; 
            hoverDiv.classList.toggle(`rainbow`);

            if(hoverDiv.matches('.userColor')){
                hoverDiv.classList.toggle('userColor');
            }
        }

        else if(isBlack === true && !hoverDiv.matches('.userColor')){
            hoverDiv.style.backgroundColor = 'black';
            hoverDiv.classList.toggle('userColor');
        }

        // console.log(opacity);
        // console.log(computedStyle.opacity);
        
        // mark the painted tile
        // if(hoverDiv.matches('.marked')){
        //    hoverDiv.style.opacity = `${opacity - 0.1}` 
        // }

        // if(!e.target.matches('.marked')){
        //     e.target.classList.toggle('marked');
        // }

    }
})

function newRes(value){
    for (let i = 0; i < value; i++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.toggle(`r${i}`);
        rowDiv.classList.toggle(`rowDiv`);
        for(let j = 0; j < value; j++){
            let colDiv = document.createElement("div");
            colDiv.classList.toggle(`r${i}c${j}`);
            colDiv.classList.toggle(`colDiv`);
            rowDiv.appendChild(colDiv);
            // console.log(`row: ${i}, col: ${j}`);
        }
        container.appendChild(rowDiv);
    }
}

button.addEventListener("click", ()=>{
    let input = Number(prompt("Choose a new value MAX: 100"));
    while(true){
        if(input > 0 && input <= 100){
            break;
        }
        input = Number(prompt("Value must be 1 - 100"));
    }
    console.log(input);

    // simple way to delete all its children
    container.replaceChildren();
    // repaint board
    newRes(input);
})
