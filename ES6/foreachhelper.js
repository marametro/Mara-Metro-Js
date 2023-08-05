let kecamatan = ['Metro Timur', 'Metro Pusat', 'Metro Barat'];

for (let i = 0; i < kecamatan.length; i++) {
  console.log(kecamatan[i]);
}


kecamatan.forEach(function(kec) {
  console.log(kec)
});



let bil = [1,2,3,4,5];

let sum = 0;

function adding(bil){
  sum += bil;
}

bil.forEach(adding)

console.log(sum)



var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];

var areas = [];
images.forEach(function (image) {
  areas.push(image.height * image.width);
});


console.log(areas)