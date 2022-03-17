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
            <img src="./images/deep-dish-meat-pie.jpeg" alt="deep-dis-meat image">
            <p class="card-title">
                <a href="./recipes/deep-dish-meat-pie.html">
                    Deep Dish Meat Pie
                </a>
            </p>
            <p class="card-text">
                ... a pretty fairly long text. Maybe little or maybe not. you'll
                get to reed all when you tap the Dish name... Enjoy!
            </p>
        </div>
        <div class="card-item">
            <img src="./images/deep-dish-meat-pie.jpeg" alt="deep-dis-meat image">
            <p class="card-title">
                <a href="./recipes/deep-dish-meat-pie.html">
                    Deep Dish Meat Pie
                </a>
            </p>
            <p class="card-text">
                ... a pretty fairly long text. Maybe little or maybe not. you'll
                get to reed all when you tap the Dish name... Enjoy!
            </p>
        </div>
        <div class="card-item">
            <img src="./images/deep-dish-meat-pie.jpeg" alt="deep-dis-meat image">
            <p class="card-title">
                <a href="./recipes/deep-dish-meat-pie.html">
                    Deep Dish Meat Pie
                </a>
            </p>
            <p class="card-text">
                ... a pretty fairly long text. Maybe little or maybe not. you'll
                get to reed all when you tap the Dish name... Enjoy!
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