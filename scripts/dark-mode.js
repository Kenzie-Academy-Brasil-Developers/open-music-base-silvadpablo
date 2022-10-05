function toggleDarkMode () {
    const button = document.getElementById("btn-dark")
    const icon = document.getElementById("icon")
    const html = document.querySelector("html")
    const darkActive = localStorage.getItem("darkmode")
    
    button.addEventListener("click", () => {
        html.classList.toggle("dark-mode")
        icon.classList.toggle("text-white")
        
        if (html.classList.contains("dark-mode")) {
            localStorage.setItem("darkmode", true)
            icon.src = "../assets/img/sun.png"
        } else {
            localStorage.removeItem("darkmode")
            icon.src = "../assets/img/moon.png"
        }
    })
    
    if (darkActive) {
        html.classList.add("dark-mode")
        icon.src = "../assets/img/sun.png"
    }

    if(!darkActive) {
        html.classList.remove("dark-mode")
        localStorage.removeItem("darkmode")
        icon.src = "../assets/img/moon.png"
    }
}

toggleDarkMode()