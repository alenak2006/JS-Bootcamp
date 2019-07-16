let lis = document.getElementsByTagName('li');
for (let li of lis) {
    // get the count of all <li> below this <li>
    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;

    // add directly to the text node (append to the text)
    li.firstChild.data += ' [' + descendantsCount + ']';
}