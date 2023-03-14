window.addEventListener('load', () => {
    const writeForm = document.querySelector('#write')
    const paragraph = document.querySelector('#write-here')

    writeForm.addEventListener('submit', event => {
        event.preventDefault()
        const content = event.target[0].value
        paragraph.textContent = content
    })
})