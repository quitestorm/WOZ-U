var myFavNum =48;
var myFavPet = "Butterscotch";
var rainIsLovely = true;
var numOne =24;
var numTwo = 57;
var addNumbers =console.log( numOne + numTwo);

var divideNumbers = console.log(numTwo / numOne);

var inputGrade = prompt("Enter a grade");
var numberGrade = parseInt(inputGrade);


if (numberGrade >= 90){
    letterGrade = "A"
} 
else if (numberGrade  >= 80){
    letterGrade = "B"
}
else if (numberGrade >= 70){
    letterGrade = "C"
}
else if (numberGrade >= 60){
    letterGrade = "D"
}
else{
    letterGrade = "F"
} 
alert(letterGrade)

var amazingCars = ["Roadrunner", "Nova", "GTO", "Ferrii"];
console.log(amazingCars)
console.log(amazingCars.pop());
console.log(amazingCars.sort());
console.log(amazingCars.length)
