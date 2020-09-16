/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/******************** 
   `quotes` array 
********************/
// create an array with 5 objects containing multiple properties
const quotes = [
  {
    quote: "May the Force be with you.",
    source: '- Obi-Wan Kenobi',
    citation:'Star Wars A New Hope',
    year: 1977,
    genre: 'Science Fiction Film',
    img: 'img0'
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: '- John Keating',
    citation: 'Dead Poets Society Film',
    year: 1989,
    genre: 'Drama Film',
    img: 'img1'
  },
  {
    quote: "A martini. Shaken, not stirred.",
    source: '- James Bond',
    citation: 'Goldfinger',
    year: 1964,
    genre: 'Action Film',
    img: 'img2'
  },
  {
    quote: "Yippie-ki-yay, motherf—er!",
    source: '- John McClane', 
    citation: 'Die Hard',
    year: 1988,
    genre: 'Action Film',
    img: 'img3'
  },
  {
    quote: "Roads? Where we're going we don't need roads.",
    source: '- Dr. Emmett Brown',
    citation: 'Back to the Future',
    year: 1985,
    genre: 'Science Fiction Film',
    img: 'img4'
  }

];

// Initialise random quote to screen
printQuote();

/******************************
 * `getRandomQuote` function
*******************************/

function getRandomQuote() {
  // assign a random number between 0 - 5 to a variable
  const randomNumber = Math.floor(Math.random() * 5);
  console.log(randomNumber);
  return quotes[randomNumber]; // use the random number to return an object from the quotes array
}


/**************************
 * `printQuote` function
***************************/

function printQuote() {
  // assign the getRandomQuote function created previously to the randomQuote variable
  const randomQuote = getRandomQuote();
  // create a variable and assing a template literal with the relevant html fields, the randomQuote variable accessing the relevant properties
  let quoteData = 
  `<p class="quote">${randomQuote.quote}</p>
   <p classs="source">${randomQuote.source}`;

   // conditional statement if there is a "citation" property to concatenate to the quoteData variable
  if (randomQuote.citation) {
    quoteData += `<span class="citation">${randomQuote.citation}</span>`;
  } 
   // conditional statement if there is a "year" property to concatenate to the quoteData variable
  if (randomQuote.year) {
    quoteData += `<span class="year">${randomQuote.year}</span>`;
  } 
   // conditional statement if there is a "genre" property to concatenate to the quoteData variable
  if (randomQuote.genre) {
    quoteData += `<span class="year">${randomQuote.genre}</span>`;
  } 
   // conditional statement if there is a "img" property to change the background img that matches the quote based on the title img name and the random number/quote used
  if (randomQuote.img) {
    document.body.style.backgroundImage = `url('css/img/${randomQuote.img}.jpg')`;
  }
  // finally manipulating the DOM with ID of quote-box to inject the content of the quoteData variable
  document.getElementById('quote-box').innerHTML = quoteData;
}

// Auto-refreshed quotes after 10 seconds
window.setInterval(printQuote, 10000 );

/*************************************************
 * click event listener for the print quote button
*************************************************/

document.getElementById('load-quote').addEventListener("click", printQuote, false);