const cookieButton = document.querySelector("#cookie-count")
let counter = 0;

cookieButton.addEventListener("click", function () {
    counter++;
    const cookieCount = document.querySelector("click-count");
    cookieCount.textContent = counter;
})