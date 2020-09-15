/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "May the Force be with you.",
    source: '- Obi-Wan Kenobi',
    citation:'Star Wars A New Hope',
    year: 1977
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: '- John Keating',
    citation: 'Dead Poets Society',
    year: 1989
  },
  {
    quote: "A martini. Shaken, not stirred.",
    source: '- James Bond',
    citation: 'Goldfinger',
    year: 1964
  },
  {
    quote: "Yippie-ki-yay, motherf—er!",
    source: '- John McClane', 
    citation: 'Die Hard',
    year: 1988
  },
  {
    quote: "Roads? Where we're going we don't need roads.",
    source: '- Dr. Emmett Brown',
    citation: 'Back to the Future',
    year: 1985
  }

];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

  const randomNumber = Math.floor(Math.random() * 5);
  return quotes[randomNumber];

}

/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let quoteData = 
  `<p class="quote">${randomQuote.quote}</p>
   <p classs="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    quoteData += `<span class="citation">${randomQuote.citation}</span>`;
    
  } 

  if (randomQuote.year) {
    quoteData += `<span class="year">${randomQuote.year}</span>`;
  } 

  document.getElementById('quote-box').innerHTML = quoteData;
}


printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);