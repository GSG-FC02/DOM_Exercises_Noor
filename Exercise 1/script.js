let text = document.getElementById('text');
let button = document.getElementById('changeStyle');
button.addEventListener('click', change);

function change(){
    text.style.color = 'blue';
    text.style.backgroundColor = 'grey';
    text.style.fontSize = '60px';
    text.style.fontFamily = 'Arial';
}