const inputField = document.getElementById('name');
const inputValue = inputField.value;
const nameP = document.getElementById('nameP')
nameP.innerText = localStorage.getItem("name");


const contator = document.getElementById('contator');
let contatorValue = sessionStorage.getItem('contator') || 0; //gli stiamo dicendo di prendere il valore di sessionStorage.setItem all'inizializzazione della pagina (window.onload)
//e se non lo trova metterà lo 0.
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
        contatorValue ++; //lo 0 di let contatorValue aumenta ogni volta di uno
        contator.innerText = contatorValue;
        sessionStorage.setItem("contator", contatorValue); //stiamo salvando il valore nel browser
    },1000); 
}
 
window.onload = contatorTimer(); //gli stiamo dicendo che all'avvio della pagina deve far partire la funzione contatorTimer!!!
