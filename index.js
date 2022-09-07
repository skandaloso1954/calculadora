function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
//enpieza funcion 
function calculadora( a, b, fun ){
// abre switch y comiensan los case 

    switch ( fun ) {

        case "suma" : res = suma(a,b);
                    break;
        case "resta" : res = resta(a,b);
                    break;
        case "mul" : res = mult(a,b); 
                    break;
        case "div" : res = div(a,b);
                    break;

        default:   res="NaN";

    }

    document.getElementById("resultado").value = res;

}

var ejecutarBtn = document.getElementById("ejecutarBtn");
//funcion clic en el boton "ejecutar"
ejecutarBtn.addEventListener ( "click", () => {
    
    var num_1 =  parseFloat ( document.getElementById("num_1").value);
    var num_2 =  parseFloat ( document.getElementById("num_2").value);

    var fun = document.querySelector('input[name="operador"]:checked').id;    

    calculadora(num_1, num_2, fun );
//Fin
    });