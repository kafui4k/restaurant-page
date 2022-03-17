import footerPage from './footer';

function aboutUs() {
    const about = document.createElement('section');
    about.classList.add('section');

    const sectionHeader = document.createElement('h1');
    sectionHeader.classList.add('section-header');
    sectionHeader.innerHTML = "About us";

    about.appendChild(sectionHeader);

    const p = document.createElement('p');
    p.classList.add('section-text');
    p.innerHTML = `
        We are a food factory that seeks to provide affordable food services to the people
        working hard and studying to lead and safeguard our tomorrow.
        We want to be the cities' favourite kitchen, where one can find
    `;

    about.appendChild(p);

    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerText = 'Satisfaction';

    ul.appendChild(li);

    about.appendChild(ul);

    return about;
}

function aboutPage() {
    const content = document.querySelector('#content');
    
    const ab = aboutUs();
    content.appendChild(ab);

    footerPage();
}

export default aboutPage;