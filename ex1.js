
/*Vehicle general object*/

function  Vehicle(type_of_vehicle,the_speed){

var type= type_of_vehicle;

this.speed=the_speed;

switch(type_of_vehicle){

case "land":

  alert("--Land Vehicle--");

var frontWheels = parseInt(prompt("Enter the radius for the front wheels"));
var backWheelies = parseInt(prompt("Enter the radius for the back Wheelies"));

var land = new Land(frontWheels,frontWheels,backWheelies,backWheelies);

this.speed += land.acel_wheels;

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

var air_aceleration = air.getAceleration();

alert("The aceleration is " + air_aceleration);

this.speed+= air_aceleration;

alert("Final speed: " + this.speed);

    break;

case "amphibious":

var type =prompt("select the type of movement\n1- Water\n2- Land");

if(type==1){

  var water = new Water();

  water.get_propellers();

  water.getProper_data();

  this.speed += water.final_acel;

  alert("Final speed: " + this.speed);

}else if(type==2){

  var frontWheels = parseInt(prompt("Enter the radius for the front wheels"));
  var backWheelies = parseInt(prompt("Enter the radius for the back Wheelies"));

  var land = new Land(frontWheels,frontWheels,backWheelies,backWheelies);

  this.speed += land.acel_wheels;

  alert("Final Speed: " + Math.trunc(this.speed));


}else{
  alert("You can only select between 1 or 2");
    }

    break;

      default:

      alert("That vehicle doesnt exist!!");

      }

}
/*Land vehicle object*/
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
/*Water vehicle object*/
function Water(){

  var prop = new Propultion();

  this.final_acel=0;

  this.get_propellers = function(){

    var prop_num = prompt("enter the number of propellers");

    var prop_number = parseInt(prop_num);

    var prop_direction,direction,q_fin,fin_quant;


      for(var i=0;i<prop_number;i++){

          alert("--Propeller " + (i+1) + "--");

          prop_direction = prompt("Enter the direction:\n1 - clockwise\n2 - anticlockwise");

          q_fin = prompt("Enter the numbers of the fins");

          fin_quant = parseInt(q_fin);

          this.add_new_propeller = prop.addPropeller(fin_quant,prop_direction);

            }


        };

this.get_dir;

this.getProper_data = function(){

  for(var i=0;i<prop.prop_content.length;i++){

    if(prop.prop_content[i].direction){

      this.get_dir="clockwise";

    }else{

this.get_dir = "anticlockwise";

      }

 alert("--Propeler " + (i+1)+"--");
 alert("direction: " + this.get_dir + " numbers of fins: " + prop.prop_content[i].fin_num);

this.final_acel += prop.prop_content[i].getAcelResult();

alert("Propeller aceleration result: " + this.final_acel);

      }

  };

}
/*Ait vehicle object*/
function Air(){

  alert("--Air Vehicle--");

  this.AirAceleration=0;

    var prop = new Propultion();

  this.getAceleration = function(){

    var power = prompt("Enter the power of the nozlee propeller");
    var turbo = confirm("Do you want to activate the turbo?");

    prop.addNozzle(power,turbo);

  this.AirAceleration=prop.getNozleePropultion();

      return this.AirAceleration;

  };

}
/*All Vehicles call to propultion in order to get aceleration*/
function Propultion(){

this.Finalpropultion;
this.wheels;
this.propellers;
this.spin_dir=false;

this.prop_content= [];
this.wheel_content = [];
this.noz_content = [];
/*create propelers objects for propultion uses*/
this.addPropeller=function(finNumber,num_selection){

  if(num_selection==1){

this.spin_dir = true;

  }else{
    this.spin_dir=false;
  }


var the_propeller = new Propellers(finNumber,this.spin_dir);

this.prop_content.push(the_propeller);
};
/*create a wheel object for propultion uses*/
this.addWheel = function(name,radius){

  var the_wheel = new Wheel(name,radius);

this.wheel_content.push(the_wheel);

};
/*create a nozle object for propultion uses*/
this.addNozzle = function(power,afterburner){

  var nozlee = new Nozzle(power,afterburner);

this.noz_content.push(nozlee);

};
/*it return the nozlee aceleration*/
this.getNozleePropultion=function(){

  var propultion = this.noz_content[0].getTurboResult();

  return propultion;

};
/*it return the wheels aceleration*/
this. get_AcelWheels = function(){

  var final_prop_wheel=0;

    for(var i=0;i<this.wheel_content.length;i++){

        final_prop_wheel += this.wheel_content[i].perimeter;

        }

          return final_prop_wheel;

        };

      }
/*It give the aceleration to travel in water*/
function Propellers(finNumber,spinDirection){

  this.direction=spinDirection;
  this.fin_num = finNumber;

  var prop_acelerate;
  this.getAcelResult = function(){

    if(spinDirection===true){

      prop_acelerate = finNumber;

      return prop_acelerate;

    }else{

    prop_acelerate = (finNumber)*-1;

    return prop_acelerate;

    }
  };
}
/*It give the aceleration to travel in land*/
function Wheel(name,radius){

this.name=name;
this.radius=radius;

var pi = 3.14;

this.perimeter = 2 * pi * radius;

}
/*Nozle is the aceleration device for air*/
function Nozzle(the_power,afterburner){

  this.power = 0;
  this.getTurboResult= function(){

    if(afterburner){

      this.power=parseInt(the_power*2);

      return this.power;

    }else{

      this.power=parseInt(the_power);

      return this.power;

    }
  };

}
/*Here you can select or create differents vehicles*/
var vehicle = new Vehicle("amphibious",120);
