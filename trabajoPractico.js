// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// const meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

// console.log(meses);



// let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// for (const mes of meses) {//ejecuta un bloque de código para cada elemento de un objeto iterable
//     console.log(mes);
// }

//2--------------------------------------------------------------------------------------------------
// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// let ciudades=[];

// while (true) {
//     let pedir=prompt("escribe varios nombres de ciudades");

//     if (pedir==null) {break;
//     }
//     ciudades.push(pedir);
// }

// ciudades[1]="barcelona"
// ciudades.push("Paris");


// document.write("<br>");
// document.write("El arreglo de ciudades tiene"+" "+ciudades.length+" "+"elementos");
// document.write("<br>");




// document.write("El primer elemento es "+ciudades[0]+",");
// document.write("<br>")
// document.write("El tercer elemento es "+ciudades[2]+",");
// document.write("<br>")
// document.write("El ultimo elemento es "+ciudades[ciudades.length-1]+",")
// document.write("<br>");
// document.write("el elemento que ocupa la 2da posicion es "+ciudades[3]);

// document.write("<br>")
// document.write("<h1>"+"arreglo de ciudades"+"</h1>")
// document.write("<br>")
// document.write(ciudades);
//3--------------------------------------------------------------------------------------------------

// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// let sumaDados = [];
// let elementosUnicos = [];
// let apariciones = [];
// let contador = 1;


// for (let i = 0; i < 20; i++) {

//     let primerDado = Math.floor(Math.random() * 6) + 1;
//     let segundoDado = Math.floor(Math.random() * 6) + 1;

//     let suma = primerDado + segundoDado;
//     sumaDados.push(suma);
// }

// sumaDados.sort();

// for (let i = 0; i < sumaDados.length; i++) {
//     if (sumaDados[i + 1] === sumaDados[i]) {
//         contador++;
//     }
//     else {
//         elementosUnicos.push(sumaDados[i])
//         apariciones.push(contador);
//         contador = 1;
//     }
// }

// console.log(sumaDados);

// for (let j = 0; j < elementosUnicos.length; j++) {
//     console.log("La suma " + elementosUnicos[j] + " aparece " + apariciones[j] + " veces");
// }

//4-------------------------------------------------------------------------------------------------
// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// let pedir = Math.floor(parseInt(prompt("ingrese un numero")))

// function parImpar(pedir) {
//     if (isNaN(pedir) == true) {
//         document.write("ingrese un numero valido")
//     }
//     else {
//         if (pedir % 2 === 0) {
//             document.write("El numero " + pedir + " es par");
//         }
//         else {
//             document.write("El numero " + pedir + " es impar");
//         }
//     }    
// }

// let resultado = parImpar(pedir)

//5-------------------------------------------------------------------------------------------------
// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// let pedir = prompt("ingrese una cadena")

// function tieneMayusculas(pedir) {
//     return /[A-Z]/.test(pedir);

// }

// function tieneMinusculas(pedir) {
//     return /[a-z]/.test(pedir);
// }

// if (tieneMayusculas(pedir) && tieneMinusculas(pedir) == true) {
//     console.log("La cadena tiene mayusculas y minusculas");
// }
// else {

//     if (tieneMayusculas(pedir) === true) {
//         console.log("La cadena tiene mayusuculas");
//     }

//     if (tieneMinusculas(pedir) === true) {
//         console.log("la cadena tiene minusculas");
//     }

// }

//5------------------------------------------------------------------------------------------
// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// let numero1 =parseInt(prompt("Escribe el valor de un lado"));
// let numero2 =parseInt (prompt("Escribe el valor de otro lado"));

// function perimetro(numero1,numero2) {
//     return 2*(numero1+numero2)
// }

// let resultado=perimetro(numero1,numero2);

// console.log("El perimetro del rectangulo es "+resultado);