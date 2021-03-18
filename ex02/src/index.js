var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
]
    function myArrayFunction(arr){
    var newTemps = [...arr];
     var averageDayTemp = [];
     var a=0;
     var b=0;
     var c=0;
     var d=0;
     var e=0;
     
     for (i = 0; i <= 3; i++){
          a += newTemps[0][i];
          if (i === 3){
              averageDayTemp.push(a/4);
          }
     }
     for (i = 0; i <= 3; i++){
        b += newTemps[1][i];
        if (i === 3){
            averageDayTemp.push(b/4);
        }
   }
   for (i = 0; i <= 3; i++){
    c += newTemps[2][i];
    if (i === 3){
        averageDayTemp.push(c/4);
    }
}
for (i = 0; i <= 3; i++){
    d += newTemps[3][i];
    if (i === 3){
        averageDayTemp.push(d/4);
    }
}
for (i = 0; i <= 3; i++){
    e += newTemps[4][i];
    if (i === 3){
        averageDayTemp.push(e/4);
        
    }
}

    return averageDayTemp;


}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;