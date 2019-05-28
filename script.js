$(document).ready(function(){

  console.log("Javascript 1 connected");

  // hides button on click and animates green square
  $("button").click(function(){
    $(this).hide();
    $("#myAnimationgreen").animate({top: "350px", left: "350px"}, 5000, "swing");
  });
  $("#myAnimationgreen").click(function(){
    $("#myAnimationred").css("z-index", "1");
    $("#myAnimationred").animate({top: "350px", left: "350px"}, 3000, "swing");
  });

  $("#myAnimationred").click(function(){
    $("#myAnimationbrown").animate({top: "350px", left: "350px"}, 3000, "swing");
  });



  $("#myAnimationred").click(function() {

    // Returns width of browser viewport
    var windowWidth = $( window ).width();
    $("#myContainer").animate({"margin-left": windowWidth});
    $("#myContainer").delay(2005).fadeOut();
    $("#explanation").animate({"left": "20px"});
    $("#bordered1").delay(5000);
    $("#bordered1").animate({top: "340px", left: "40px"});
    $("#bordered2").delay(6000);
    $("#bordered2").animate({left: "220px"});
    $("#explanation").delay(4000);
    $("#explanation").animate({top: "440px", left: "100px"});

  });

    $("#bordered2").click(function() {
//animates the text boxes
    var windowWidth2 = $(window).width();
    $("#explanation").animate({top: "640px", left: "50px"});
    $("#bordered1").delay(5000);
    $("#bordered1").animate({top: "700px", left: "40px"});
    $("#bordered2").animate({top:"20px", bottom: "80px"});
    $("#pentagon").animate({top: "500px", left: "30px"});
    $("#shapeDetail").animate({top:"20px", left: "60px"});

  });
});
  $("#imageWork").click(function(){

  var imageMove = $(window).width();
  $("imageWork").animate({top: "50px", left: "200px"});
  $("#shapeAnimation").animate({top:"2000px", left: "60px"});
  $("shapeAnimation").animate({top:"50px", left: "200px"});
});
