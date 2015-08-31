$(document).ready(function(){

$("#lnd_icon").hide();
$("#wtr_icon").hide();
$("#air_icon").hide();
$("#amp_icon").hide();

$("#title").css("margin-left","-10px");

  $("#land_select").hover(function(){

    $("#lnd_img").css("opacity","0.6");
    $("#land_title").text("Land vehicle");

  });

  $("#land_select").mouseleave(function(){

    $("#lnd_img").css("opacity","1");
    $("#land_title").text("");

  });

  $("#water_select").hover(function(){

    $("#wtr_img").css("opacity","0.6");
    $("#water_title").text("Water vehicle");

  });

  $("#water_select").mouseleave(function(){

    $("#wtr_img").css("opacity","1");
    $("#water_title").text("");
  });

  $("#air_select").hover(function(){

    $("#air_img").css("opacity","0.6");
    $("#air_title").text("Air vehicle");
  });

  $("#air_select").mouseleave(function(){

    $("#air_img").css("opacity","1");
    $("#air_title").text("");
  });

  $("#amphi_select").hover(function(){

    $("#amp_img").css("opacity","0.6");
    $("#amphi_title").text("Amphibious vehicle");
  });

  $("#amphi_select").mouseleave(function(){

    $("#amp_img").css("opacity","1");
    $("#amphi_title").text("");
  });

  $("#land_select").click(function(){
    $("#box_return").slideDown(100);
    $("#title").css("margin-left","-310px");
    $("#land_title").remove();
    $("#water_select").fadeOut();
    $("#air_select").fadeOut();
    $("#amphi_select").fadeOut();

    setTimeout(function () {

        $("#land_form").slideDown("slow");

    }, 1000);


  });

  $("#water_select").click(function(){

$("#box_return").slideDown(100);
$("#title").css("margin-left","-310px");

    setTimeout(function () {

      $("#water_form").slideDown("slow");

    }, 1000);

  });

  $("#water_select").click(function(){

    $("#box_return").slideDown(100);
    $("#water_title").remove();
    $("#land_select").fadeOut();
    $("#air_select").fadeOut();
    $("#amphi_select").fadeOut();
  });

  $("#air_select").click(function(){

    $("#box_return").slideDown(100);
    $("#air_icon").remove();
    $("#title").css("margin-left","-310px");
    $("#air_title").remove();
    $("#water_select").fadeOut();
    $("#land_select").fadeOut();
    $("#amphi_select").fadeOut();
  });

  $("#amphi_select").click(function(){

    $("#box_return").slideDown(100);
    $("#title").css("margin-left","-310px");
    $("#amphi_title").remove();
    $("#water_select").fadeOut();
    $("#air_select").fadeOut();
    $("#land_select").fadeOut();
  });

$("#air_select").click(function(){

setTimeout(function () {

    $("#air_form").slideDown();

},1000);

});

$("#amphi_select").click(function(){

$("#box_return").slideDown(100);
$("#title").css("margin-left","-310px");
setTimeout(function () {

    $("#amphi_form").slideDown();

}, 1000);

});

});
