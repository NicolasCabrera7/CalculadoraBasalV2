function verResultado() {
    // Se quita de la vista el mensaje de error al ser un nuevo proceso
    var error = document.getElementById("error");
    error.style.display = "none";

    // En caso de ser un número válido se realizan los cálculos correspondientes
    var valor = document.getElementById("peso");
    var peso = parseFloat(valor.value); // Es necesario obtener el valor del campo de entrada

    if (!isNaN(peso)) {
        // Variables que almacenarán los resultados de los cálculos
        var volumenDiario;

        if (peso <= 10) {
            volumenDiario = peso * 100;
        } else if (peso <= 20) {
            volumenDiario = (10 * 100) + ((peso - 10) * 50);
        } else if (peso <= 30) {
            volumenDiario = (10 * 100) + (10 * 50) + ((peso - 20) * 20);
        } else {
            //Utilizamos 1500 como base para calcular la cantidad de cc (puede ser modificable)
            volumenDiario = ( (peso * 4) + 7) / (peso + 90) * 1500;
        }

        var mantenimiento = volumenDiario / 24;
        var mm2 = mantenimiento + mantenimiento / 2;

        // Modificar los valores de texto de los resultados y mostrarlos en pantalla
        var elemento1 = document.getElementById("flu");
        var elemento2 = document.getElementById("man");
        elemento1.textContent = "Mantenimiento:  " + mantenimiento.toFixed(1) + "cc/hr";
        elemento2.textContent = "m+m/2:  " + mm2.toFixed(1) + "cc/hr";
        elemento1.style.display = 'block';
        elemento2.style.display = 'block';
    } else {
        // Se muestra mensaje de error
        error.style.display = 'block';
        ocultar("flu");
        ocultar("man");
    }
}

function mostrar(id){
    var elemento = document.getElementById(id);
    elemento.style.display = 'block'
}

function ocultar(id){
    var elemento = document.getElementById(id);
    elemento.style.display = 'none'
}