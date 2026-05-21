document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MENU
    // =========================
    
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".Home");
    const overlay = document.querySelector(".overlay");

    const toggleMenu = () => {

        // animasi tombol keluar
        menuBtn.style.transform = "scale(0.7)";
        menuBtn.style.opacity = "0";

        setTimeout(() => {

            // toggle menu
            menu.classList.toggle("active");
            overlay.classList.toggle("active");

            // ganti icon
            menuBtn.textContent =
                menu.classList.contains("active") ? "✖" : "☰";

            // animasi masuk
            menuBtn.style.transform = "scale(1)";
            menuBtn.style.opacity = "1";

        }, 120);
    };

    // klik tombol menu
    menuBtn.addEventListener("click", toggleMenu);

    // klik overlay
    overlay.addEventListener("click", () => {

        menu.classList.remove("active");
        overlay.classList.remove("active");

        menuBtn.style.transform = "scale(0.7)";
        menuBtn.style.opacity = "0";

        setTimeout(() => {

            menuBtn.textContent = "☰";

            menuBtn.style.transform = "scale(1)";
            menuBtn.style.opacity = "1";

        }, 120);
    });

    // =========================
    // SCROLL ANIMATION
    // =========================

    const containers = document.querySelectorAll(".container");

    const revealOnScroll = () => {
    
        containers.forEach(el => {
    
            const top = el.getBoundingClientRect().top;
            const trigger = window.innerHeight - 100;
    
            if (top < trigger) {
    
                el.classList.add("show");
    
            } else {
    
                el.classList.remove("show");
    
            }
    
        });
    
    };
    
    // scroll
    window.addEventListener("scroll", revealOnScroll);
    
    // load awal
    revealOnScroll();
});