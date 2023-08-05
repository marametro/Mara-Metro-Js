function getPartCode(str,param) {
    return str.split('-')[param];
}

console.log(getPartCode("50008294-3.1-3.1.1",1));
console.log(getPartCode("50008294-3.1-3.1.1",2));
