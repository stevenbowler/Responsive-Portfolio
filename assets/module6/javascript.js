// button 1 Grow
document.getElementById("button1").addEventListener("click", function () {

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

});
// button 2 Blue
document.getElementById("button2").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "blue";

});
// button 3 Fade
document.getElementById("button3").addEventListener("click", function () {

    document.getElementById("box").style.opacity = "0.5";

});
// button 4 Reset id="box" style="height:150px; width:150px; background-color:orange; margin:25px"
document.getElementById("button4").addEventListener("click", function () {

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
});
