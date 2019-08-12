let hushes = '#';
let count = 0;

while (count < 7) {

    console.log(hushes);
    hushes += '#';
    count++;
}

//book solution
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);

