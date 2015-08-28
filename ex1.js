
/*Vehicle general object*/

function  Vehicle(type_of_vehicle,the_speed){

var type= type_of_vehicle;

this.speed=the_speed;

switch(type_of_vehicle){

case "land":

var fw = $("#fw_rad").val();
var bw = $("#bw_rad").val();

var frontWheels = parseInt(Math.trunc(fw));
var backWheelies = parseInt(Math.trunc(bw));

var land = new Land(frontWheels,frontWheels,backWheelies,backWheelies);

$("#Init_veloc_lnd").text("Initial speed: " + this.speed);

this.speed += parseInt(land.acel_wheels);

$("#land_ac").text("Aceleration: " + Math.trunc(land.acel_wheels));
$("#land_fV").text("Final speed: " + this.speed);

        break;

case "water":

var water = new Water();

  water.get_propellers();

  water.getProper_data();

this.speed = parseInt($("#water_speed").val());

$("#Init_veloc_wt").text("Initial speed: " + this.speed);

this.speed += parseInt(water.final_acel);

$("#water_ac").text("Aceleration: " + water.final_acel);

$("#water_fV").text("Final speed: "+this.speed);

      break;

case "air":

var air = new Air();

var air_aceleration = air.getAceleration();

$("#air_init_speed").text("Speed: "+$("#air_speed").val()) ;

$("#air_ac_speed").text("Aceleration: "+ air_aceleration);

this.speed+= air_aceleration;

$("#air_final_speed").text("Final speed: " + this.speed);

    break;

case "amphibious":

var type =prompt("select the type of movement\n1- Water\n2- Land");

if(type==1){

  var water = new Water();

  water.get_propellers();

  water.getProper_data();

  this.speed += water.final_acel;

  //alert("Final speed: " + this.speed);

}else if(type==2){

  var frontWheels = parseInt(prompt("Enter the radius for the front wheels"));
  var backWheelies = parseInt(prompt("Enter the radius for the back Wheelies"));

  var land = new Land(frontWheels,frontWheels,backWheelies,backWheelies);

  this.speed += land.acel_wheels;

  //alert("Final Speed: " + Math.trunc(this.speed));


}else{
  //alert("You can only select between 1 or 2");
    }

    break;

      default:

    //alert("That vehicle doesnt exist!!");

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

    var prop_num = $("#prop_quant").val();

    var prop_number = parseInt(prop_num);

    var prop_direction,direction,q_fin,fin_quant;

    var id_select;

      for(var i=0;i<prop_number;i++){

          id_select = "#direction"+(i+1);

          direction = $(id_select).val();

        if(direction == "Clockwise"){
          prop_direction = 1;
        }

        if(direction == "Anticlockwise"){
          prop_direction = 2;
        }

          q_fin = $(("#fin_num"+(i+1))).val();

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

 //alert("--Propeler " + (i+1)+"--");
 //alert("direction: " + this.get_dir + " numbers of fins: " + prop.prop_content[i].fin_num);

this.final_acel += prop.prop_content[i].getAcelResult();

//alert("Propeller aceleration result: " + this.final_acel);

      }

  };

}
/*Ait vehicle object*/
function Air(){

  //alert("--Air Vehicle--");

  this.AirAceleration=0;

    var prop = new Propultion();

  this.getAceleration = function(){

    var power = parseInt($("#air_pw").val());

    var turbo_txt = $("#turbo_button").text();

    var turbo=false;

    if(turbo_txt=="ON"){
      turbo = true;
    }

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

$("#land_start").click(function(){

var speed = $("#land_speed").val();

var vehicle = new Vehicle("land",parseInt(speed));

getlndVelocityData();

});

$("#water_start_bt").click(function(){

var speed = $("#water_speed").val();

var water = new Vehicle("water",parseInt(speed));

getwtVelocityData();

});


$("#quant_prop_bt").click(function(){

var propq= parseInt($("#prop_quant").val());

  for(var i=0;i<propq;i++){

$("#water_form").append("<label class='title_rad_prop'>Propeller "+
(i+1)+":</label><select class='select_dir' id='direction"+(i+1)+"'><optgroup><option>Clockwise</option><option>Anticlockwise</option></optgroup></select>");

$("#water_form").append("<p class='fin_title'>Fin number: </p><input type='text' id='fin_num"+(i+1)+"'>");

$("#water_start_bt").fadeIn("slow");

  }

//$("#water_form").append("</br><button class='btn btn-default' id='water_start_bt'><i class='glyphicon glyphicon-star'></i> Start</button>");

setTimeout(function () {

  $("#quant_prop_bt").fadeOut("slow");
  $("#title_input_prop").fadeOut("slow");
  $("#prop_quant").fadeOut("slow");

}, 300);

});

$("#air_start").click(function(){

var speed = $("#air_speed").val();

var air = new Vehicle("air",parseInt(speed));

getAirVelocityData();

});

$("#turbo_button").click(function(){

    $(this).text("ON");

    $(this).css("border","5px solid red");

});


function getlndVelocityData(){

  $("#Init_veloc_lnd").fadeIn("slow");

  setTimeout(function () {

  $("#Init_veloc_lnd").fadeOut("slow");

  }, 3000);

  setTimeout(function () {
      $("#land_ac").fadeIn("slow");
  }, 6000);

 setTimeout(function () {

  $("#land_ac").fadeOut("slow");
}, 9000);

 setTimeout(function () {
  $("#land_fV").fadeIn("slow");
}, 12000);

}

function getwtVelocityData(){

  $("#Init_veloc_wt").fadeIn("slow");

  setTimeout(function () {

  $("#Init_veloc_wt").fadeOut("slow");

  }, 3000);

  setTimeout(function () {
      $("#water_ac").fadeIn("slow");
  }, 6000);

 setTimeout(function () {

  $("#water_ac").fadeOut("slow");
}, 9000);

 setTimeout(function () {
  $("#water_fV").fadeIn("slow");
}, 12000);

}

function getAirVelocityData(){

  $("#air_init_speed").fadeIn("slow");

  setTimeout(function () {

  $("#air_init_speed").fadeOut("slow");

  }, 3000);

  setTimeout(function () {
      $("#air_ac_speed").fadeIn("slow");
  }, 6000);

 setTimeout(function () {

  $("#air_ac_speed").fadeOut("slow");
}, 9000);

 setTimeout(function () {
  $("#air_final_speed").fadeIn("slow");
}, 12000);

}

//var vehicle = new Vehicle("amphibious",120);
