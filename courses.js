var myTextArea = document.getElementById("mytext");
var size = document.getElementById("size");
var police = document.getElementById("police")

function makebold() {
    if (myTextArea.style.fontWeight == "normal") {
        myTextArea.style.fontWeight = "bold";
    }
    else {
        myTextArea.style.fontWeight = "normal";
    }
}

function makeitalic() {
    if (myTextArea.style.fontStyle == "normal") {
        myTextArea.style.fontStyle = "italic";
    }
    else myTextArea.style.fontStyle = "normal";
}
function makeunderline() {
    if (myTextArea.style.textDecoration == "underline") {
        myTextArea.style.textDecoration = "";
    }
    else {
        myTextArea.style.textDecoration = "underline";
    }
}
function changecolor() {
    myTextArea.style.color = color.value;
}
function changesize() {
    myTextArea.style.fontSize = size.value;
}
function changepolice(){
    myTextArea.style.fontFamily = police.value;
}
