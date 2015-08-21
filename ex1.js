function Vehicle(){


  this.model="";
  this.speed;
  this.acelerate = function(propultion){

    this.speed+=propultion.Finalpropultion;

    alert("Model: "+this.model + " - Wheels Radius: " +propultion.wheelRd+ " - Wheels propultion: " +Math.trunc(propultion.wheelsProp) + " -  Nozzles: " + propultion.nozzles + " - Propellers: " + propultion.propellers );
    alert("The vehicle is acelerating by " + Math.trunc(propultion.Finalpropultion) + ", Final speed: " + Math.trunc(this.speed));

  };

  this.pressTurboButton= function(propultion){

    var nozzlesTurbo = propultion.nozzles * 2;
    this.speed = this.speed + propultion.nozzles;

    alert("Turbo Button was pressed in " + this.model);
    alert("nozzles is incremented to " + nozzlesTurbo + " speed is now " + this.speed);

  }

}

function Propultion(wheelRad){

var wheels = new Wheels(wheelRad);

this.afterburner=false;
this.wheelRd=wheelRad;
this.wheelsProp = wheels.perimeter;
this.nozzles;
this.propellers;
this.Finalpropultion;
this.addPropultion = function(nozzles,propellers){

this.Finalpropultion= this.wheelsProp + nozzles + propellers;

};

}

function Wheels(radius){

  var pi = 3.14;

  this.perimeter = 2 * pi * radius;

}

var vehicle1 = new Vehicle();
vehicle1.speed=100;
vehicle1.model="Camaro";

var vehicle2 = new Vehicle();
vehicle2.speed=130;
vehicle2.model="Ferrari";


alert('Vehicle: ' + vehicle1.model + " Speed: " + vehicle1.speed);
alert('Vehicle: ' + vehicle2.model + " Speed: " + vehicle2.speed);

var propultion1 = new Propultion(10);
propultion1.nozzles=30;
propultion1.propellers=10;
propultion1.addPropultion(propultion1.nozzles,propultion1.propellers);

vehicle1.acelerate(propultion1);

var propultion2 = new Propultion(15);
propultion2.nozzles=30;
propultion2.propellers=20;
propultion2.addPropultion(propultion2.nozzles,propultion2.propellers);

vehicle2.acelerate(propultion2);
vehicle2.pressTurboButton(propultion2);
