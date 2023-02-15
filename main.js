var fizz=0;
while (fizz <= 100){
    console.log(fizz);
    fizz = fizz + 5
}

var buzz = 0;
while (buzz <= 100){
    console.log(buzz);
    buzz = buzz + 3;
}

for(let line = '#'; line.lenght < 8; line += '#')
console.log(line);

let size = 8;
let board = "";
for(let y = 0; y < size; y++){
    for(let x = 0; x < size; x++){
        if((x + y) % 2 == 0){
            board += " ";
        }
        else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
