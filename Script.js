const verb = [`Running` , `Swiming` , `Sleeping`, `Working`];
const sentence = [`The world may be ${word} but you should be ${word2}`, 
                  `Never give up on ${word} you dream need you to be ${word2}`];

document.querySelector("div").onmouseover = event => {
    let word = verb[Math.floot(Math.random()*verb.length-1)];
    let word2 = verb[Math.floot(Math.random()*verb.length-1)];
    let quote = sentence[Math.floot(Math.random()*sentence.length-1)];
    event.target.innerText = quote;
    console.log(quote);
}