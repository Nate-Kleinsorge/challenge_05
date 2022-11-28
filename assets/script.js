//Current time
var currentTime = document.getElementById("currentDay");
function clock() {
    currentTime.textContent = moment().format("dddd MMMM Do, YYYY, h:mm:ss");
};
setInterval(clock,1000);

//color switch
var hour = moment().format("ha");
var hours = document.getElementsByClassName("time");
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

