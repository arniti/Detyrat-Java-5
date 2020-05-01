function zoom(type) {
    type.style.height = "40px";
    type.style.width = "110px";
}
function normal(type) {
    type.style.height = "35px";
    type.style.width = "90px";
}
function addLastName() {
    document.getElementById("log-divi").style.display = "none";
    document.getElementById("log-divi-2").style.display = "flex";
    document.getElementById("log-divi-2").style.height = "400px";
}
function back() {
    document.getElementById("log-divi").style.display = "flex";
    document.getElementById("log-divi-2").style.display = "none";
}