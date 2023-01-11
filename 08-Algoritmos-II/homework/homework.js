'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    //
    if( array.length <= 1 ) {return array}

     let pivote = array[0]
     let arrayLeft = []
     let arrayRigth = []
     
     
     for( let i = 1; i < array.length; i++) { 
      if(pivote > array[i]) arrayLeft.push(array[i])
      
      else  arrayRigth.push(array[i]) 
      
     }
     arrayLeft = quickSort(arrayLeft)
     arrayRigth= quickSort(arrayRigth)
     return arrayLeft.concat(pivote).concat(arrayRigth);
     }
     
    
   
    



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //
  // mitad = []
  // caso base = array.lenth > 2
  // left [] slice para aplicar a la mitad  
  //right = 
  //nuevoarray = [] elementos ordenados 
  // recursion
  // si el elemento de left < right
  // pushear al nuevo array
  // concatenar 

  if(array.length <=1) return array

  var mitad = Math.floor(array.length /2)
  var left = array.slice(0,mitad)
  var right = array.slice(mitad) //no le pongo hasta donde xq por defecto es hasta el final del array

  return merge(mergeSort(left), mergeSort(right))

}

function merge( left, right) { // [2, 10] [4, 7]
  let resultMin = []
  let indexLeft = 0
  let indexRight = 0
  while (indexLeft < left.length && indexRight < right.length) {
    if(left[indexLeft] < right[indexRight ]) {
      resultMin.push(left[indexLeft])
      indexLeft ++
    } else {
      resultMin.push(right[indexRight])
      indexRight++
    }
 }
   return resultMin.concat(left.slice(indexLeft)).concat(right.slice(indexRight));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
