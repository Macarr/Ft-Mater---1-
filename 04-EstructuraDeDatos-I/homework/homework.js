'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if ( n === 0 || n === 1) return 1; 
   else if (n < 0) return 0
   
   return n * nFactorial( n - 1 )
   }

// EJERCICIO 2
function nFibonacci(n) {
   if (n === 1 ) return 1 
   else if (n === 0) return 0 

   return  nFibonacci(n-1) + nFibonacci(n -2) 
}

// EJERCICIO 3
function Queue() {
 this.array = [];
 }

 Queue.prototype.enqueue = function(n) { 
   this.array.push(n)
 }


 Queue.prototype.dequeue = function() { 
   if(this.array.length === 0) return undefined
  return this.array.shift()
   
 }
 Queue.prototype.size = function() { 
   return this.array.length
  }


//  var queue = new Queue()
//  queue.enqueue()
//  queue.dequeue()
//  queue.size()

//  console.log(queue)

 



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
