const contener = document.querySelector("div");

contener.onmouseover = event => {
    const verb = [`Running` , `Swiming` , `Sleeping`, `Working`];
    let word = verb[Math.floor(Math.random()*verb.length-1)];
    let word2 = verb[Math.floor(Math.random()*verb.length-1)];
    const sentence = [`The world may be ${word} but you should be ${word2}`, 
                  `Never give up on ${word} you dream need you to be ${word2}`];
    let quote = sentence[Math.floor(Math.random()*sentence.length-1)];
    event.target.innerText = quote;
}