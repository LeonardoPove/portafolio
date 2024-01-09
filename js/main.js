//////////////////////////////////////////////Menu////////////////////////////
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav_link');

// Mostrar menú
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navToggle.style.display = 'none';
    });
}

// Ocultar menú
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.style.display = 'block';
    });
}

// Cerrar menú al hacer clic en un enlace del menú
if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            const sectionId = e.currentTarget.getAttribute('href') || "#inicio"; // Obtener el ID de la sección del enlace

            // Ocultar el menú después de hacer clic en el enlace
            navMenu.classList.remove('show-menu');
            navToggle.style.display = 'block';

            // Desplazarse suavemente a la sección correspondiente
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}



// ====================== remove menu mobile ======================

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// =============================== Experiencia ============================================

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents => {
            tabContents.classList.remove('experiencia__active')
        })
        target.classList.add('experiencia__active')

        tabs.forEach(tab => {
            tab.classList.remove('experiencia__active')
        })
        tab.classList.add('experiencia__active')
    })
})

// ////////////////////////////////////Habilidades/////////////////////////////////
const skillsContent = document.querySelectorAll('.habilidades__content');
const skillsHeader = document.querySelectorAll('.habilidades__header');

function toggleHabilidades() {
    let itemClass = this.parentNode.classList;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].classList.remove('habilidades__open');
        skillsContent[i].classList.add('habilidades__close');
    }

    if (itemClass.contains('habilidades__close')) {
        itemClass.remove('habilidades__close');
        itemClass.add('habilidades__open');
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleHabilidades);
});


//////////////////////////Portafolio swiper ///////////////////

let swiper = new Swiper(".portafolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


/////////////////////////////////scrool arriba////////////////////////////////////


const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav_list a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

///////////////////////////////change bacgraund header/////////////////////////////////

function scrollHeader() {
    const nav = document.getElementById('header')

    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


//////////////////////////////show scroll up //////////////////////////

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

//////////////////////////thama oscuro/////////////////////////

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


//////////////////////////////envio de mensages////////////////
const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:leonardopoved@gmail.com?subject= Nombre: ${form.get('name')} Email: ${form.get('email')}&body= Nombre de la empresa o proyecto: ${form.get('empresa')}, Asunto: ${form.get('message')}`);
    $buttonMailto.click()
}
