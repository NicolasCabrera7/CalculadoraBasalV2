var CALCULAR = document.getElementById('calcular');
var INFO = document.getElementById('verInfo');

CALCULAR.addEventListener('click', verResultado);
CALCULAR.addEventListener('click', cambiarInfo);
INFO.addEventListener('click', verInfo);

function verResultado() {
    // Se quita de la vista el mensaje de error al ser un nuevo proceso
    var error = document.getElementById("error");
    error.style.display = "none";

    // En caso de ser un número válido se realizan los cálculos correspondientes
    var peso = document.getElementById("peso").valueAsNumber;

    if (!isNaN(peso)) {
        // Variables que almacenarán los resultados de los cálculos
        var elemento1 = document.getElementById("flu");
        var elemento2 = document.getElementById("man");
        var volumenDiario;
        if(peso>30){
            //Calculo de la superficie corporal
            volumenDiario = ( (peso * 4) + 7) / (peso + 90);
            //Modificar los elementos para mostrar los valores correspondientes
            elemento1.innerHTML = "SC x 1500:  " + (volumenDiario*1500).toFixed(1);
            elemento2.innerHTML = "SC x 1500:  " + (volumenDiario*2000).toFixed(1);
            ocultar("vol");
        }else{
            if (peso <= 10) {
                volumenDiario = peso * 100;
            } else if (peso <= 20) {
                volumenDiario = 1000 + ((peso - 10) * 50);
            } else{
                volumenDiario = 1500 + ((peso - 20) * 20);
            }
            // Modificar los valores de texto de los resultados
            var mantenimiento = volumenDiario / 24;
            var mm2 = mantenimiento + mantenimiento / 2;  
            var elemento3 = document.getElementById('vol');
            elemento3.innerHTML = "Volumen diario:  " + volumenDiario.toFixed(1) + "cc";
            elemento1.innerHTML = "Mantenimiento:  " + mantenimiento.toFixed(1) + "cc/hr";
            elemento2.innerHTML = "m+m/2:  " + mm2.toFixed(1);
            elemento3.style.display = 'block';
            mostrar("vol");
        } 
        //Visualizar los elementos modificados 
        elemento1.style.display = 'block';
        elemento2.style.display = 'block';
        
    } else {
        // Se muestra mensaje de error
        error.innerHTML = "Debe completar todos los datos"
        error.style.display = "block";
        ocultar("flu");
        ocultar("man");
        ocultar("vol");
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


function verInfo(){
    var container = document.getElementById('contenedor');
    var calculadora = document.getElementById('calculadora');
    var detalle = document.getElementById('detalle');
    var estiloDisplay = window.getComputedStyle(detalle, null).getPropertyValue('display');

    if(estiloDisplay === 'none'){
        container.style.width = '900px';
        calculadora.style.width = '50%';
        detalle.style.display = 'block';
    }else{
        container.style.width = '450px';
        calculadora.style.width = '100%';
        detalle.style.display = 'none';
    }
}

function cambiarInfo(){
    let peso = document.getElementById("peso").valueAsNumber;
    let mensaje = document.getElementById("mensajeInfo");
    if(isNaN(peso)){
        mensaje.innerHTML = 
        "<li>Ingrese antes un valor para calcular.</li>" +
        "<li>En esta seccion se observara que pasos se usaron para determinar los valores que se ven en pantalla</li>"
    }else{
        if(peso <= 30){
            mensaje.innerHTML = 
            "<li>De 0kg a 10kg, se calcula 100cc por cada kilo.</li>" + 
            "<li>Se suman 50cc por cada kilo de peso por arriba de 10kg, hasta 20kg</li>" +
            "<li>De 20kg para arriba, se suman 20cc por cada kilo adicional</li>"
        }else{
            mensaje.innerHTML = 
            "<li>Cuando el niño pesa mas de 30kg, se utiliza un cálculo diferente:</li>" +
            "<li>Superficie Corporal (SC) <br> SC = ( (peso * 4) + 7) / (peso + 90)</li>" + 
            "<li>Este resultado se multiplica por 1500 o por 2000</li>" + 
            "<li>Dicho resultado representa el valor del volumen diario en cc</li>" +
            "<li>Finalmenet el medico decide cual de los dos resultados utilizar.</li>"
        }
    }
}







//Condicionales normies
function mayorDe3(num1, num2, num3){
    if((typeof num1 === 'number') && (typeof num2 === 'number') && (typeof num3 === 'number')){
        if(num1 >= num2 && num1 >= num3){
            console.log('El numero mayor es ' + num1);
        }
        else if(num2 >= num1 && num2 >= num3){
            console.log('El numero mayor es ' + num2);
        }
        else{
            console.log('El numero mayor es ' + num3);
        }
    }else{
        console.log('Alguno de los valores ingresados no es un numero');
    }
}


//Condicionales chetas
function masMayor(a, b ,c){
    return (a>=b && a>=c)? a: (b>=a && b>=c)? b : c;
}
