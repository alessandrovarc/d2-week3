const inputField = document.getElementById('name');
const inputValue = inputField.value;
const nameP = document.getElementById('nameP')
nameP.innerText = localStorage.getItem("name");


const contator = document.getElementById('contator');
let contatorValue = sessionStorage.getItem('contator') || 0;
contator.innerText=contatorValue;

function saveClick() {
    const inputValue = inputField.value;
    localStorage.setItem("name", inputValue)
    const nameP = document.getElementById('nameP')
    nameP.innerText = inputValue;
}

function deleteClick () {
    localStorage.removeItem("name")
}

function contatorTimer () {
    setInterval (()=> {
        contatorValue ++;
        contator.innerText = contatorValue;
        sessionStorage.setItem("contator", contatorValue);
    },1000);
}
 
window.onload = contatorTimer();

