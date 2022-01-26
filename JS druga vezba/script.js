var num1 = parseInt(prompt("Unesite prvi broj:"));
var op = prompt("Unesite operator:");
var num2 = parseInt(prompt("Unesite drugi broj:"));

if(op="+"){
    var result = num1+num2
}
else if(op="-"){
    var result = num1-num2
}
else if(op="*"){
    var result = num1*num2
}
else if(op="/"){
    var result = num1/num2
}

alert("Rezultat iznosi: " + result);