const fs = require('fs');
const path = require('path')
const filePath = process.argv[2];

function filterExt(callback) {
    fs.readdir(filePath, function doneReading(err, files) {
        if(err) {
            throw err;
        } else {
            files.forEach(file => {
                if(path.extname(file) === '.' + process.argv[3]) {
                    console.log(file)
                }
            })
        }
    })
}

function logFile() {
    console.log(file)
}

filterExt(logFile)