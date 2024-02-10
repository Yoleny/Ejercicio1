function calcularArea(event) {
    event.preventDefault(); 

    
    var base = document.getElementById("baseInput").value;
    var altura = document.getElementById("alturaInput").value;

    if (base.trim() === "" || altura.trim() === "") {
        alert("Por favor, ingresa los valores de la base y altura.");
        return;
    }

    if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        alert("Por favor, ingresa valores numéricos positivos para la base y altura.");
        return;
    }

    var area = base * altura;

    document.getElementById("areaOutput").value = area;
}

function limpiarCampos() {
    document.getElementById("baseInput").value = "";
    document.getElementById("alturaInput").value = "";
    document.getElementById("areaOutput").value = "";
}
document.querySelector("form").addEventListener("submit", calcularArea);

