let cityHyderabad = document.getElementById("cityHyderabad");
let cityChennai = document.getElementById("cityChennai");
let cityDelhi = document.getElementById("cityDelhi");
let cityMumbai = document.getElementById("cityMumbai");
let submitBtn = document.getElementById("submitBtn");
let resultMsg = document.getElementById("resultMsg");
let questionForm = document.getElementById("questionsForm");

let capitalCity = "Delhi";
let selectedCity = null;

cityHyderabad.addEventListener("change", function(event) {
    selectedCity = event.target.value;
})
cityChennai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
})
cityDelhi.addEventListener("change", function(event) {
    selectedCity = event.target.value;
})
cityMumbai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
})


questionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        resultMsg.textContent = "Please select the city!";
        resultMsg.classList.add("wrong-answer");
    } else if (selectedCity === capitalCity) {
        resultMsg.textContent = "Correct Answer!";
        resultMsg.classList.add("correct-answer");

    } else {
        resultMsg.textContent = "Worng Answer";
        resultMsg.classList.add("wrong-answer")
    }
})