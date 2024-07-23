const inputField = document.getElementById('name');
const inputValue = inputField.value;
const nameP = document.getElementById('nameP')
nameP.innerText = localStorage.getItem("name");

function saveClick() {
    const inputValue = inputField.value;
    localStorage.setItem("name", inputValue)
    const nameP = document.getElementById('nameP')
    nameP.innerText = inputValue;
}

function deleteClick () {
    localStorage.removeItem("name")
}



