const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');

getNewQuote()
async function getNewQuote(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json()
    adviceId.innerText = data.slip.id;
    adviceText.innerText = data.slip.advice;
    
}