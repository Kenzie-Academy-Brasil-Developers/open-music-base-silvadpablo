function renderGenres (object) {
    let genreList = document.getElementById("genre-list")

    object.forEach(element => {
        let checkCategory = document.getElementById(`genre-${element.category.toLowerCase()}`)
        if (checkCategory) {
        } else {
            let li = document.createElement("li")
            let button = document.createElement("button")
            button.id = `genre-${element.category.toLowerCase()}`
            button.classList = "btn btn-filter"
            button.innerText = element.category
            li.append(button)
            genreList.append(li)
        }
    });
    

}

renderGenres(products)

function renderCards (object) {
    let allCards = document.getElementById("all-cards")
    
    object.forEach(element => {
        let li = document.createElement("li")
        li.classList = "card"
        allCards.append(li)
    
        let img = document.createElement("img")
        img.classList = "card-img"
        img.src = element.img
        img.alt = element.title
        li.append(img)

        let divInfo = document.createElement("div")
        divInfo.classList = "flex flex-col justify-around card-info"
        li.append(divInfo)

        let divYear = document.createElement("div")
        divYear.classList = "flex"
        divInfo.append(divYear)

        let pBand = document.createElement("p")
        pBand.classList = "info-year-band"
        pBand.innerText = element.band
        divYear.append(pBand)
        
        let pYear = document.createElement("p")
        pYear.classList = "info-year-band"
        pYear.innerText = element.year
        divYear.append(pYear)

        let pAlbum = document.createElement("p")
        pAlbum.classList = "info-title"
        pAlbum.innerText = element.title
        divInfo.append(pAlbum)

        let divPrice = document.createElement("div")
        divPrice.classList = "flex justify-between items-center"
        divInfo.append(divPrice)

        let pPrice = document.createElement("p")
        pPrice.classList = "info-price"
        pPrice.innerText = `R$ ${element.price}`
        divPrice.append(pPrice)

        let buttonBuy = document.createElement("button")
        buttonBuy.classList = "btn btn-buy"
        buttonBuy.innerText = "Comprar"
        divPrice.append(buttonBuy)
    })
}

renderCards(products)