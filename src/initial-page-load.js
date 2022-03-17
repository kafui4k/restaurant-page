
function headerLogo() {
    const logo = document.createElement('div');
    logo.classList.add('logo');

    const logoText = document.createElement('h1');
    logoText.innerText = 'MenuGALLERY';

    logo.appendChild(logoText);

    return logo;
}

function navLinks(lis) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    var link = document.createTextNode(lis);
    a.classList.add('data-link');
    a.innerText = lis;

    // Set the title.
    a.title = lis; 
                  
    // Set the href property.
    a.href = '#';

    li.appendChild(a);

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

function pageLoad() {
    const content = document.querySelector('#content');
    
    const hd = header();
    content.appendChild(hd);

}

export default pageLoad;

