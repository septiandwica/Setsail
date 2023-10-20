function imgSlide(imgSrc){
    document.querySelector(".tococo").src = imgSrc

}

function changeColors(color){
    const shape = document.querySelector(".shape");
    const button = document.querySelector(".learn-more");
    const pepsi = document.querySelector("h2.product-header span");
    shape.style.backgroundColor = color;
    button.style.backgroundColor = color;
    pepsi.style.color = color;
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        nav
            .classList
            .add("drop-shadow");
    } else {
        nav
            .classList
            .remove("drop-shadow");
    }
});

document.onkeydown = function (e){
    if (event) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
        return false;
    }
    if (e.ctrlKey && e.keyCode == "I".charCodeAt(0)){
        return false;
    }
  }