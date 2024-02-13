

function Calculator(num1 , num2, operator){
    let result = 0;
    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;  
            break;
        case ':':
        result = num1 / num2;  
        break;

        default:  'tidak ada operator';
    }
    return result;
}

console.log(Calculator(2,3,'+'))