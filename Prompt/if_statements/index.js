var arithmeticalOperand = prompt("Unesite aritmeticki operator: ");

var a = prompt("Unesite prvi broj: ");
var b = prompt("Unesite drugi broj: ");
a = parseInt (a);
b = parseInt (b);

if(a > b){
    console.log("Prvo broj " + a + "je veci");
}

if(a < b){
    console.log("Drugi broj" + b + "je veci");
}

if(arithmeticalOperand === "-"){
    console.log("Razlika dva broja je:" + (a - b) );
}

if(arithmeticalOperand === "+"){
    console.log("Zbir dva broja je:" + (a + b));
}

else if(arithmeticalOperand === "/"){
    console.log("Kolicnik dva broja je:" + (a / b) );
}
else if(arithmeticalOperand === "*"){
    console.log("Proizvod dva broja je:" + (a * b));
}
else if(arithmeticalOperand === "%"){
    console.log("Moduo dva broja je:" + (a % b));
}
else{
    console.log("Unet je nepostojeca operacija!")
}