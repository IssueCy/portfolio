document.getElementById("selected-language").addEventListener("click", function (event) {
    document.getElementById("language-dropdown").classList.toggle("shown");
});

document.querySelectorAll("#language-dropdown li").forEach(item => {
    item.addEventListener("click", function () {
        let selectedText = this.innerHTML;
        
        document.getElementById("selected-language").innerHTML = selectedText;
        document.getElementById("language-dropdown").classList.remove("shown");n
        
        console.log("Selected language:", this.dataset.lang);
    });
});

document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("language-dropdown");
    let button = document.getElementById("selected-language");
    
    if (!dropdown.contains(event.target) && event.target !== button) {
        dropdown.classList.remove("shown");
    }
});
