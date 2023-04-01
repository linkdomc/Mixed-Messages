const contener = document.querySelector("div");
const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


onclick = event => {
    let quote = create_Quote();
        event.target.innerText = quote;
}

create_Quote = () =>{
    const verb = [`Running` , `Swiming` , `Sleeping`, `Working`];
    
    let word = verb[Math.floor(Math.random()*verb.length)];
    let word2 = verb[Math.floor(Math.random()*verb.length)];
    
    const sentence = [`The world may be ${word} but you should be ${word2}`, 
                  `Never give up on ${word} you dream need you to be ${word2}`];
    
    
    return sentence[Math.floor(Math.random()*sentence.length)];
}