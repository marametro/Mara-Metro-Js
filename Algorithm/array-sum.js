
let dataArray = [1,2,3,4,10,11];

let sum=0;
for(let i = 0; i < dataArray.length; i++) {
    sum += dataArray[i];
}

console.log(sum);


let total = 0;
dataArray.forEach(function(item){
  total += item;
})

console.log(total)