/* 
mengganti string dengan huruf pertama dari setiap kata menggunakan huruf besar.
contoh : ismara adi saputra menjadi
         Ismara Adi Saputra
  */

let kata = "ismara adi saputra";
let result = '';
for(let i = 0; i < kata.length; i++)  {
  if(i == 0 || kata[i - 1] == ' ') {
    result += kata[i].toUpperCase();  
  } else {
    result += kata[i];
  }
}

console.log(result);
