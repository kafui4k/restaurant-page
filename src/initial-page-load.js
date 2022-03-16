function headerLogo() {
    const logo = document.createElement('div');
    logo.classList.add('logo');

    const logoText = document.createElement('h1');
    logoText.innerText = 'MenuGALLERY';

    logo.appendChild(logoText);

    return logo;
}

function navLinks(lis) {
    // const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.innerHTML = lis;

    // ul.append(li);

    return li;
}

function navItems() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const ul = document.createElement('ul');

    const about = navLinks('about');
    const menu = navLinks('menu');
    const contact = navLinks('contact');

    ul.append(about);
    ul.append(menu);
    ul.append(contact);

    nav.append(ul);

    return nav;
}

function header() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = headerLogo();
    header.appendChild(logo);

    const nav = navItems();
    header.appendChild(nav);

    return header;
}

function section() {
    const section = document.createElement('section');
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

    section.appendChild(h1);
    section.appendChild(p);

    return section;
}

function footer() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.innerHTML = `
        &copy; Copyright 2022. All Rights Reserved
        <br><span>The Odin Project</span>
    `;

    const nav = navItems();
    footer.appendChild(nav);
    footer.appendChild(footerText);

    return footer;
}

function pageLoad() {
    const content = document.querySelector('#content');
    
    const hd = header();
    content.appendChild(hd);

    const sect = section();
    content.appendChild(sect);

    const ft = footer();
    content.appendChild(ft);

}

export default pageLoad;

