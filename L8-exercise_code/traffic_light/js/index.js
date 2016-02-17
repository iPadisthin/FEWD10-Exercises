//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function(){
   //click handler for #stopButton to change #stopLight to red
    $('#stopButton').click(function(){
        //alert('stop');
        //console.log('stop');
        $('.bulb').css('background-color','black');
        $('#stopLight').css('background-color','red');
    });
    $('#slowButton').click(function(){
        $('.bulb').css('background-color','black');
        $('#slowLight').css('background-color','yellow');
    });
    $('#goButton').click(function(){
        $('.bulb').css('background-color','black');
        $('#goLight').css('background-color','green');
    });
});