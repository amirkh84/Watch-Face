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
function theme() {
    document.getElementById("circle").style.backgroundColor = "#DA0037";
    document.getElementById("hour").style.color = "black";
    let rem = document.getElementById("hour");
    rem.classList.remove("lightgreen-number")
}
function theme1() {
    document.getElementById("circle").style.backgroundColor = "#7300b6";
    document.getElementById("hour").style.color = "black";
    let rem = document.getElementById("hour");
    rem.classList.remove("lightgreen-number")
}
function theme2() {
    document.getElementById("circle").style.backgroundColor = "#0016da";
    document.getElementById("hour").style.color = "#eeff00";
    let rem = document.getElementById("hour");
    rem.classList.remove("lightgreen-number")
}
function theme3() {
    document.getElementById("circle").style.backgroundColor = "#00da62";
    document.getElementById("hour").style.color = "black";
    let lightgreen = document.getElementById("hour");
    lightgreen.classList.add("lightgreen-number")
}
function dark() {
    document.getElementById("circle").style.backgroundColor = "#00da62";
    let body = document.body;
    body.style.backgroundColor = "#F2EFEA";
}
function dark2() {
    let clk = document.getElementById("clk-body");
    clk.classList.toggle("light-mode");
    let mnt = document.getElementById("minute");
    mnt.classList.toggle("light-text");
    let body = document.body;
    body.classList.toggle("light-body");
    let btn = document.getElementById("color-btn5");
    btn.classList.toggle("btn-light");
    let hh = document.getElementById("hour");
    hh.classList.toggle("light-hour");
}