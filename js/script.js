/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Movie Quote Generator
******************************************/

/******************** 
   `quotes` array 
********************/
// created an array with 5 objects containing multiple properties
const quotes = [
  {
    quote: "May the Force be with you.",
    source: '- Obi-Wan Kenobi',
    citation:'Star Wars A New Hope',
    year: 1977,
    genre: 'Science Fiction Film',
    img: 'img/img0.jpg'
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: '- John Keating',
    citation: 'Dead Poets Society Film',
    year: 1989,
    genre: 'Drama Film',
    img: 'img/img1.jpg'
  },
  {
    quote: "A martini. Shaken, not stirred.",
    source: '- James Bond',
    citation: 'Goldfinger',
    year: 1964,
    genre: 'Action Film',
    img: 'img/img2.jpg'
  },
  {
    quote: "Yippie-ki-yay, motherf—er!",
    source: '- John McClane', 
    citation: 'Die Hard',
    year: 1988,
    genre: 'Action Film',
    img: 'img/img3.jpg'
  },
  {
    quote: "Roads? Where we're going we don't need roads.",
    source: '- Dr. Emmett Brown',
    citation: 'Back to the Future',
    year: 1985,
    genre: 'Science Fiction Film',
    img: 'img/img4.jpg'
  }
];

// created variable intVal to be used later for setInterval
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

  if (randomQuote.quote === quoteBox.firstElementChild.textContent) {
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
    // conditional statement if there is a "img" property to change the "img" that matches the quote based on the title img name and the random number/quote used
    if (randomQuote.img) {
      quoteData += `<img src="${randomQuote.img}" class="image">`;      
    }
    // finally manipulating the DOM with ID of quote-box to inject the content of the quoteData variable
    quoteBox.innerHTML = quoteData;
    getRandomColor();

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

/**************************
 * `getRandomColor` function
***************************/
// function to generate a HEX code to be used for the background style:
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    // add the # to the random 6 hexidecimal values
    color += letters[Math.floor(Math.random() * 16)];
  }
  return document.body.style.backgroundColor = color;
}

/*************************************************
 * click event listener for the print quote button
*************************************************/

// event listerner on the ID 'load-quote'
document.getElementById('load-quote').addEventListener("click", function() {
  clearInterval(intVal); // clear setInterval time with each click event
  printQuote(); // call the printQuote function with a click event
  intVal = setInterval(printQuote, 10000); // Auto-refreshed quotes after 10 seconds
  getRandomColor(); // use getRandomColor variable to change background color with a click event
});