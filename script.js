
let resTable = document.getElementById("resultPanel");
let doingOP = false;
let firstNumber = 0;
let operation;
let float = false;
let firstFloat = false;

var operators = {
    '+': function(a,b){
        return a+b;
    },
    '*': function(a,b){
        return a*b;
    },
    '/': function(a,b){
        return a/b;
    },
    '-': function(a,b){
        return a-b;
    },
    '%': function(a){
        return a*1.0/100;
    },
    'I': function(a){
        return Number(-a);
    },
    '=': function(a){
        return a;
    }
}

function putNumber(num){
    let value = resTable.innerHTML;
    if (firstFloat){
        firstFloat = false;
        value +=  "." + num;
    }
    else{
        value *= 10;    
        value += num;
    }
    resTable.innerHTML = value;
}

function doOP(op){
    if (op == '%' || op == 'I'){
        firstNumber = resTable.innerHTML;
        let result =  operators[op](Number(firstNumber));
        resTable.innerHTML = result;
    }
    else if (!doingOP){
        doingOP = true;
        firstNumber = resTable.innerHTML;
        operation = op;
        resTable.innerHTML = 0;
    }
    else{
        alert("Error");
        reset();
    }
}

function eq(){
    let secondNumber = resTable.innerHTML;
    let result = operators[operation](Number(firstNumber), Number(secondNumber));
    resTable.innerHTML = result;
    firstNumber = result;
    doingOP = false;
}

function reset(){
    operation = null;
    doingOP = false;
    firstNumber = 0;
    firstFloat = false;
    float = false;
    resTable.innerHTML = firstNumber;
}

function startFloat(){
    if (!float){
        float = true;
        firstFloat = true;
    }
}