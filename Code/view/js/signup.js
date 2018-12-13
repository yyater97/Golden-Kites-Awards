$(document).ready(function () {

    $('.choose-img').on('change', function(ev){
        var f = ev.target.files[0];
        var fr = new FileReader();
    
        fr.onload = function(ev2){
            console.dir(ev2);
            $('#frame').attr('src',ev2.target.result);
        }
    
        fr.readAsDataURL(f);
    });

    $('#condition').on('click',function(){
        $("#condition-popup").bPopup();
    });
});

$(function () {
    $('#datetimepicker1').datepicker();
 });

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

var conditionPopup= $('#condition-popup').bPopup({
    modalClose: true,
    CloseClass: 'bClose',
    opacity: 0.6,
    positionStyle: 'fixed' //'fixed' or 'absolute'
});

