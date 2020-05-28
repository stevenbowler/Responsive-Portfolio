// require("dotenv").config();

var home = document.getElementById("home");
var contact = document.getElementById("contact");
// var sendEmail = require("../utilities/nodemailer");


const loadHome = () => {
    contact.setAttribute("style", "display: none;");
    home.setAttribute("style", "display: none;");
    home.setAttribute("style", "display: block;");
    // animateCSS("#home", "zoomOutRight", function () {
    //     animateCSS("#home", "zoomInRight");
    // });
}


const loadContact = () => {
    home.setAttribute("style", "display: none;");
    contact.setAttribute("style", "display: block;");
}

const animateCSS = (element, animationName, callback) => {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}


$("#searchButton").on("click", function () {
    var url = `https://github.com/search?q=user%3Astevenbowler+${$("#googlesearch").val()}`
    $(location).attr('href', url);
    $("#googlesearch").val("");
});


$("#sendContactMessage").on("click", function () {
    console.log(`name: ${$("#name").val()} email: ${$("#email").val()} contactMessage: ${$("#contactMessage").val()}`);
    // sendEmail(customerEmail);    

});


$("#loadContact").on("click", loadContact());
$("#loadHome").on("click", loadHome());