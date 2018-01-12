$(document).ready(function(){
    $("h2").mouseenter(function(){
        $(this).css("background-color", "lightgray")
    });
    
        $("h2").mouseleave(function(){
        $(this).css("background-color", "white")
    });
    
    $("#again").mouseenter(function(){
        $(this).css("background-color", "darkgray")
    });
    
    $("#again").mouseleave(function(){
        $(this).css("background-color", "")
    });
});