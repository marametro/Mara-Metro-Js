let kata ='mara';
let kataTemp ='';
for(let i = kata.length-1; i>=0; i--){
  kataTemp += kata[i];
}

console.log(kataTemp)

if(kata === kataTemp) {
  console.log('This Word Is Palindrome')
}else {
  console.log('This Word Not Palindrome')
}