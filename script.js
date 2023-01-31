document.addEventListener("DOMContentLoaded",function(){
    createBoard();

})

function createBoard(size){
    let board = document.querySelector(".board"); 
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numberOfDivs = size * size;

    for(let i=0; i < numberOfDivs; i++){
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend",div);
    }
}