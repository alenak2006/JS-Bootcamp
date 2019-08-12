let tile1 = ' # # # # ';
let tile2 = '# # # # ';

for (let i = 0; i < 9; i++) {
    if (i % 2 == 0) {
        console.log(tile1);
    } else console.log(tile2);
}

//book solution
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);