var elButton = document.querySelector(".burger-button");
var elMenu = document.querySelector(".navbar");
var elButtonX = document.querySelector(".burger-button-x");

elButton.addEventListener("click", function(){
    elMenu.classList.add("navbar--open");
    elButtonX.classList.add("burger-button-x--open");
});

elButtonX.addEventListener("click", function(){
    elMenu.classList.remove("navbar--open");
    elButtonX.classList.remove("burger-button-x--open");
})

var elBtn = document.querySelector(".directors__button");
var elContent = document.querySelector(".directors__item-hidden");
var elBox = document.querySelector(".directors__item-box");

elBtn.addEventListener("click", function(){
    elContent.classList.toggle("directors__item--open");
    elBox.classList.toggle(".directors__item-box--open")
})