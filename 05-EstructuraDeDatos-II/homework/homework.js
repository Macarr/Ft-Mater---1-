'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de
     un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un 
  valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos 
  un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un 
  nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null. 
*/
function LinkedList() {
  this.head = null; 
  this.length = 0;

}

function Node(value) {
  this.value = value;
  this.next = null;
}
// que quiero que haga add ? 
// 1) instanciar un node 
// 2) Inserte al final de la lista 
// 3) Cuando la lista no tenga nada insertarlo en el HEAD 
// 4) Si ya tiene algo colocarlo al final, donde next sea NULL 


LinkedList.prototype.add = function(value) { 
// creo el nodo nuevo
  const newNode = new Node(value); 
  let current = this.head; 
  // // Si head/current esta vacio incerto el nuevo nodo, cuando lo incerto quiero que retorne 
   if (!current){ 
    this.head = newNode; 
    this.length++ 
    return value;
   }
// Mientras que current.next sea distinto de null (este ocupado) voy a recorrerto, y current va a pasar 
// al siguiente nodo, hasta que se encuentre con un un null y ahi finaliza el while 
   while (current.next) current = current.next; 
   

// cuando finaliza el while, a current.next (que ahora es null), le insertamos el valor de newNode 
   current.next = newNode;
   this.length++ 
   return value;

   }

  //  remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de
  //   un solo nodo y de una lista vacía);
   LinkedList.prototype.remove = function() {
    // current arranca siempre desdde el principio 
     let current = this.head 

     // si no tengo current porque la lista esta vacia retornamos null
      if(!current) return null;
      
      // si la lista tiene un solo nodo, la condicion evalua que no tengo next xq unicamente tiene head ...
      // voy a eliminar a head, pero antes voy a almacenar el valor en una constante y despues retornarlo 

      if(!current.next ) {
        const aux = this.head.value;
        this.head = null; 
        this.length--;
        return aux;

      }
        // si la lista no esta vacia, ni tiene un solo nodo vamos a eliminar el ultimo  nodo 
        // tenemos que mirar dos nodos para adelante y que current se pare en el anteultimo para poder eliminar el ultimo
        // 
        while(current.next.next){
          current = current.next
        }
          // almaceno el valor en un aux antes de eliminarlo para poder retornarlo 
          const aux = current.next.value;
          this.length --; 
          current.next = null;
          return aux

       }

       

   LinkedList.prototype.search = function(arg){
   let current = this.head;

   // tenemos que saber si current tiene un valor por ende retorna true, de ser asi tenemos que saber si arg es una 
   //funcion o un valor 
    while (current) {
    if (typeof arg === "function") { 
      //como es una funcion le pasamos el valor de current como parametro para ejecutar la funcion
      // si se cumple y devuelve true retornamos el valor 
      if (arg(current.value)) {
        return current.value; 
      }
     } else{
       if( current.value === arg) {// si arg es un valor que coincide con el de current vamos a retornarlo
       return current.value;
      }   
      }

      current = current.next; // si recorremos toda la lista tenemos que avanzar el current 

      }
      return null; //si no encuentra lo que buscaba 
  }

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, 
  posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, 
    {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a
   modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro 
   al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el 
  código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de 
  ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará 
  el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y 
  almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un 
    booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay 
algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor
 en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
 
  this.numBuckets = 35
  this.buckets = []

 } 


 HashTable.prototype.hash = function(inp) {
  let hs = 0;
  for(let i = 0; i < inp.length; i++ ) {
    hs +=  inp.charCodeAt(i);
   }
     return hs % this.numBuckets; 
  }

HashTable.prototype.set = function(clave, valor) {
  if(typeof clave !== "string") throw new TypeError ("Keys must be strings");

  var indice = this.hash(clave); 

  if( !this.buckets[indice]){ //si ese indice de buckets esta vacio creo un objeto vacio
    this.buckets[indice] = {}; 
  }

  this.buckets[indice][clave] = valor; // si ya existe el objeto con ese indice guardo el valor 
  
}

HashTable.prototype.get = function(clave) { 
 var indice = this.hash(clave);
 return this.buckets[indice][clave];
}

HashTable.prototype.hasKey = function(clave) { 
  var indice = this.hash(clave);
 return !!this.buckets[indice][clave];
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
