const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2])

let strArr = buffer.toString().split('');


let counter = 0;
strArr.forEach(element => {
    if(element === `\n`) {
        counter++;
    }
});

console.log(counter);

