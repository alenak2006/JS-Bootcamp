import { List } from './list.js';

let list1 = new List(
    document.querySelector('#list1'),
    'Flowers',
    ['rose', 'tulip', 'sunflower', 'snowdrop']
)

let list2 = new List(
    document.querySelector('#list2'),
    'Trees',
    ['pine', 'palm', 'cypress', 'acacia', 'birch', 'spruce', 'willow', 'maple']
)

let list3 = new List(
    document.querySelector('#list3'),
    'Fruits',
    ['apples', 'pears', 'bananas', 'melon', 'guava']
)
