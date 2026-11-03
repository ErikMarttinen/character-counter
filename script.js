const textbox = document.getElementById("message");
const countText = document.getElementById("count");
const clearBtn = document.getElementById("clearbtn");

textbox.addEventListener("input", function () {
    countText.textContent = textbox.value.length + " /280";
    if (textbox.value.length <= 280) {
        countText.style.color = "green";
    } else {
        countText.style.color = "red";
        countText.textContent = textbox.value.length + " /280 Text too long!";
    }
});

clearBtn.addEventListener("click", function (event) {
    textbox.value = "";
    countText.textContent = textbox.value.length + " /280";
    countText.style.color = "green";
});
