const content = document.querySelector("textarea#content")
const editor = CodeMirror.fromTextArea(content, {
    lineNumbers: true,
    lineWrapping: true,
    mode: "markdown",
})

editor.setSize(null, '24rem')

editor.on('change', () => {
    content.textContent = editor.getValue().trim()
})