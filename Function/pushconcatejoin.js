
const str1 = 'WOPC220775';
const str2 = 'WOPC220776';
const str3 = 'WOPC220777';
const str4 = 'WOPC220778';

const dataArray = [
    {
      "wo_no" : "WOPC220775"
    },
    {
      "wo_no" : "WOPC220776"
    },
    {
      "wo_no" : "WOPC220777"
    },
    {
      "wo_no" : "WOPC220778"
    }
];

let arraTemp = [];

for (var objData of dataArray) {

  //console.log(objData.wo_no)
  arraTemp.push(objData.wo_no);

}

const commaSeparated = arraTemp.join(',');

console.log(commaSeparated)