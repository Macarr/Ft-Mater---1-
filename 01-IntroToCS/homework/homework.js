'use strict';

function BinarioADecimal(num) {
//Declara una función que reciba por parámetro un número en formato string en base binaria y retorne el mismo
 //número en base decimal. El valor retornado debe ser de tipo number. Por ejemplo:
// BinarioADecimal('1100'); // debe retornar 12

var resultado = 0;
var exponente = num.length -1;
for ( var i = 0; i < num.length; i++){
   resultado = resultado + num[i] * Math.pow(2,exponente);
   exponente -- 
}
 return resultado; 
// otra manera de hacerlo 
//  return parseInt(num, 2);
}


function DecimalABinario(num) {
   var resto = []
   while(num > 1) {
    resto.push(num % 2)
    num = Math.floor(num/2)
   } 
   resto.push(num)
  
  return resto.reverse().join("")
  

//Otra manera de resolverlo usando .toString
//  return num.toString(2)
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
