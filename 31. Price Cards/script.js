const cards = document.querySelectorAll(".cards");
const purchaseBtns = document.querySelectorAll(".purchase");

cards.forEach(card => {
    card.addEventListener("click", updateCard);
})

function updateCard(){
    cards.forEach(card => {
        card.classList.remove("cards-active");
    })

    for(i=0; i<3; i++){
        if(cards[i].children[0].children[3].classList.contains("purchase-active")){
          cards[i].children[0].children[3].classList.remove("purchase-active");
        };
    }
    this.classList.add("cards-active");
    this.children[0].children[3].classList.add("purchase-active");
}