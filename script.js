
const container = document.querySelector("#container");
const button = document.querySelector(`#btn`);

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

document.querySelector("#container").addEventListener("mouseover", (e) => {
    if(e.target.matches('.colDiv')){
        const hoverDiv = e.target;
        hoverDiv.style.backgroundColor = 'black';
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
