let aTest = 3;
let bTest = 5;
let operator = "";

function operate(aTest , bTest){
    return add(aTest,bTest);
}











let gridArray = [];
const gridContainer = document.querySelector(".gridContainer");

function gridCreate(row, col ){
    for(let i=0; i < row; i++){
    const divRow = document.createElement("div");
    divRow.classList.add("divRow")
    gridContainer.appendChild(divRow);
    for(let j=0; j<col; j++){
        const btnColumn = document.createElement("button");
        btnColumn.classList.add("btnColumn")
        divRow.appendChild(btnColumn);
        gridArray.push(btnColumn);
    }
    }

}
gridCreate(5,4);

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}