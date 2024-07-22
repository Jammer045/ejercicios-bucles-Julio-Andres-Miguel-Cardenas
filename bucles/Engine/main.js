// ejercicio 1

let multiplicacion = 7

for (let i = 1; i<11; i++) {
    console.log(i*multiplicacion);
    
} 

// ejercicio 2

// let index = parseInt(prompt("Ingrese aqui un numero"))

// let number = parseInt(prompt("Ingrese aqui otro numero"))

// let suma = index+number


// do {if (number!=0) { number = parseInt(prompt("Ingrese algun otro numero")); console.log(index+number);
    
// }
    
// } while (index!=0);

// ejercicio 3

// let adivinanza = 5

// let gano = false

// for (let index = 0; index < 3; index++) {
//     let numeroIngresado = parseInt(prompt("Ingrese un numero")); if (numeroIngresado === adivinanza) {gano = true; index = 3
//      alert("felicidades ganaste")   
//     } else if (numeroIngresado > adivinanza) {alert("Tu numero es mayor")} else {alert("Tu numero es menor")}} 

// ejercicio 4

// function numeroPrimo(numero) {
//         if (numero<0){return false}

// let contador = 1;
// for (let index = 1; index < numero; index++) {
//     if (numero % index===0)contador++ ;
// }
// if (contador===2){return true}else{return false}}

// console.log("el numero es primo="+numeroPrimo(parseInt(prompt("Ingrese aqui un numero"))))

// ejercicio 5

// let num = 10

// let index = 0

// for ( index = 0; index < num; index++) {
//     if (num%index===0) {Array+=index+","
        
//     };
    
// }console.log(Array);

// ejercicio 6

//  const fruits = ["Manzana", "Pera", "Melon", "Sandia", "Kiwi", "Aguacate", "Platano", "Naranja", "Mandarina", "Coco"]

//  fruits.forEach((frut)=>(console.log(frut))) 

// ejercicio 7

// let numbers = [1,2,3,4,5,6,7,8,9,10]


// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]*2);
    
// } 

// ejercicio 8

// let alumnos = [
//     { 
//         nombre: "Juan",
//         Edad: 12,
//         Salon: "1°B",
//         Clase: "Artisticas",
//         nota: 8
//     },
//     { 
//         nombre: "Juanita",
//         Edad: 13,
//         Salon: "2°A",
//         Clase: "Artisticas",
//         nota: 10
//     },
//     { 
//         nombre: "Petrita",
//         Edad: 15,
//         Salon: "3°C",
//         Clase: "Artisticas",
//         nota: 9
//     },
//     { 
//         nombre: "Pedro",
//         Edad: 12,
//         Salon: "1°A",
//         Clase: "Artisticas",
//         nota: 7
//     },
//     { 
//         nombre: "Carlos",
//         Edad: 14,
//         Salon: "2°B",
//         Clase: "Artisticas",
//         nota: 6
//     }

// ]
// console.table(alumnos)

// ejercicio 9

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// for (let index = 0; index < 11; index++) {
//     const element = numbers[0]; if (element%2===0) {
        
//         console.log(element+"es un numero par");
//     } else if (element!=0) {console.log(element+"es un numero impar");
        
//     }
    
// }

// ejercicio 10

// let sumaPar = 0;
// let sumaImpar = 0;
// let numero;
// do {numero = parseInt(prompt("Ingrese un numero"))
//     if (numero!==0&& (numero%2===0)){sumaPar+=numero}
//     else {sumaImpar+= numero}
    
// } while (numero !==0);

// console.log("Suma Par"+sumaPar);
// console.log("suma imPar"+sumaImpar);

// ejercicio 11

// let numbers2 = [1,12,2,9,3,8,4,7,5,6]

// let numMayor = 0;

// for (let index = 0; index < numbers2.length; index++) {
//     if (numMayor<numbers2[index]) {numMayor= numbers2[index]
        
//     };
    
// }console.log(numMayor);

// ejercicio 12

// let numbers3 = [1,12,2,9,-3,8,4,7,5,6]

// let numMenor = 1;

// for (let index = 0; index < numbers3.length; index++) {
//     if (numMenor>numbers3[index]) {numMenor= numbers3[index]
        
//     };
    
// }console.log(numMenor);

// ejercicio 13

// let player1 = {
//     nombre: null,
//     turno: null,
// }

// let player2 = {
//     nombre: null,
//     turno: null,
// }

// player1.nombre= prompt("Ingrese aqui su nombre jugador1")
// player2.nombre= prompt("Ingrese aqui su nombre jugador2")

// do {
//     player1.jugada= prompt("player"+player1.nombre+"\n"+"piedra/papel/tijera")
//     player2.jugada= prompt("player"+player2.nombre+"\n"+"piedra/papel/tijera")

//     if (player1.jugada=="piedra"&&player2.jugada=="tijera"){console.log("Gana jugador1")} else if (player1.jugada=="piedra"&&player2.jugada=="papel"){console.log("Gana jugador2");}

// if (player1.jugada=="tijera"&&player2.jugada=="piedra") {console.log("gana jugador2");} else if (player1.jugada=="tijera"&&player2.jugada=="papel"){console.log("Gana jugador1");}

// if (player1.jugada=="papel"&&player2.jugada=="piedra") {console.log("Gana jugador1");} else if (player1.jugada=="papel"&&player2.jugada=="tijera"){console.log("Gana jugador2");}
    
// } while (player1.jugada===player2.jugada);

// ejercicio 14

// for (let x = 1; x <= 5; x++) {
//     let asterisco= "";
//     for (let y = 1; y <= x; y++) {
//         asterisco+="* ";
        
//     }alert(asterisco)
//     console.log(asterisco);
    
// }

// ejercicio 15

// for (let x = 5; x => 0; x--) {
//     let asterisco= "* ";
//     for (let y = 5; y => x; y--) {
//         asterisco-="";
        
//     }alert(asterisco)
//     console.log(asterisco);
    
// } 

// ejercicio 16

// let numbers3 = [1,12,2,9,-3,8,4,7,5,6]

// let numMenor = [numbers3.length]

// let actual = 0;

// let anterior = 0

// for (let index = 0; index < numMenor.length; index++) {
//     for (let i = 0; i < numbers3.length; index++) {
//         if (numbers3[i]>anterior) {
//             if (actual=0||actual>numbers3[i]) {actual= numbers3[i]
    
//             }
//         }  
        
//     }numMenor[i]= actual
//     anterior= actual
// }

// console.log(numMenor[i]);
