// Sets points to the table header to set the date.
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

init();

// Set the date in the table header
// var displayHeaderDate = function displayHead() {
//     var arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var arrDayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     var arrToday = String(now).split(" ", 5);
//     var month;
//     var dayOfWeek;
//     console.log(arrToday);
//     // Use for statement to interate through f the format of the date MMM DD YYYY
//     for (var i = 0; i < arrMonth.length; i++) {
//         if (arrMonth[i].includes(arrToday[1])) {
//             month = arrMonth[i];
//         }
//     }

//     for (var i = 0; i < arrDayOfWeek.length; i++) {
//         if (arrDayOfWeek[i].includes(arrToday[0])) {
//             dayOfWeek = arrDayOfWeek[i];
//             console.log("this is the day of the week: " + dayOfWeek);
//         }
//     }

//     var today = dayOfWeek + " " + month + " " + arrToday[2] + ", " + arrToday[3];
// elemTableDate.innerHTML = today;

$(document).ready(function () {
    // Display the today's in the header
    $("#table-date").text(moment().format("dddd, MMMM Do YYYY"));

    // Listens for a chonge on the INPUT tags and logs it to LocalStorage
    $("input").on("change", function(event){
        event.preventDefault();
        var plannerInput = $(this).val();
        var time = $(this).attr("id");

        localStorage.setItem(time, plannerInput);
    });

    // // Set the row colors for Past, Present, and Future
    // // get the current time and iterate through the table rows time

    // // Set the Table Row Array which will be used to iterate through the table ids,
    // // and compare the table id to current time to set the color of the row. 
    // var trArr = [];

    // // Grabbing all the table rows in the table body which we will use to pull their id
    // $("tbody tr").each(function() {
    //     //Putting the table row ID into a string
    //     var str = this.id;
    //     // Use *1 to convert to a string because parseInt uses only whole numbers
    //     // Need the string to be a number to compare to the hour.
    //     var num = str*1;
    //     trArr.push(num);
    // });

    // // get the hour and minutes
    // var time = (moment().format("HHmm"));
    
    // for (var i = 0; i < trArr.length; i++) {
    //     console.log(trArr[i] + "  " + time);
    //     console.log(trArr[i]+29);
    //     if (trArr[i] < time){
    //         var trEl = "#"+trArr[i];
    //         $(trEl).attr("class", "past");
    //     } else if ((trArr[i] <= time) && ((trArr[i]+29)>time)) {
    //         var trEl = "#"+trArr[i];
    //         $(trEl).attr("class", "present"); 
    //     } else {
    //         var trEl = "#"+trArr[i];
    //         $(trEl).attr("class", "future"); 
    //     }
    // }
});

