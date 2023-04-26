const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumbers(sum=0, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        completionCallback(sum);
        reader.close()
        return
    };
    
    reader.question('Please provide a number: ', answer => {
        current_sum = sum + parseInt(answer);
        console.log(`Thank you - current sum is ${current_sum}`);
        addNumbers(current_sum, (numsLeft - 1), completionCallback);}
        );
    };

function completionCallback(sum) {
    console.log(sum);
}

addNumbers(0, 5, completionCallback)