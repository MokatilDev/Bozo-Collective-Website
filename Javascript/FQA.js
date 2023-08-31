const header = document.querySelectorAll(".FQA header")

header.forEach(element => {
    element.addEventListener("click", () => {
        element.nextElementSibling.classList.toggle("active")
        element.children[1].classList.toggle("active")
    })
})
