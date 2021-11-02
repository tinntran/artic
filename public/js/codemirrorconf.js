const editor = CodeMirror.fromTextArea(document.querySelector("textarea#content"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "markdown",
})