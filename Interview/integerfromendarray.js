
let intArray =  [10, 20, 30, 40, 50, 60];
let k = 4;

const solve = (intArray, k) => { 
  return intArray.
         reverse().
         splice(0, k).
         reverse() 
        };


console.log(solve(intArray,k));

intArray =  [10, 20, 30, 40, 50, 60];
k = 4;

const solve1 = (intArray, k) => intArray.splice(intArray.length-k,k);

console.log(solve1(intArray,k));

intArray =  [10, 20, 30, 40, 50, 60];
k = 4;

const solve2 = (intArray, k) => { 
  return intArray.splice(intArray.length - k, k) 
};


console.log(solve2(intArray,k));


//intArray =  [10, 20, 30, 40, 50, 60];
//k = 4;
//intArray = [1,-2,3,-4];
//k= 4

intArray =  [1,2,3,4];
k = 2;


const solve3 = (intArray, k) => {
  let r = intArray.length-k; 
  let res= []; 
  
  for(let i=r;i<=intArray.length-1;i++){ 
    if(intArray[i] != '')
      res.push(intArray[i]); 
  } 
  return res; 
};

console.log(solve3(intArray,k));


