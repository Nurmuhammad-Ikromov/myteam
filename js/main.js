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