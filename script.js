// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

//efecto typing

var typed = new Typed('.auto-type', {
    strings: ["Desarrollador Web Full Stack!", "Programador Junior!"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
});
