/*
Buat sebuah fungsi bernama `reverseString` dengan parameter berupa string
dan fungsi tersebut mengembalikan string yang dibalik.  
Contoh:
Mara Menjadi araM
Senja Menjadi ajneS
*/


function reverseString(kata){
  let result = '';  
   for(let i = kata.length - 1; i >= 0; i--)  {
     result += kata[i];
   }
  return result;
}

console.log(reverseString("Mara"))