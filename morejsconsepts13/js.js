let idealCar = {
    name: "cobra",
    color :"blue",
    weight : 3600,
   myCar: function() {
       console.log("My ideal car is a " + this.name + " with a color of " +  this.color + " but I do not want it to be over " + this.weight + " pounds")
   }}
   idealCar.myCar()