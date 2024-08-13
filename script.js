const slidesContainer = document.getElementById("slides-container")
const slide = document.querySelector(".slide")
const prevButton = document.getElementById("slide-arrow-prev")
const nextButton = document.getElementById("slide-arrow-next")


document.addEventListener("DOMContentLoaded", () => {
    const slideWidth = slide.clientWidth // Largura de cada slide
    const slidesContainer = document.getElementById("slides-container") // Contador dos slides
    let currentIndex = 0 // Indice do slide atual

    //Função para avançar para o próximo slide
    const nextSlide = () => {
        currentIndex++
        if (currentIndex >= slidesContainer.children.length) {
            currentIndex = 0 //Volta para o primeiro slide ao chegar ao último
        }
        const newPosition = currentIndex * slideWidth
        slidesContainer.scroll({
            left: newPosition,
            behavior: "smooth"
        })
    }
    // Rotação automática a cada 4 segundos
    setInterval(nextSlide, 4000)
})


// prevButton.addEventListener("click", () => {
//     const slideWidth = slide.clientWidth
//     slidesContainer.scrollLeft -= slideWidth

// })
