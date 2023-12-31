document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("validation-input");
    
    inputElement.addEventListener("blur", function (event) {
        const inputValue = event.target.value;
        const requiredLength = +inputElement.getAttribute("data-length");
        if (inputValue.trim().length === requiredLength) {
            inputElement.classList.remove("invalid");
            inputElement.classList.add("valid");
        } else {
            inputElement.classList.remove("valid");
            inputElement.classList.add("invalid");
        }
    });
});