const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

// Pegando classe com informações no modal
// const modalContent = document.getElementsByClassName("name-dish")

// Selecionando o elemento no modal 
const modalH3 = document.querySelector("h3")
const modalSpan = document.querySelector("span")

for(let card of cards) {

    card.addEventListener("click", function() {

        const imgId = card.getAttribute("id")

        modalOverlay.classList.add("active")

        modalOverlay.querySelector("img").src = `../assets/${imgId}`

        /**modal info */

        const cardH4 = card.querySelector("h4").textContent // pegando informação
        const cardP = card.querySelector("p").textContent // pegando informação

        //
        modalH3.innerHTML = cardH4
        modalSpan.innerHTML = cardP

        modalContent.appendChild(modalH3)
        modalContent.appendChild(modalSpan)

        // const modalH3 = card.querySelector("h3").textContent

        // modalH3.appendChild()
    })

}

document.querySelector(".close-modal").addEventListener("click", function() {
    
    modalOverlay.classList.remove("active")

})
