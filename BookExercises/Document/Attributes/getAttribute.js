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