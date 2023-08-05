
let a = 0;
let b = 1;
let c = 0;
let totalgenap = 0;

for(let i = 1; i <= 400000; i++) {
  c = a + b; // 1 , 1 , 2
  //console.log(c);
  a = b ; // 1 , 2 , 3
  b = c; // 1 , 1

  if(c % 2 === 0 && c < 4000000) {
    totalgenap = totalgenap + c;
  }
  
}

console.log('Jumlah Bilangan Genap=' + totalgenap );

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89