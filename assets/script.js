$(document).ready(function(){
    let displayTimeEl = $('#currentDay');
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val();
        localStorage.setItem(time, value);
    });

$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
$("#hour-13 .description").val(localStorage.getItem('hour-13'));

function timeShow() {
    var currentTime = moment().hours()
    $(".time-block").each(function() {
        var specificHour = parseInt($(this).attr('id').split("-")[1]);
        if (specificHour < currentTime) {
            $(this).addClass("past");
        } else if (specificHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        
    })
}
timeShow();

function displayTime() {
    var timeNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    displayTimeEl.text(timeNow);
}

setInterval(displayTime, 1000);

});
