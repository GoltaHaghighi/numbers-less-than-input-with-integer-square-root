const userInput = prompt("Enter a number :");
for (let i = 1 ; i < userInput ; i++){
    let root = Math.sqrt(i);
    if (Math.floor(root) === root) {
         console.log(`sqrt of ${Math.pow(root,2)} is ${root}`);
    }
}