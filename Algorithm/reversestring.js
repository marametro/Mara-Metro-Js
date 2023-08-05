let kata ='mara';

console.log(kata.length)

let balik='';
for(let i = kata.length - 1; i >= 0; i--) {
  balik += kata[i];
}

console.log(balik);