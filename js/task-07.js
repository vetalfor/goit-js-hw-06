const fontSizeControl = document.getElementById("font-size-control");
const textElemnt = document.getElementById("text");

fontSizeControl.addEventListener("input", changeFontSize);
function changeFontSize() {
    const fontSize = fontSizeControl.value + "px";
    textElemnt.style.fontSize = fontSize;
};
changeFontSize();