var rightCoinContainer = document.querySelector(".main__coin-container-right");
var leftArrow = document.querySelector(".slide-arrow-left");
var leftCoinContainer = document.querySelector(".main__coin-container");
var rightArrow = document.querySelector(".slide-arrow");

rightArrow.addEventListener("click", activeRightContainer);
leftArrow.addEventListener("click", activeLeftContainer);

function activeRightContainer(){
    rightCoinContainer.classList.remove("inactive")
    leftCoinContainer.classList.add("inactive")
}

function activeLeftContainer(){
    var isRightCoinContainerClosed = rightCoinContainer.classList.contains("inactive");
    if (!isRightCoinContainerClosed){
        rightCoinContainer.classList.add("inactive")
    }
    leftCoinContainer.classList.remove("inactive")
}