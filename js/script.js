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

// create variable intVal to be used later for setInterval
let intVal;

// Initialise random quote to screen and setInterval timer
printQuote();
interVal();

/******************************
 * `getRandomQuote` function
*******************************/

function getRandomQuote() {
  // assign a random number between 0 - 5 to a variable
  const randomNumber = Math.floor(Math.random() * 5);
  // use the random number to return an object from the quotes array
  return quotes[randomNumber]; 
}


/**************************
 * `printQuote` function
***************************/

function printQuote() {

  // assign the getRandomQuote function created previously to the randomQuote variable
  const randomQuote = getRandomQuote();

  // created a variable to hold the HTML ID 'quote-box'
  let quoteBox = document.getElementById('quote-box');

  // create a variable and assing a template literal with the relevant html fields, the randomQuote variable accessing the relevant properties
  let quoteData = 
  `<p class="quote">${randomQuote.quote}</p>
   <p classs="source">${randomQuote.source}`;

  
  if (randomQuote.quote === quoteBox.firstElementChild.innerHTML) {
      printQuote();
    } else {
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
    quoteBox.innerHTML = quoteData;

  };

}


/**************************
 * `interVal` function
***************************/

// function used to initialise setInterval timer at start
function interVal() {
intVal = setInterval(printQuote, 10000);
return intVal;
}



/*************************************************
 * click event listener for the print quote button
*************************************************/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);

document.getElementById('load-quote').addEventListener("click", function() {
  clearInterval(intVal);
  printQuote();
  intVal = setInterval(printQuote, 10000); // Auto-refreshed quotes after 20 seconds
});