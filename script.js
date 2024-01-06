/*const buttons = document.querySelector("[data-caroussel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const offset = button.dataset.carousselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-caroussel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0)
    })
})*/