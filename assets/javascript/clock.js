function time() {
    let minute = new Date().getMinutes();
    document.getElementById("minute").innerHTML = minute;
    let hour = new Date().getHours();
    document.getElementById("hour").innerHTML = hour;
    if (hour < 10) {
        let newtime = "0" + hour;
        document.getElementById("hour").innerHTML = newtime;
    }
    if (minute < 10) {
        let newtime = "0" + minute;
        document.getElementById("minute").innerHTML = newtime;
    }
}
time();
setInterval (time , 1000);
let day = new Date().getDay();
let output;
switch (day) {
    case 0: output = "Sunday";
    document.getElementById("day").innerHTML = output;
    break;
    case 1: output = "Monday";
    document.getElementById("day").innerHTML = output;
    break;
    case 2: output = "Tuesday";
    document.getElementById("day").innerHTML = output;
    break;
    case 3: output = "Wednesday";
    document.getElementById("day").innerHTML = output;
    break;
    case 4: output = "Thursday";
    document.getElementById("day").innerHTML = output;
    break;
    case 5: output = "Friday";
    document.getElementById("day").innerHTML = output;
    break;
    case 6: output = "Saturday";
    document.getElementById("day").innerHTML = output;
    break;
    default: output = "Error 404";
    document.getElementById("day").innerHTML = output;
    break;
}