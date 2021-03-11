// modal functionality
const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

// modal info
const modalH3 = document.querySelector("h3")
const modalSpan = document.querySelector("span")

for(let card of cards) {

    card.addEventListener("click", function() {

        /* modal functionality*/
        const imgId = card.getAttribute("id")

        modalOverlay.classList.add("active")

        modalOverlay.querySelector("img").src = `../assets/${imgId}`

        /* modal info */
        const cardH4 = card.querySelector("h4").textContent 
        const cardP = card.querySelector("p").textContent 

        modalH3.innerHTML = cardH4
        modalSpan.innerHTML = cardP

        modalContent.appendChild(modalH3)
        modalContent.appendChild(modalSpan)
        
    })

}

// close modal
document.querySelector(".close-modal").addEventListener("click", function() {
    
    modalOverlay.classList.remove("active")

})
