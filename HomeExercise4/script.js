{/* <div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">
    Dropdown button
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
</div>
</div> */}

import { Menu } from './menu.js';

let menu1 = new Menu(
    document.querySelector('.menu1'),
    'Front End',
    ['Angular', 'React', 'Vue']
)

let menu2 = new Menu(
    document.querySelector('.menu2'),
    'Back End',
    ['Express', 'Node', 'C#']
)

let menu3 = new Menu(
    document.querySelector('.menu3'),
    'Options',
    ['Transfer', 'Learn', 'Try', 'Improve', 'Move on']
)

menu1.open();
setTimeout(() => {
    menu1.close();
    menu2.hide();
}, 3000);