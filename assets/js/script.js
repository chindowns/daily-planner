// Sets the Table Header Date
$("#table-date").text(moment().format("dddd, MMMM Do YYYY"));

function setPlannerColors() {
    var trArr = [];

    // Grabbing all the table rows in the table body which we will use to pull their id
    $("tbody tr").each(function() {
        //Putting the table row ID into a string
        var str = this.id;
        // Use *1 to convert to a string because parseInt uses only whole numbers
        // Need the string to be a number to compare to the hour.
        var num = str*1;
        trArr.push(num);
    });

    // get the hour and minutes then make it a number
    var time = (moment().format("Hmm"));
    time = parseInt(time);

    // enumerate through the tr time array and compare it to current time
    for (var i = 0; i < trArr.length; i++) {
        var trEl = "#"+trArr[i];
        presentTime = time - 29;

        console.log("=========================")
        console.log("Time is a "+typeof(time) + " " + time);
        console.log("trArr is a " + typeof(trArr[i]) + " " + trArr[i]);
        console.log("presentTime " + typeof(presentTime) + " " + presentTime);

        if (trArr[i] < time) {
            $(trEl).addClass("past"); 
        
        if (trArr[i] > presentTime ) {
            $(trEl).addClass("present");
        } 
        
        } else if (trArr[i] > time) {
            $(trEl).addClass("future"); 
        }
    }
}

// var init = function
function init() {
    // Populate the calendar with stored data from previous session between 8AM and 5PM (1700)
    for (i = 8; i < 18; i++) {
        var time = i + "00m";
            // console.log("LocalStorage Time is: " + time);
        var timeData = localStorage.getItem(time);
        if (timeData !== null) {
            // console.log("LocalStorage Value for time: " + timeData);
            document.getElementById(time).value = timeData;
        }
        var time = i + "30m";
            // console.log("LocalStorage Time is: " + time);
        var timeData = localStorage.getItem(time);
        if (timeData !== null) {
            // console.log("LocalStorage Value for time: " + timeData);
            document.getElementById(time).value = timeData;
        }
    }
}

$(document).ready(function () {

    // Listens for a chonge on the INPUT tags and logs it to LocalStorage
    $("input").on("change", function(event){
        event.preventDefault();
        var plannerInput = $(this).val();
        var time = $(this).attr("id");

        localStorage.setItem(time, plannerInput);
    });

setPlannerColors();
init();
});

// Set the date in the table header
// var now = new Date();
// var elemTableDate = document.querySelector("#table-date");
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



