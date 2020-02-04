// this JQuery method activates the blackbox as an element to click on 
$(document).ready(function () {
    $("#blackbox").click(function () {
        blackBox();
    });
});


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
    resetBoxes();
};


// button 6 Start black box move
function blackBox() {
    moveBlackBoxUpDown(70);
    moveBlackBoxLeftRight(80);
};


function moveBlackBoxUpDown(factor) {
    newTop = document.getElementById("blackbox").style.marginTop;   //find top of black box
    newTopInt = parseInt(newTop.slice(newTop, -2, 2)) + factor;     //set new top of black box in integer format
    boxHeight = document.getElementById("box").style.width;         //find height of big orange box
    boxHeightInt = parseInt(boxHeight.slice(boxHeight, -2, 2));     //get height in integer
    if (newTopInt <= 50) {
        marginTxt = "0px";
    } else if (newTopInt >= boxHeightInt - 50) {
        marginTxt = "-=" + factor + "px";

    } else {
        marginTxt = "+=" + factor + "px";
    }
    $("#blackbox").animate({
        marginTop: marginTxt,
    });
    $("#blackbox").html("Click Me");
};


function moveBlackBoxLeftRight(factor) {
    newLeft = document.getElementById("blackbox").style.marginLeft;
    newLeftInt = parseInt(newLeft.slice(newLeft, -2, 2)) + factor;
    boxWidth = document.getElementById("box").style.width;
    boxWidthInt = parseInt(boxWidth.slice(boxWidth, -2, 2));         // convert to integer
    if (newLeftInt <= 50) {
        marginTxt = "0px";
    } else if (newLeftInt >= boxWidthInt - 50) {
        marginTxt = "-=" + factor + "px";

    } else {
        marginTxt = "+=" + factor + "px";
    }
    $("#blackbox").animate({
        marginLeft: marginTxt,
    });
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
};


function adjustBoxSize(factor) {
    newsize = document.getElementById("box").style.height;
    newstr = (parseInt(newsize.slice(newsize, -2, 2)) + factor) + "px";
    $("#box").animate({
        height: newstr,
        width: newstr
    });
};


function adjustFontSize(factor) {
    fontSize = document.getElementById("box").style.fontSize;
    fontSizeStr = parseFloat(parseInt(fontSize.slice(fontSize, -1, 1)) * factor).toString() + "%";
    document.getElementById("box").style.fontSize = fontSizeStr;
};


function adjustOpacity(factor) {
    opacityStr = (parseFloat(document.getElementById("box").style.opacity) * factor).toString();
    document.getElementById("box").style.opacity = opacityStr;
};
