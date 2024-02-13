/*
Buat sebuah fungsi bernama `isPalindrome` dengan parameter string. Mengembalikan `true` jika string tersebut adalah palindrome dan `false` jika bukan.
Contoh:
isPalindrome('madam') // true
isPalindrome('hello') // false
isPalindrome('') // true
*/

function isPalindrome(kata){
  let result = false;
  let word = '';

  for(let i =  kata.length -1; i >= 0; i--)  {
    word += kata[i];
  }
  if(kata === word) {
    result = true;
  }
  return result;
}


console.log(isPalindrome("madam"))