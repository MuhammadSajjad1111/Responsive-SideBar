const getLogo = document.querySelector("#clickOnLogo");

getLogo.addEventListener("click", function() {
    const elementsToIncreaseWidth = document.getElementsByClassName("divWidthIncrease");
    // Loop through each element with the class "divWidthIncrease"
    for (let element of elementsToIncreaseWidth) {
        if (element.classList.contains("w-16")) {
            element.classList.remove("w-16");
            element.classList.add("w-60");
        } else {
            element.classList.add("w-16");
            element.classList.remove("w-60");
        }
    }

    const ElementToIncreaseInnerWidth = document.getElementsByClassName("innerDivIncreaseWidth");
    // Loop through each element with the class "divWidthIncrease"
    for (let element of ElementToIncreaseInnerWidth) {
        if (element.classList.contains("w-16")) {
            element.classList.remove("w-16");
            element.classList.add("w-60");
        } else {
            element.classList.add("w-16");
            element.classList.remove("w-60");
        }
    }

    const sideBarText = document.getElementsByClassName("sideBarOpen");
    // Loop through each element with the class "sideBarOpen"
    for (let element of sideBarText) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
            element.classList.add("block");
        } else {
            element.classList.add("hidden");
            element.classList.remove("block");
        }
    }
});
