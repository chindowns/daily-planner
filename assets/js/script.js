var elemTableDate = document.querySelector("#table-date");

var now = new Date();

// var init = function
function init() {
    // Populate the calendar with stored data from previous session between 8AM and 5PM (1700)
    for (i = 8; i < 18; i++) {
        var time = i + "00";
            // console.log("LocalStorage Time is: " + time);
        var timeData = localStorage.getItem(time);
        if (timeData !== null) {
            // console.log("LocalStorage Value for time: " + timeData);
            document.getElementById(time).value = timeData;
        }
        var time = i + "30";
            // console.log("LocalStorage Time is: " + time);
        var timeData = localStorage.getItem(time);
        if (timeData !== null) {
            // console.log("LocalStorage Value for time: " + timeData);
            document.getElementById(time).value = timeData;
        }
    }
}

// Set the date in the table header
var displayHeaderDate = function displayHead() {
    var arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var arrDayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var arrToday = String(now).split(" ", 5);
    var month;
    var dayOfWeek;
    console.log(arrToday);
    // Use for statement to interate through f the format of the date MMM DD YYYY
    for (var i = 0; i < arrMonth.length; i++) {
        if (arrMonth[i].includes(arrToday[1])) {
            month = arrMonth[i];
        }
    }

    for (var i = 0; i < arrDayOfWeek.length; i++) {
        if (arrDayOfWeek[i].includes(arrToday[0])) {
            dayOfWeek = arrDayOfWeek[i];
            console.log("this is the day of the week: " + dayOfWeek);
        }
    }

    var today = dayOfWeek + " " + month + " " + arrToday[2] + ", " + arrToday[3];
    // elemTableDate.innerHTML = today;
}

displayHeaderDate();
init();


$(document).ready(function () {
    // Display the today's in the header
    $("#table-date").text(moment().format("dddd, MMMM Do YYYY"));

    $("input").on("change", function(event){
        event.preventDefault();
        var plannerInput = $(this).val();
        var time = $(this).attr("id");

        localStorage.setItem(time, plannerInput);

    });

    // Set the row colors for Past, Present, and Future
    // get the current time and iterate through the table rows time
    var trArr = [];
    var str;
    var num;

    $("tbody tr").each(function() {
        str = this.id;
        // Use *1 to convert to a string because parseInt uses only whole numbers
        num = str*1;
        trArr.push(num);
    });
    var time = moment().format("H");

    for (var i = 0; i < trArr.length; i++) {
        if (trArr[i] < time){
            var trEl = "#"+trArr[i];
            $(trEl).addClass("past");
        }
    }


    // var trEl = $("tr");
    // var trArr = Array.from(trEl);
    // console.log(trArr);

    
    // var trIdArr;
    // for (var i = 1; i < trEl.length; i++) {
        
    //     trIdArr.push(trEl[i].id);

    //     console.log(trIdArr);



        // // console.log(realHour);
        // var attr = $(`.${i}`);
        // console.log(attr);
        // // var hourClass = parseInt(attr[0].class);
        // if (realHour < time) {
        //     $(this).addClass("past");
        //     console.log("trArr is less than time" + realHour);
        // }
    


});
