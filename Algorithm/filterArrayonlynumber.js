function filterArray(arr) {
  return arr.filter(n => typeof n === 'number');
}


let data = ['sepeda',10,20,'buku'];

console.log(filterArray(data));