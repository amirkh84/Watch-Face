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
function theme4() {
    document.getElementById("circle").style.backgroundColor = "#f48c06";
    document.getElementById("hour").style.color = "black";
    let lightgreen2 = document.getElementById("hour");
    lightgreen2.classList.remove("lightgreen-number")
}
function dark() {
    document.getElementById("circle").style.backgroundColor = "#00da62";
    let body = document.body;
    body.style.backgroundColor = "#F2EFEA";
}
function dark2() {
    let clk = document.getElementById("clk-body");
    clk.classList.toggle("light-mode");
    let yyear = document.getElementById("year-body");
    yyear.classList.toggle("light-mode");
    let date2 = document.getElementById("date-body2");
    date2.classList.toggle("light-mode");
    let mnt = document.getElementById("minute");
    mnt.classList.toggle("light-text");
    let miladi = document.getElementById("year-miladi");
    miladi.classList.toggle("light-hour");
    let shamsi = document.getElementById("year-shamsi");
    shamsi.classList.toggle("light-hour");
    let body = document.body;
    body.classList.toggle("light-body");
    let btn = document.getElementById("color-btn5");
    btn.classList.toggle("btn-light");
    let hh = document.getElementById("hour");
    hh.classList.toggle("light-hour");
    let dayirr = document.getElementById("day-iran");
    dayirr.classList.toggle("light-hour");
    let ico = document.getElementById("icon");
    ico.classList.toggle("icon-light");
}
let options = {month: 'numeric'};
month = new Date().toLocaleDateString('fa-IR', options).replace(/([??-??])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
switch (month) {
    case "1": var dayy = "Farvardin";
    break;
    case "2": var dayy = "Ordibehesht";
    break;
    case "3": var dayy = "Khordad";
    break;
    case "4": var dayy = "Tir";
    break;
    case "5": var dayy = "Mordad";
    break;
    case "6": var dayy = "Shahrivar";
    break;
    case "7": var dayy = "Mehr";
    break;
    case "8": var dayy = "Aban";
    break;
    case "9": var dayy = "Azar";
    break;
    case "10": var dayy = "Dey";
    break;
    case "11": var dayy = "Bahman";
    break;
    case "12": var dayy = "Esfand";
    break;
    default: var dayy = "Error 404";
    break;
}
document.getElementById("month").innerHTML = dayy;
let dds = {day: 'numeric'};
function iransdate() {
    let imday = new Date().toLocaleDateString('fa-IR', dds).replace(/([??-??])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
    document.getElementById("day-iran").innerHTML = imday;
}
iransdate();
setInterval (iransdate , 1000);
function themed() {
    document.getElementById("circle-date").style.backgroundColor = "#DA0037";
    document.getElementById("day-iran").style.color = "black";
    let rem = document.getElementById("day-iran");
    rem.classList.remove("lightgreen-number")
}
function themed1() {
    document.getElementById("circle-date").style.backgroundColor = "#7300b6";
    document.getElementById("day-iran").style.color = "black";
    let rem = document.getElementById("day-iran");
    rem.classList.remove("lightgreen-number")
}
function themed2() {
    document.getElementById("circle-date").style.backgroundColor = "#0016da";
    document.getElementById("day-iran").style.color = "#eeff00";
    let rem = document.getElementById("day-iran");
    rem.classList.remove("lightgreen-number")
}
function themed3() {
    document.getElementById("circle-date").style.backgroundColor = "#00da62";
    document.getElementById("day-iran").style.color = "black";
    let lightgreen = document.getElementById("day-iran");
    lightgreen.classList.add("lightgreen-number")
}
function themed4() {
    document.getElementById("circle-date").style.backgroundColor = "#f48c06";
    document.getElementById("day-iran").style.color = "black";
    let lightgreen2 = document.getElementById("day-iran");
    lightgreen2.classList.remove("lightgreen-number")
}
function dark() {
    document.getElementById("circle-date").style.backgroundColor = "#00da62";
    let body = document.body;
    body.style.backgroundColor = "#F2EFEA";
}
function year() {
    let year = new Date().getFullYear();
    document.getElementById("year-miladi").innerHTML = year;
    let dds = {year: 'numeric'};
    let iryear = new Date().toLocaleDateString('fa-IR', dds).replace(/([??-??])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
    document.getElementById("year-shamsi").innerHTML = iryear;
}
year();
function themey() {
    document.getElementById("circle-year").style.backgroundColor = "#DA0037";
    document.getElementById("year-miladi").style.color = "black";
    let rem = document.getElementById("year-miladi");
    rem.classList.remove("lightgreen-number")
}
function themey1() {
    document.getElementById("circle-year").style.backgroundColor = "#7300b6";
    document.getElementById("year-miladi").style.color = "black";
    let rem = document.getElementById("year-miladi");
    rem.classList.remove("lightgreen-number")
}
function themey2() {
    document.getElementById("circle-year").style.backgroundColor = "#0016da";
    document.getElementById("year-miladi").style.color = "#eeff00";
    let rem = document.getElementById("year-miladi");
    rem.classList.remove("lightgreen-number")
}
function themey3() {
    document.getElementById("circle-year").style.backgroundColor = "#00da62";
    document.getElementById("year-miladi").style.color = "black";
    let lightgreen = document.getElementById("year-miladi");
    lightgreen.classList.add("lightgreen-number")
}
function themey4() {
    document.getElementById("circle-year").style.backgroundColor = "#f48c06";
    document.getElementById("year-miladi").style.color = "black";
    let lightgreen2 = document.getElementById("year-miladi");
    lightgreen2.classList.remove("lightgreen-number")
}
function theme10() {
    document.getElementById("circle-year2").style.backgroundColor = "#DA0037";
    document.getElementById("year-shamsi").style.color = "black";
    let rem = document.getElementById("year-shamsi");
    rem.classList.remove("lightgreen-number")
}
function theme11() {
    document.getElementById("circle-year2").style.backgroundColor = "#7300b6";
    document.getElementById("year-shamsi").style.color = "black";
    let rem = document.getElementById("year-shamsi");
    rem.classList.remove("lightgreen-number")
}
function theme12() {
    document.getElementById("circle-year2").style.backgroundColor = "#0016da";
    document.getElementById("year-shamsi").style.color = "#eeff00";
    let rem = document.getElementById("year-shamsi");
    rem.classList.remove("lightgreen-number")
}
function theme13() {
    document.getElementById("circle-year2").style.backgroundColor = "#00da62";
    document.getElementById("year-shamsi").style.color = "black";
    let lightgreen = document.getElementById("year-shamsi");
    lightgreen.classList.add("lightgreen-number")
}
function theme14() {
    document.getElementById("circle-year2").style.backgroundColor = "#f48c06";
    document.getElementById("year-shamsi").style.color = "black";
    let lightgreen2 = document.getElementById("year-shamsi");
    lightgreen2.classList.remove("lightgreen-number")
}