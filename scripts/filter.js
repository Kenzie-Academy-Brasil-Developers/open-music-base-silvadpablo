function createFilterEvents () {
    let buttons = document.querySelectorAll(".btn-filter")
    let range = document.getElementById("range")
    
    let values = products.map(element => element.price)
    let maxValue = Math.max(...values)
    range.value = maxValue
    range.max = maxValue

    buttons.forEach(element => {
        element.addEventListener("click", () => {
            filterCards(element)
        })
    })
    range.addEventListener("input", () => {
        filterByPrice(event.target.value)
    })
}

createFilterEvents()

function filterCards(element) {
    let allCardsFilter = document.getElementById("all-cards")
    allCardsFilter.innerHTML = ""

    if (element.innerText == "Todos") {
        renderCards(products)
    } else {
        let filteredCards = products.filter((item) => item.category == element.innerText)
        renderCards(filteredCards)
    }
}

function filterByPrice(value) {
    let rangeValue = document.getElementById("range-value")
    rangeValue.innerText = `Até R$ ${value}`
    let filteredCards = products.filter((item) => item.price <= value)
    let allCardsFilter = document.getElementById("all-cards")
    allCardsFilter.innerHTML = ""
    renderCards(filteredCards)
}