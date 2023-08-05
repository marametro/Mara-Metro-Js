const dataArray = [
  278,
  'c4c18e35-041a-4d24-9885-162925b49741',
  'WOPC230007',
  279,
  '3413b48e-fe39-4874-9c25-b65494b7b29b',
  'WOPC230007',
  280,
  '08d55a6e-80d0-45b6-85fa-1c744c0f1e81',
  'WOPC230007'
];

const jsonArray = [];
for (let i = 0; i < dataArray.length; i += 3) {
  const obj = {
    id: dataArray[i],
    guid: dataArray[i + 1],
    code: dataArray[i + 2]
  };
  jsonArray.push(obj);
}

const jsonString = JSON.stringify(jsonArray);

console.log(jsonString);