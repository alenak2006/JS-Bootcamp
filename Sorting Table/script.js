import { Table } from './table.js';

let table1 = new Table(
    document.querySelector('#table1'),
    'Table 1',
    [{
        name: 'Pete',
        age: 23,
        occupation: 'Designer'
    },
    {
        name: 'Tom',
        age: 45,
        occupation: 'Builder'
    },
    {
        name: 'Alena',
        age: 34,
        occupation: 'programmer'
    },
    ]
)

let table2 = new Table(
    document.querySelector('#table2'),
    'Table 2',
    [{
        ID: '001',
        price: 23.70,
        product: 'Headphones',
        description: 'White, no noise',

    },
    {
        ID: '067',
        price: 234.60,
        product: 'Bed',
        description: 'Wooden, slate',

    },
    {
        ID: '098',
        price: 345.60,
        product: 'Table',
        description: 'Oak, 4 chairs',

    },
    {
        ID: '112',
        price: 1200.00,
        product: 'TV',
        description: 'Flat OLED',

    },
    {
        ID: '409',
        price: 450.45,
        product: 'Sofa',
        description: 'Soft, corner left',

    },
    {
        ID: '078',
        price: 150.45,
        product: 'Stereo',
        description: 'HIFI surround sound',

    }
    ]
)


