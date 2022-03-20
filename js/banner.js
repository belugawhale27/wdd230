let now = new Date();
/*let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";*/
let day = now.getDay();
    
if (day == 1 || day == 2) {
    document.querySelector("#banner").style.display= "block";
} else {
    document.querySelector("#banner").style.display = "none";
}


