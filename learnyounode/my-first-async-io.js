const fs = require('fs');
let count = 0;

function countN(printCount) {
    fs.readFile(process.argv[2], (err, fileContents)=>{
        if(err) {
            throw err;
        } else {
            fileContents.toString().split('').forEach(item => {
                if(item === `\n`) {
                    count++;
                }
            })
            console.log(count)
        }
})
}

function printCount() {
    console.log(count)
}

countN(printCount);
