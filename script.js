let value = Math.floor(Math.random()*100);

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let guessedValue = parseInt(document.getElementById('guess').value);
    
    if(!guessedValue){
        alert("Please guess a value");

        return;
    }

    if(value === guessedValue){
        alert("Yeh! You got it");
        value = Math.floor(Math.random()*100);
    }else if(value > guessedValue){
        alert("Guess a higher value");
    }else{
        alert("Guess a smaller value");
    }
});