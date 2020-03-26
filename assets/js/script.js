var elemTableDate = document.querySelector("#table-date");
var planner = [];

var now = new Date();
console.log(now);

// Set the date in the table header
var displayHeaderDate = function displayHead() {
    var arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var arrDayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var arrToday = String(now).split(" ", 4);
    var month;
    var dayOfWeek;
    // Use for statement to interate through f the format of the date MMM DD YYYY
    for (var i = 0; i < arrMonth.length; i++) {
        if (arrMonth[i].includes(arrToday[1])) {
            month = arrMonth[i];
            console.log("this is the month: " + month);
        }
    }

    for (var i = 0; i < arrDayOfWeek.length; i++) {
        if (arrDayOfWeek[i].includes(arrToday[0])) {
            dayOfWeek = arrDayOfWeek[i];
            console.log("this is the day of the week: " + dayOfWeek);
        }
    }

    var today = dayOfWeek + " " + month + " " + arrToday[2] + ", " + arrToday[3];
    elemTableDate.innerHTML = today;
}

displayHeaderDate();


$(document).ready(function () {

    $("#table-date").text(moment().format("dddd, MMMM Do YYYY"));

    $("input").on("change", function(event){
        event.preventDefault();
        var plannerInput = $(this).val();

        // if(this === "") {clearInput(plannerInput)}

        console.log(this)
        console.log(plannerInput + " = plannerInput")
        
    });


    function clearInput() {

        return;
    }



 // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    }

    // Here we will get the number of hours in the year
    let updateHour = function () {
        let date = moment().dayOfYear()
        let yearHours = date * 24
        let todayHours = moment().hour();
        let sumHours = yearHours + todayHours
        $("#hours").text(sumHours)
    }

    // Here we will get the number of minutes in the week
    let updateMinutes = function () {
        let date = moment().weekday();
        let weekMinutes = (date * 24 * 60) + (moment().minute());
        $("#minutes").text(weekMinutes);
    }

    // Here we will get the number of seconds in the day
    let updateSeconds = function () {
        let todayHours = moment().hour();
        let todaySeconds = todayHours * 60 * 60;
        let thisSecond = moment().second();
        let sumSeconds = thisSecond + todaySeconds;
        $("#seconds").text(sumSeconds);
    }

    let countdown = function () {

        // Friday
        let friday = moment().day("fr")._d

        // convert this into day of the year
        let fridayDate = moment(friday).dayOfYear();

        // This will get the milliseconds of Friday
        let fridayMils = fridayDate * 24 * 60 * 60 * 1000
        // Turn into seconds

        // Today
        // Turn into milliseconds

        let date = moment().dayOfYear()
        let yearMils = date * 24 * 60 * 60 * 1000
        let todayMils = moment().hour() * 60 * 60 * 1000;
        let thisMilsSecond = moment().second() * 1000;
        let thisMils = moment().millisecond();

        // This value should be increasing over time
        let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;

        let ms = fridayMils - sumMils;
        $("#countdown").text(ms)
    }

    // To initally set the times, we will call the functions
    updateTime();
    updateHour();
    updateMinutes();
    updateSeconds();
    countdown();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
    setInterval(updateHour, 1000);
    setInterval(updateMinutes, 1000);
    setInterval(updateSeconds, 1000);
    setInterval(countdown, 1);

})


