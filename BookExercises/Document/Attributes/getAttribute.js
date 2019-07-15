let elem = document.querySelector('div[data-widget-name]');
console.log(elem.getAttribute(['data-widget-name']));
//or 
console.log(elem.dataset.widgetName);

//make external links orange
let links = document.querySelectorAll('a');

for (let link of links) {
    let href = link.getAttribute('href');
    if (!href) {
        continue;
    }
    if (!href.includes("://") && !href.startsWith('http://internal.com.')) {
        link.style.color = 'orange';
    }
}

//version 2
// look for all links that have :// in href
// but href doesn't start with http://internal.com
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links2 = document.querySelectorAll(selector);

links2.forEach(link => link.style.color = 'orange');