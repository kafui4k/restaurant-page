import footerPage from "./footer";

function contact() {
    const contactSection = document.createElement('section');
    contactSection.classList.add('contact-page');

    const sectionHeader = document.createElement('h1');
    sectionHeader.classList.add('section-header');
    sectionHeader.innerHTML = "Contact Us";

    contactSection.appendChild(sectionHeader);

    const sectionPara = document.createElement('p');
    sectionPara.classList.add('contact-text');
    sectionPara.innerHTML = `
        Heya! Do we have to talk?
        Alright, we are excited to hear you out. Choose any of these channels that work for you.
    `;

    contactSection.appendChild(sectionPara);

    const card = document.createElement('card');
    card.classList.add('contact-card');
    card.innerHTML = `
        <div class="card-item">
            <img class="contact-image" src="./icons/call-svgrepo-com.svg" alt="place holder image">
            <p class="card-title">
                Support 
            </p>
            <p class="card-text">
                For customer support, call +233240002222 or e-mail. hi@restaurant-page.com
            </p>
        </div>
        <div class="card-item">
            <img class="contact-image" src="./icons/handshake-svgrepo-com.svg" alt="deep-dis-meat image">
            <p class="card-title">
                Partnership
            </p>
            <p class="card-text">
                For partner inquiries, send us an email via the e-mail below. partnership@restaurant-page.com
            </p>
        </div>
        <div class="card-item">
            <img class="contact-image" src="./icons/printed-press-svgrepo-com.svg" alt="deep-dis-meat image">
            <p class="card-title">
                Press
            </p>
            <p class="card-text">
                For press inquiries, send us an email via the e-mail below. press@restaurant-page.com
            </p>
        </div>
    `;

    contactSection.appendChild(card);

    return contactSection;
}

function contactPage() {
    const content = document.querySelector('#content');

    const cnt = contact();
    content.appendChild(cnt);

    footerPage();
}

export default contactPage;