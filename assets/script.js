$(document).ready(function () {
    //Current time
    var currentTime = document.getElementById("currentDay");
    function clock() {
        currentTime.textContent = moment().format("dddd MMMM Do, YYYY, h:mm:ss");
    };
    setInterval(clock,1000);

    //color switch
    var hour = moment().format("ha");
    var hours = document.getElementsByClassName("time2");
    for (var i = 0; i < hours.length; i++) {
        if (String(hours[i].id) == String(hour)) {
            hours[i].children[0].setAttribute("style", "background-color: #ff6961;")
        } else if (String(hours[i].id) > String(hour)) {
            if (String(hours[i].id) != "9am")  {
                hours[i].children[0].setAttribute("style", "background-color: lightgreen;")
            };
        } else {
            hours[i].children[0].setAttribute("style", "background-color: lightgrey");
        };
    };

    //set local storage
    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.time2').children('.input').val();
        var time = $(this).siblings('.time2').attr('id');

        localStorage.setItem(time, value);
    });

    $('#9am .input').val(localStorage.getItem('9am'));
    $('#10am .input').val(localStorage.getItem('10am'));
    $('#11am .input').val(localStorage.getItem('11am'));
    $('#12pm .input').val(localStorage.getItem('12pm'));
    $('#1pm .input').val(localStorage.getItem('1pm'));
    $('#2pm .input').val(localStorage.getItem('2pm'));
    $('#3pm .input').val(localStorage.getItem('3pm'));
    $('#4pm .input').val(localStorage.getItem('4pm'));
    $('#5pm .input').val(localStorage.getItem('5pm'));
    $('#6pm .input').val(localStorage.getItem('6pm'));
    $('#7pm .input').val(localStorage.getItem('7pm'));
    $('#8pm .input').val(localStorage.getItem('8pm'));
});