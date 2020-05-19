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


var i = 0;
while (i <= 4){
    console.log("The value of i is: " + i);
    i++;
}
var myArray = [3, 5, 9, 11, 18, ];
for (var i = 0; i < myArray.length; i++){
    if (myArray[i] >= 10) {
        console.log("The value " + myArray[i] + " is double digits!");
    }
    else {
        console.log("The value " + myArray[i] + " is single digits!");
    }
}

var awesomeBirds = ["Bluebird", "hummingbird", "Roadrunner","Dove"];
for (var i = 0; i< awesomeBirds.length; i++){
    if(awesomeBirds[i] === "hummingbird"){
        console.log("Hummingbirds are awesome!");
    }else{
        console.log("Not as Kool as a hummingbird");
    }
    
}

function addStrings(string1,string2){
    return string1 + string2
}
console.log(addStrings(3,5));

function calculateNumbers(){
     numb1 = 13;
     numb2 =7;
    var numb3 = numb1 + numb2;

    if (numb3 > 10) {
        alert("BIG NUMBER");
    }else{
        alert("small number");
    }
}
console.log(calculateNumbers())


function addTwoStrings(string1, string2){
   console.log(string1 + string2);
}
var myString = addTwoStrings("John ", "Smith");