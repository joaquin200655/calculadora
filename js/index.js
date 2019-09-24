
// or = |
// and = &
function Suma(){

    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // realizando la operacion con variables que estan parseadas a enteros
    // if(n1==""){
    //     alert("ERROR ingresa un número en: Número 1");       
    // }
    // if(n2==""){
    //     alert("ERROR ingresa un número en: Número 2");
    // } 
    if(n1=="" | n2 ==""){alert("ERROR ingresa un numero")}
    else{
    var suma = parseInt(n1) + parseInt(n2);
    // disparando una alerta con una concatenacion de un texto y el valor de la operacion
    // alert("La Suma  de  "+ n1 + "  + " + n2 + " es : " + suma);
    document.getElementById("resultado").innerHTML="La suma es: "
    + suma;
    }
}  
function Resta(){
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    if(n1=="" | n2 ==""){alert("ERROR ingresa un numero")}
    else{ 
    // realizando la operacion con variables que estan parseadas a enteros
    var resta = parseInt(n1) - parseInt(n2);
    // disparando una alerta con una concatenacion de un texto y el valor de la operacion
    // alert("La Resta  de  " + n1 + "  - "  + n2 +" es : " + resta);
    document.getElementById("resultado").innerHTML="La resta es "
    + resta;
    }
}  
function Multi(){
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    if(n1=="" | n2 ==""){alert("ERROR ingresa un numero")}
    else{
    // realizando la operacion con variables que estan parseadas a enteros
    var multiplicacion = parseInt(n1) * parseInt(n2);
    // disparando una alerta con una concatenacion de un texto y el valor de la operacion
    // alert("La  multiplicacion de  "+ n1 + "  X "  + n2 +" es : " + multiplicacion);
    document.getElementById("resultado").innerHTML="La multiplicacion  es "
    + multiplicacion;
    }
}
  function Divi(){
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    if(n1=="" | n2 ==""){alert("ERROR ingresa un numero")}
    else{
    // realizando la operacion con variables que estan parseadas a enteros
    var divicion = parseInt(n1) / parseInt(n2);
    // disparando una alerta con una concatenacion de un texto y el valor de la operacion
    // 
    document.getElementById("resultado").innerHTML="La divicion10 es "
    + divicion;
    }
}   
   
function borrar(){
    document.getElementById("resultado").innerHTML=""
}
