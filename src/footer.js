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
function footer() {
    const footerSection = document.createElement('footer');
    footerSection.classList.add('footer');

    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.innerHTML = `
        &copy; Copyright 2022. All Rights Reserved
        <br><span>The Odin Project</span>
    `;

    const nav = navItems();
    footerSection.appendChild(nav);
    footerSection.appendChild(footerText);

    return footerSection;
}

function footerPage() {
    const content = document.querySelector('#content');
    
    const footerPage = footer();
    content.appendChild(footerPage);
}

export default footerPage;