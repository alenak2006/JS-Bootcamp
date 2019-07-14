let lis = document.querySelectorAll('li');
for (let li of lis) {
    console.log(li.firstChild.data);
    console.log(li.getElementsByTagName('li').length);
}

