$(document).ready(function(){
    let displayTimeEl = $('#currentDay'); // variable for function below where time is displayed

    // code block for making the save button work to actually save the value field into local storage.
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val();
        localStorage.setItem(time, value);
    });

    // adding in the value input for each hour to local storage.
$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
$("#hour-13 .description").val(localStorage.getItem('hour-13'));
$("#hour-14 .description").val(localStorage.getItem('hour-14'));
$("#hour-15 .description").val(localStorage.getItem('hour-15'));
$("#hour-16 .description").val(localStorage.getItem('hour-16'));
$("#hour-17 .description").val(localStorage.getItem('hour-17'));

//function for color coding each of the value boxes for the day. 
function timeShow() {
    var currentTime = moment().hours()
    $(".time-block").each(function() {
        var specificHour = parseInt($(this).attr('id').split("-")[1]); //splits the ID so that we only have the integer.
        if (specificHour < currentTime) { // create If statement to check whether current time is corresponding with the time shown on the key value so that the program can determine is certain hour has passed in the day.
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

// function to show the live time on the web page.
function displayTime() {
    var timeNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    displayTimeEl.text(timeNow);
}

setInterval(displayTime, 1000);

});
