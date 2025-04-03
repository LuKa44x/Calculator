let aTest = 3;
let bTest = 5;
let operator = "";

function operate(aTest , bTest){
    return add(aTest,bTest);
}


const gridContainer = document.querySelector(".gridContainer");
const display = document.querySelector(".display");





const keyboardText = [
"AC", "C", "%", "/",
"7", "8", "9", "*",
"4", "5", "6", "-",
"1", "2", "3", "+",
"0", ".", "=", "+"];

let counter=0;
let gridArray = [];

gridCreate(5,4);

function clickEvent(btnColumn){
btnColumn.addEventListener("click", () =>{
    display.textContent += btnColumn.textContent;
});
}

function gridCreate(row, col ){
    for(let i=0; i < row; i++){
    const divRow = document.createElement("div");
    divRow.classList.add("divRow")
    gridContainer.appendChild(divRow);
    for(let j=0; j<col; j++){
        const btnColumn = document.createElement("button");
        btnColumn.textContent = keyboardText[counter];
        counter++;
        btnColumn.classList.add("btnColumn")
        divRow.appendChild(btnColumn);
        gridArray.push(btnColumn);
        clickEvent(btnColumn);
    }
    }

}


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