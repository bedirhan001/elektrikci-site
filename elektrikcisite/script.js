
// Footer yılını otomatik olarak güncelle
document.getElementById("year").textContent = new Date().getFullYear();


// Menü bağlantılarına yumuşak kaydırma
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
