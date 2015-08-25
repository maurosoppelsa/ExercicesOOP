function  Vehicle(type_of_vehicle,the_speed){

var type= type_of_vehicle;

this.speed=the_speed;

switch(type_of_vehicle){

case "land":

var land = new Land(10,10,10,10);

this.speed += land.acel_wheels;

alert("--Land Vehicle--");
alert("Final Speed: " + Math.trunc(this.speed));

break;

case "water":

alert("--Water Vehicle--");

var water = new Water();

water.get_propellers();

water.getProper_data();

this.speed += water.final_acel;

alert("Final speed: " + this.speed);

break;

case "air":

var air = new Air();

break;

default:

alert("That vehicle doesnt exist!!");

}

}

function Land(radius1,radius2,radius3,radius4){

var radios = [radius1,radius2,radius3,radius4];

var prop = new Propultion();

var name;

for(var i=0;i<4;i++){

name = "wheel" + i;

prop.addWheel(name,radios[i]);

}

this.acel_wheels = prop.get_AcelWheels();

}

function Water(){

var prop = new Propultion();

this.final_acel=0;

this.get_propellers = function(){

var prop_num = prompt("enter the number of propellers");

var prop_number = parseInt(prop_num);

var prop_direction,direction,q_fin,fin_quant,bool_dir=false;


for(var i=0;i<prop_number;i++){

prop_direction = prompt("Enter the direction:\n1 - clockwise\n2 - anticlockwise");

direction = parseInt(prop_direction);

q_fin = prompt("Enter the numbers of the fins");

fin_quant = parseInt(q_fin);

if(prop_direction=1){

bool_dir = true;

}else if(direction=2){

bool_dir = false;

}

this.add_new_propeller = prop.addPropeller(fin_quant,bool_dir);

}


};

this.get_dir;

this.getProper_data = function(){

for(var i=0;i<prop.prop_content.length;i++){

if(prop.prop_content[i].direction=true){

this.get_dir="clockwise";

}else{

this.get_dir = "anticlockwise";

}

alert("Propeller added:" + " direction: " + this.get_dir + " numbers of fins: " + prop.prop_content[i].fin_num);

this.final_acel = prop.prop_content[i].getAcelResult();

alert("Propeller aceleration result: " + this.final_acel);

}

};

}

function Air(turbo_button){



}

function Propultion(){

this.Finalpropultion;
this.wheels;
this.propellers;
this.nozlees;

this.prop_content= [];
this.wheel_content = [];
this.noz_content = [];

this.addPropeller=function(finNumber,spinDirection){

var the_propeller = new Propellers(finNumber,spinDirection);

this.prop_content.push(the_propeller);
};

this.addWheel = function(name,radius){

var the_wheel = new Wheel(name,radius);

this.wheel_content.push(the_wheel);

};

this.addNozzle = function(nozlee){

this.noz_content.push(nozlee);

};

this. get_AcelWheels = function(){

var final_prop_wheel=0;

for(var i=0;i<this.wheel_content.length;i++){

final_prop_wheel += this.wheel_content[i].perimeter;

}

return final_prop_wheel;

};

}

function Propellers(finNumber,spinDirection){

  this.direction=spinDirection;
  this.fin_num = finNumber;

  var prop_acelerate;
  this.getAcelResult = function(){

    if(spinDirection=true){

      prop_acelerate = finNumber ;

      return prop_acelerate;

    }else{

    prop_acelerate = (finNumber)*-1;

    return prop_acelerate;

    }
  };
}

function Wheel(name,radius){

this.name=name;
this.radius=radius;

var pi = 3.14;

this.perimeter = 2 * pi * radius;

}

function Nozzle(the_power){

  var power=0;
  this.afterburner=false;
  this.getTurboResult= function(){

    if(afterburner){

      this.power+=the_power*2;

      return power;

    }else{

      this.power=the_power;

      return power;

    }
  };


}

var vehicle = new Vehicle("water",120);
