var elemTableDate = document.querySelector("#table-date");
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

