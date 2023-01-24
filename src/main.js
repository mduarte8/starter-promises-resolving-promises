const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "Eat my shorts?";
const tellPromise = tell(question);
tellPromise
    .then((fortune) => {
        console.log(question);
        console.log(fortune);
    })
    .catch(console.error)