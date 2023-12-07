let sum = 0;
for(let i = 2; i < (process.argv).length; i++) {
    if(typeof parseInt(process.argv[i] === 'number')) {
        sum += parseInt(process.argv[i])
    }
}
console.log(sum)