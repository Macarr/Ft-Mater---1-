'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
  hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(valor) {
   this.value = valor;
   this.left = null;
   this.right = null;
   }

BinarySearchTree.prototype.insert = function(valor) {
   if(valor < this.value){
      if(this.left) { 
         this.left.insert(valor);

      }
      else{
         this.left = new BinarySearchTree(valor);
         return valor;
      }
   }
   else{
      if(this.right) { 
         this.right.insert(valor);

      }
      else{
         this.right = new BinarySearchTree(valor);
         return valor;
      }

   }

}
BinarySearchTree.prototype.size = function() {
   let count = 1;
   if(this.left) {
      count += this.left.size(); 
   }
   if(this.right) {
      count+= this.left.size();
   }

   return count;

}
BinarySearchTree.prototype.contains = function(valor) {
   if(this.value === valor) return true; 
   if(this.left && this.left.contains(valor)) return true; 
   if(this.right && this.right.contains(valor)) return true; 
   return false;
   
}
BinarySearchTree.prototype.depthFirstForEach = function(cb, stri) {
  var memoria = []
   switch(stri){
      case "post-order":  // left - right - node 
      
      if(this.left) this.left.depthFirstForEach(cb, stri);
      if(this.right) this.right.depthFirstForEach(cb, stri); 
      cb(this.value);
         break;

      case "pre-order": //node- left - right 
          cb(this.value);
          if(this.left) this.left.depthFirstForEach(cb, stri);
          if(this.right) this.right.depthFirstForEach(cb, stri); 
          
         break;

      default: //in order  - left - node - right
      
      if(this.left) this.left.depthFirstForEach(cb, stri);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, stri);
   }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue) {
if(!queue){
 var queue = [];
}
  cb(this.value); 

  if(this.left) queue.push(this.left);

  if(this.right) queue.push(this.right); 

  if(queue.length > 0 ) { 
   queue.shift().breadthFirstForEach(cb, queue);
  }
  
}
   

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
