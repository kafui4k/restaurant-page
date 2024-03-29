import pageLoad from './initial-page-load';
import defaultHomePage from './home';
import aboutPage from './about';
import menuPage from './menu';
import contactPage from './contact';


init();

function init(pageData) { 
   if (pageData) {
       pageData();
   } else {
        pageLoad();
        defaultHomePage();
   }
};

function removeFooter() {
    const footer = document.querySelector('footer.footer');
    footer.parentNode.removeChild(footer);
}

function getPage() {
    const links = document.querySelectorAll('a');

    links.forEach(link => link.addEventListener('click', function(e) {

        const dataValue = e.target;

        e.preventDefault();

        if (dataValue.innerText === 'about') {
            const sectionAbout = document.querySelector('.home-page');
            if (sectionAbout) {
                sectionAbout.classList.remove('active');
            }
            const menuSection = document.querySelector('.menu-page');
            if (menuSection) {
                menuSection.classList.remove('active');
            }
            const contactSection = document.querySelector('.contact-page');
            if (contactSection) {
                contactSection.classList.remove('active');
            }
            removeFooter();
            init(aboutPage);
            const newSection = document.querySelector('.about-page');
            newSection.classList.add('active');
            
        } else if (dataValue.innerText === 'menu') {
            const sectionhome = document.querySelector('.home-page');
            if (sectionhome) {
                sectionhome.classList.remove('active');
            }
            const aboutSection = document.querySelector('.about-page');
            if (aboutSection) {
                aboutSection.classList.remove('active');
            }
            const contactSection = document.querySelector('.contact-page');
            if (contactSection) {
                contactSection.classList.remove('active');
            }
            removeFooter();
            init(menuPage);
            const menuSection = document.querySelector('.menu-page');
            menuSection.classList.add('active');

        } else if (dataValue.innerText === 'contact') {
            const sectionhome = document.querySelector('.home-page');
            if (sectionhome) {
             sectionhome.classList.remove('active');
            }
            const aboutSection = document.querySelector('.about-page');
            if (aboutSection) {
                aboutSection.classList.remove('active');
            }
            const menuSection = document.querySelector('.menu-page');
            if (menuSection) {
                menuSection.classList.remove('active');
            }
            removeFooter();
            init(contactPage);
            const contactSection = document.querySelector('.contact-page');
            contactSection.classList.add('active');
        } else {
            // pageLoad();
        }

    }));
};

getPage();