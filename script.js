//variables
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote');
const quoteContainer = document.getElementsByClassName('quote-container');
const loader = document.querySelector('#loader');
const twitterBTN = document.getElementById('twitter');

let apiQuotes = [];


//show new quote
function newQuote() {

    const newQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!newQuote.author) {
        author.textContent = 'Unknown';
    } else {
        author.textContent = newQuote.author;
    }

    if(newQuote.text.length>150){
        quote.classList.add('long-quote');
    }else{
        quote.classList.remove('long-quote');
    }
    quote.textContent = newQuote.text;
}






// Get quotes from API
async function getQuotes() {
    

    const apiURL = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();


    } catch (error) {
        console.log(error);

    }
   
}

function tweet(){
const twitterUrl=`https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
window.open(twitterUrl,'_blank')
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBTN.addEventListener('click',tweet);


//On load
getQuotes();
