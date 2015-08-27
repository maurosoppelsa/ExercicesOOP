$(document).ready(function(){

  $("#land_select").hover(function(){

    $("#land_title").text("Land vehicle");
  });

  $("#land_select").mouseleave(function(){

    $("#land_title").text("");
  });

  $("#water_select").hover(function(){

    $("#water_title").text("Water vehicle");
  });

  $("#water_select").mouseleave(function(){

    $("#water_title").text("");
  });

  $("#air_select").hover(function(){

    $("#air_title").text("Air vehicle");
  });

  $("#air_select").mouseleave(function(){

    $("#air_title").text("");
  });

  $("#amphi_select").hover(function(){

    $("#amphi_title").text("Amphi vehicle");
  });

  $("#amphi_select").mouseleave(function(){

    $("#amphi_title").text("");
  });

  $("#land_select").click(function(){

    $("#land_title").remove();
    $("#water_select").fadeOut();
    $("#air_select").fadeOut();
    $("#amphi_select").fadeOut();

    setTimeout(function () {

        $("#land_form").slideDown("slow");

    }, 1000);


  });

  $("#water_select").click(function(){

    setTimeout(function () {

      $("#water_form").slideDown("slow");

    }, 1000);

  });

  $("#water_select").click(function(){

    $("#water_title").remove();

    $("#land_select").fadeOut();
    $("#air_select").fadeOut();
    $("#amphi_select").fadeOut();
  });

  $("#air_select").click(function(){

    $("#air_title").remove();

    $("#water_select").fadeOut();
    $("#land_select").fadeOut();
    $("#amphi_select").fadeOut();
  });

  $("#amphi_select").click(function(){

    $("#amphi_title").remove();

    $("#water_select").fadeOut();
    $("#air_select").fadeOut();
    $("#land_select").fadeOut();
  });



});
