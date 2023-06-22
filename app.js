$(document).ready(function(){
    $(".cal").click(function(){
        $("#display").val($("#display").val()+$(this).val());
    });

    $("#final").click(function(){
        $("#display").val(eval($("#display").val()));
    });
});