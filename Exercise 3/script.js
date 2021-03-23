
function calculate(){
    let radius = document.getElementById('radius').value;
    let sphere_volume = (4/3) * Math.PI * Math.pow(radius, 3);
    sphere_volume = sphere_volume.toFixed(4);
    document.getElementById('volume').value = sphere_volume;
    return false;
}

function display() {
	document.getElementById('MyForm').onsubmit = calculate;
} 

window.onload = display;