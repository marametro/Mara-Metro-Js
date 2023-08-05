const dataArray = [
  'WOPC230007',
  'WOPC230007',
  'WOPC230008'
];

let filter = dataArray.filter((element, index) => {
  return dataArray.indexOf(element) === index;
});

const woNumberConcat = filter.join(",");

console.log(woNumberConcat);