
const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

//open the menu 
iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

//close menu if clicked on icon
iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

//close menu if clicked on a link
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
})

// change background header
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}
window.addEventListener('scroll', scrollHeader)

//hide header 
/*
const header = document.getElementById('header');
        let isMouseAtTop = false;

        // Show header when mouse is at the top of the window
        function showHeader() {
            if (isMouseAtTop) {
                header.style.top = '0';
            } else {
                header.style.top = `-${header.offsetHeight}px`;
            }
        }

        // Track mouse position
        window.addEventListener('scroll', function() {
            isMouseAtTop = window.scrollY === 0;
            showHeader();
        });

        window.addEventListener('mousemove', function(event) {
            isMouseAtTop = event.clientY <= header.offsetHeight;
            showHeader();
        });
        */

//hero type effect 
const typed = document.querySelector('.typed');
/* utilisation du code d'une personne = script dans html 
attention à la maj de "Typed"
*/
if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed',{
        strings: typed_strings,
        loop: true,
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000
    })
}


// scroll section 
const sections = document.querySelectorAll('section[id]');

function  scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

 //hobby scroll / laisser ouvert
 document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const hobbyTabs = document.querySelectorAll('.hobby_tabs a');
    

    function hobbyActive() {
        const scrollY = window.pageYOffset;

        pages.forEach(page => {
            const sectionHeight = page.offsetHeight;
            const sectionTop = page.offsetTop - 200;

            let sectionId = page.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                hobbyTabs.forEach(tab => {
                    if (tab.getAttribute('href') === `#${sectionId}`) {
                        tab.classList.add('current');
                    } else {
                        tab.classList.remove('current');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', hobbyActive);

    hobbyTabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetOffset = targetElement.offsetTop - 150;
                window.scrollTo({ top: targetOffset, behavior: 'smooth' });
            }
        });
    });
});

//portofolio
let filterItems = document.querySelectorAll('.portofolio_filter li');

function activePortofolio(){
    filterItems.forEach(el =>{
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(el =>{
    el.addEventListener('click', activePortofolio)
})

//mixitup filter portfolio
let mixerPortfolio = mixitup('.portofolio_wrap-container', {
    selectors: {
        target: '.portofolio_items'
    },
    animation: {
        duration: 300
    }
})

// Testimonial swiper
let swiper = new Swiper("testimonial_container", {
    effect:'slide',
    loop: true, 
    slidesPerView: 1, 
    grabCursor: true, 
    spaceBetween: 100, 
    breakpoints: {
        768: {
            slidesPerView:2,
        }
    }
})