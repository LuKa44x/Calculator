const gridContainer = document.querySelector(".gridContainer");
const display = document.querySelector(".display");



const numbers=["0","1","2","3","4","5","6","7","8","9"];

const keyboardText = [
"AC", "C", "%", "/",
"7", "8", "9", "*",
"4", "5", "6", "-",
"1", "2", "3", "+",
"0", ".", "=", "+"];
//mettere primo valore a 0 per fixare il +6=12
let counter=0;
let lastDigit ="";
let displayStore = [];
let displayStoreOnlyNumber=[];
let temp;
gridCreate(5,4);

function checkSymbol(symbol){
    switch(symbol){
        case "+":
            temp = "+";
            break;
        case "-":
            temp = "-"
            break;
        case "*":
            temp = "*";
            break;
        case "/":
            temp = "/";
            break;
        case "%":
            temp="%"
            break;
        case "AC":
            display.innerHTML = "";
            displayStore = [];
            break;
        case "C":
            displayStore.splice(-2,2); // -2 perche leva l utlimo + la C che crea
            display.textContent = displayStore.join().replace(/,/g,"");
            break;
        case "=":
            displayStoreOnlyNumber = displayStore.filter(element => typeof element === 'number' && !isNaN(element));
            display.innerHTML = "";
            if(temp=="+") add(displayStore,displayStore);
            else if(temp=="-") subtract(displayStore,displayStore);
            else if(temp=="*") multiply(displayStore,displayStore);
            else if(temp=="/") divide(displayStore,displayStore);
            else if(temp=="%") percentage(displayStoreOnlyNumber);
            break;          
    }
        if( numbers.includes(lastDigit)==true) {
            displayStore[displayStore.length -1] = parseInt(lastDigit);
    }
}
// problema: array mi separa i numeri con piu di una cifra
function clickEvent(btnColumn){
btnColumn.addEventListener("click", () =>{
    display.textContent += btnColumn.textContent;
    displayStore.push(btnColumn.textContent);
    lastDigit = displayStore[displayStore.length -1];
    checkSymbol(lastDigit);
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
        clickEvent(btnColumn);
    }
    }

}

//usare reduce con un findIndex per cercare i valori prima e dopo l operatore e fare l operazione
function add(a,b){
    let result;
    displayStore.pop(); // rimuove l uguale
    if(a[0]=="+") { 
        result = 0 + b[b.length -1];
    } else result =(a[0] + b[b.length -1]); 
    displayStore=[result];
    return display.textContent =result;
}

function subtract(a,b){
    let result;
    displayStore.pop(); 
    if(a[0]=="-") { 
        result = 0 - b[b.length -1];
    } else result =(a[0] - b[b.length -1]); 
    displayStore=[result];
    return display.textContent =result;
}

function multiply(a,b){
    let result;
    displayStore.pop(); 
    if(a[0]=="*") { 
        result = 0 * b[b.length -1];
    } else result =(a[0] * b[b.length -1]); 
    displayStore=[result];
    return display.textContent =result;
}

function divide(a,b){
    let result;
    displayStore.pop(); 
    if(a[0]=="/") { 
        result = 0 / b[b.length -1];
    } else result =(a[0] / b[b.length -1]); 
    displayStore=[result];
    return display.textContent =result;
}

function percentage(a){
    let result =(a[0] / 100);
    displayStore=[result];
    return display.textContent =result;
}