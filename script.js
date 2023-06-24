$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").show();
        $(".stream2").show('slow');
        $(".stream3").show('fast');
        $(".stream1").show(1000);
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").hide();
        $(".stream2").hide('slow');
        $(".stream3").hide('fast');
        $(".stream2").hude(1000);
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").slideDown();
        $(".stream2").slideDown(1000);
        $(".stream3").slideUp(1000);
        $(".stream3").slideToggle(1000);
   });
   $("#stream3_btn").on("click", function() {
    $(".stream1").fadeIn();
    $(".stream2").fadeOut(1000);
    $(".stream3").fadeTo(1000, 0.5); //to make pransparent 0.5 - opacity 0 - hidden, 1 - shown
    $(".stream3").slideToggle('1000');
});
}); 

/*
$("p").click(function() {
    $("p").css("color", "red");
});

$("h2").hover(function() {
    $("h2").css("background", "lightblue");
});

$(".card-panel").mouseenter(function() {
    $("body").css("background-color", "black");
});

$(".card-panel").mouseleave(function() {
    $("body").css("background-color", "#e1e2e2");
});

*/

/* Chaining events
$("button").mouseleave(function() {
    $("button").removeClass("make-border").addClass("make-red");
});


$('p').click(function(){
    $(this).text("Changed only the text for this paragraph");
});

$('.card').mouseenter(function(){
    $(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
});


$('.module-nav').on("click", function(){
    let allModulesCardsSelector = '.card';
    let thisModuleCardsSelector = "." + this.id + "-card";
    $(allModulesCardsSelector).removeClass("card-highlight");
    $(thisModuleCardsSelector).addClass("card-highlight");
});

//To select only certain element within an element
$('p').click(function(){
    $(this).children("a").css("background-color", "yellow");
});
*/