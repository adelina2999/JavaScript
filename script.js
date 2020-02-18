function multiplyValues() {
    let num1, num2, res;
    num1=Number(document.calculator.txtnum1.value);
    num2=Number(document.calculator.txtnum2.value);
    res=num1*num2;
    document.calculator.txtres.value=res;
}

function divideValues() {
    let num1, num2, res;
    num1=Number(document.calculator.txtnum1.value);
    num2=Number(document.calculator.txtnum2.value);
    res=num1/num2;
    document.calculator.txtres.value=res;
}