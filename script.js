document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Xử lý sự kiện click bật/tắt class 'active'
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});