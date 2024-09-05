const body = document.querySelector('body')
const botaoDark = document.querySelector('[data-botaoDark]')

botaoDark.addEventListener("change", function(){
    if (this.checked) {
        body.setAttribute("data-bs-theme", "dark")
        console.log('batata')
    } else {
        body.setAttribute("data-bs-theme", "light")
    }
})
