var home = document.getElementById("home");
var contact = document.getElementById("contact");

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
