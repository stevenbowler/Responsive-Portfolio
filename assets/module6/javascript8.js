// button 1 Grow
function grow() {
    blackBox();
    adjustBoxSize(50);  //add 50px to box dimensions
    adjustFontSize(1.2);//increase font-size by factor of 1.2

};


// button 2 Shrink
function shrink() {
    blackBox();
    adjustBoxSize(-50);
    adjustFontSize(0.8);

};

/*
<style>
div {
    background-color: rgb(0, 191, 255);
    color: rgb(255, 255, 255);
}
</style>

background: linear-gradient(to top right, #33ccff 0%, #ff99cc 100%);
*/

// button 3 Blue
function blue() {
    document.getElementById("box").style.backgroundColor = "rgb(0, 0, 255)";
    document.getElementById("box").style.background = "linear-gradient(to top right, #ff9900 0%, #0000ff 100%)";

};


// button 4a Fade
function slowFade() {
    if (!document.getElementById("box").style.opacity) document.getElementById("box").style.opacity = 1;
    adjustOpacity(0.9);
};


// button 4b darken
function darken() {
    if (!document.getElementById("box").style.opacity) document.getElementById("box").style.opacity = 1;
    adjustOpacity(1.1);

};


// button 5 Reset id="box" style="height:150px; width:150px; background-color:orange; margin:25px"
function reset() {
    sessionVariableReset();
    resetBoxes();
};


// button 6 Start black box move
function blackBox() {
    if (sessionStorage.getItem("movingUp") === null) sessionVariableReset();
    moveBlackBoxUpDown(50);
    moveBlackBoxLeftRight(40);
};


function moveBlackBoxUpDown(factor) {
    newTop = document.getElementById("blackbox").style.marginTop;
    newTopInt = parseInt(newTop.slice(newTop, -2, 2)) + parseInt(sessionStorage.getItem("moveDown")); // calculate new top margin by adding 25
    // calculate if black box beyond bottom of big box, if yes switch directions
    boxHeight = document.getElementById("box").style.height;            // get box height in pixels
    boxHeightInt = parseInt(boxHeight.slice(boxHeight, -2, 2));         // convert to integer
    if (newTopInt >= boxHeightInt - (factor + 50)) {
        sessionStorage.setItem("moveDown", "-" + (factor + 50));    //change direction from move down to move up
        newTopInt = newTopInt - (factor + 50);
    }
    if (newTopInt < 0) {
        newTopInt = 0;
        sessionStorage.setItem("moveDown", factor);                     //change direction from move up to move down
        document.getElementById("blackbox").style.marginTop = "0px";
    }
    newTopStr = newTopInt + "px";
    document.getElementById("blackbox").style.marginTop = newTopStr;    //set new Top margin
    sessionStorage.setItem("marginTop", newTopInt);                     // store new Top Margin
};


function moveBlackBoxLeftRight(factor) {
    newLeft = document.getElementById("blackbox").style.marginLeft;
    newLeftInt = parseInt(newLeft.slice(newLeft, -2, 2)) + parseInt(sessionStorage.getItem("moveRight")); // calculate new top margin by adding 25
    // calculate if black box beyond right of big box, if yes switch directions
    boxWidth = document.getElementById("box").style.width;
    boxWidthInt = parseInt(boxWidth.slice(boxWidth, -2, 2));         // convert to integer
    if (newLeftInt >= boxWidthInt - (factor + 50)) {
        sessionStorage.setItem("moveRight", "-" + (factor + 50));    //change direction from move right to move left
        newLeftInt = newLeftInt - (factor + 50);
    }
    if (newLeftInt <= 0) {
        newLeftInt = 0;
        sessionStorage.setItem("moveRight", factor);           //change direction from move right to move left
        document.getElementById("blackbox").style.marginLeft = "0px";
    }
    newLeftStr = newLeftInt + "px";
    document.getElementById("blackbox").style.marginLeft = newLeftStr;    //set new Left margin
    sessionStorage.setItem("marginLeft", newLeftInt);                     // store new Left Margin

};


// session variable reset
function sessionVariableReset() {
    sessionStorage.setItem("movingUp", false);
    sessionStorage.setItem("movingRight", false);
    sessionStorage.setItem("marginTop", 0);
    sessionStorage.setItem("marginLeft", 0);
    sessionStorage.setItem("moveDown", "25");
    sessionStorage.setItem("moveRight", "40");
    sessionStorage.setItem("fontAdjustFactor", "50%");
};


//reset boxes back to original position, color and opacity
function resetBoxes() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.background = "linear-gradient(to top right, #ff9900 0%, #ff9900 0%)";
    document.getElementById("box").style.opacity = "1";
    // reset Black box to top row
    document.getElementById("blackbox").style.marginTop = "0px";
    document.getElementById("blackbox").style.marginLeft = "0px";
    // reset text to fit inside box, as original
    document.getElementById("box").style.fontSize = "50%";
    sessionStorage.setItem("fontAdjustFactor", document.getElementById("box").style.fontSize);
};


function adjustBoxSize(factor) {
    newsize = document.getElementById("box").style.height;
    newstr = (parseInt(newsize.slice(newsize, -2, 2)) + factor) + "px";
    document.getElementById("box").style.height = newstr;
    document.getElementById("box").style.width = newstr;
};


function adjustFontSize(factor) {
    document.getElementById("box").style.fontSize = (parseFloat(sessionStorage.getItem("fontAdjustFactor")) * factor).toString() + "%";
    sessionStorage.setItem("fontAdjustFactor", document.getElementById("box").style.fontSize);
};


function adjustOpacity(factor) {
    opacityStr = (parseFloat(document.getElementById("box").style.opacity) * factor).toString();
    document.getElementById("box").style.opacity = opacityStr;
};
