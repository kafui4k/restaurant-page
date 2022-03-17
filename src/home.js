import footerPage from "./footer";

function home() {
    const homeSection = document.createElement('section');
    homeSection.classList.add('section.active');
    const h1 = document.createElement('h1');
    h1.classList.add('section-header');
    h1.innerHTML = 'The Menu Gallery';

    const p = document.createElement('p');
    p.classList.add('section-text');
    p.innerHTML = `
        Welcome to Menu Gallery! We provide healthy
        meals just for your taste and consumption at affordable
        price and at the speed of light. :-)
    `;

    homeSection.appendChild(h1);
    homeSection.appendChild(p);

    return homeSection;
}

function defaultHomePage() {
    const content = document.querySelector('#content');
    
    const hm = home();
    content.appendChild(hm);

    footerPage();
}

export default defaultHomePage;