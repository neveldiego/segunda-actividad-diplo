const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
num = numeroRandom%2;
if(num==0){
    console.log("el numero "+ numeroRandom + " es par.");
}
else{
    console.log("el numero "+ numeroRandom + " es impar.");
}