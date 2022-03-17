import footerPage from "./footer";

function menu() {
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-page');

    const sectionHeader = document.createElement('h1');
    sectionHeader.classList.add('section-header');
    sectionHeader.innerHTML = "Anything You'll like to order...?";

    menuSection.appendChild(sectionHeader);

    const card = document.createElement('card');
    card.classList.add('card');
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

    menuSection.appendChild(card);

    return menuSection;
}

function menuPage() {
    const content = document.querySelector('#content');
    
    const menuItems = menu();
    content.appendChild(menuItems);

    footerPage();
}

export default menuPage;