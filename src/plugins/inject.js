
document.onmouseup = function () {
    var selectedText = window.getSelection().toString();
    if (selectedText) {
        console.log("selected text: " + selectedText);
        // let res = translate(selectedText, "youdao");
        // output = renderTranslation(this.source, res);
        // console.log("output: " + output);
    }
};
