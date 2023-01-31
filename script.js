let color = "black";

document.addEventListener("DOMContentLoaded",function(){
    createBoard(16);
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click",function(){
        let size = getUserSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".board");
     
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numberOfDivs = size * size;

    for(let i = 0; i < numberOfDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend",div);
    }
}

function getUserSize(){
    let userInput = prompt("What size do you want the grid to be?")
    let message = document.querySelector("#message");
    if (userInput === ""){
        message.innerHTML = "Please provide a number";
    } else if(userInput < 0||userInput > 100){
        message.innerHTML = "Please enter a number between 0 and 100";
    } else {
        message.innerHTML = "Now you can play!"
        return userInput;
    }
}

function colorDiv(){
    if (color == "random"){
        this.style.backgroundColour = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColour = 'black'
    }
}

function setColor(colorChoice){
    color = colorChoice ;
}