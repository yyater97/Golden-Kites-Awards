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

    function showConditionPopup(){
        $('#condition-popup').bPopup({
            modalClose: true,
            closeClass: 'close-condition-popup',
            opacity: 0.6,
            positionStyle: 'fixed',
            onOpen: function(){
                $('body').css('overflow','hidden');
            },
            onClose: function(){
                $('body').css('overflow','auto');
            }
        });
    }

    $('#condition').on('click',function(){
        showConditionPopup();
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
