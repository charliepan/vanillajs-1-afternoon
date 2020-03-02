let id = document.getElementById('idInput');
let color = document.getElementById('colorInput');

const setCard = () =>{
    let card = document.getElementById(id.value);
    card.style.color = color.value;
}

const reset = () =>{
    location.reload();
}