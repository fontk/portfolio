$(document).ready(function() {

    if(document.getElementById("cabecera"))particlesJS.load('cabecera');
    
    $("#contacto").click(function(){
        $("#myModal").modal('show');
    });

});