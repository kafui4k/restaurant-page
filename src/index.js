// const homepage = require('./homepage');
import pageLoad from './initial-page-load';
import defaultHomePage from './home';
import aboutPage from './about';
import menuPage from './menu';

init(defaultHomePage);

// get all tab-nav links
const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('click', function(e) {
    console.log(e.target.innerText);

    // if link target is 'about'
    // call function init()
    // pass in pageData to be displaed - hence about
}))




function init(pageData) {
    pageLoad();
    return pageData();
}