'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
   
  // recibo un numero por parametro y tengo que guardar todos sus divisores primos 
  // el primer divisor va a ser 1 
  // hay que aumentar el divisor de a 1
  // si la division es entera anoto guardo el divisor, sino paso al siguiente y vuelvo a probar
  // todo mientras el numero sea mayot a 1 
  
  var divisores = [1]

  let div = 2 
  while (num > 1){
    if(num%div === 0){
      divisores.push(div);
      num = num / div; 

    } else { 
      div++; 
    }

  }
return divisores;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

   // recorrer todos los numeros de la lista 1 por 1
  // 1 comparo en todas las posiciones el primero valor con el segundo formando burbujas, y me pregunto si estan ordenados
  // si estan ordenados esta bien, sino los tengo que dar vuelta 
 // reviso que la lista este del todo ordenada, hasta que lo este 
 var desordenado = true
while (desordenado) {
desordenado = false;
 for(let i = 0; i < array.length -1; i++) {
   if(array[i] > array[i+1]){ 
    let aux = array[i]; 
    array[i] = array[i+1];
    array[i+1] = aux;
    desordenado = true
   }  
         
   }
  }
   return array;
 }
   


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // recorrer un array 
  // evaluando si el primero es menor al anterior y lo ordenamos de menor a mayor
  // hay que extraer cada numero y evaluarlo con el de atras
  // si el de atras es menor lo empujamos hacia adelante
  // soltamos el valor guardado cuando el de atras es menor o cuando llegamos al principio de la lista
  // lo voy tirando hacia atras mientras que el anterior sea mayor o lleguemos al principio de la lista
  // el primero numero no tiene que viajar

    for ( var i = 1; i < array.length; i++) {
      var aux = array[i]
      var j = i -1
       while (j >= 0 && array[j] > aux) { 
        array[j + 1 ] = array[j];
        j --
       }
       array[j + 1 ] = aux;
    }
return array; 




//   let desordenado = true
// while(desordenado){
// desordenado = false;
//   for(var i= 0; i < array.length -1; i++){ 
//     if(array[i] > array[i+1] ){
//       var aux = array[i+1]
//       array[i +1] = array[i]        // [4, 3, 5,  9, 2] 
//       array[i] = aux     
//       desordenado = true           //  0  1  2   3  4      
//     } else if (array[i] < array [i-1])
//       var aux = array[i];
//       array [i] = array[i-1];
//       array[i -1] =  aux;
//       desordenado = true
//   }
// }
// return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  // recorremos toda la lista, vamos guardando el menor de todos los numeros recorridos
  // intercambiamos el menor de todos por el primero desordenado 
  
  for(let i = 0; i < array.length ; i++) {
    let indexMin = i;
    for (let j = i +1 ; j < array.lenght; j++){
    if(array[j] < array[indexMin] )  indexMin = j;
    }
    if(i !== indexMin){
    let aux = array[i];
    array[i] = array[indexMin];
    array[indexMin] = aux;
    }
  }

return array;



}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
