var myPetsArr = ["Dog", "Cat"];
function myArrayFunction(myPets){
    var myNewPets = [...myPets];
     var firstPet = myNewPets[0];
     var lastPet = myNewPets[myNewPets.length - 1];
     myNewPets.shift();
     myNewPets.unshift("Lion");
     myNewPets.push("Bird");
    return myNewPets;


}
console.log(myArrayFunction(myPetsArr));
module.exports = myArrayFunction;