const list = [
  {
    author: 'Lao Tzu',
    quote: 'The journey of a thousand miles begins with one step.'
  },
  {
    author: 'Friedrich Nietzsche',
    quote: 'That which does not kill us makes us stronger.'
  },
  {
    author: 'John Lennon',
    quote: 'Life is what happens when you\'re busy making other plans.'
  },
  {
    author: 'Joe Kennedy',
    quote: 'When the going gets tough, the tough get going.'
  },
  {
    author: 'Mahatma Gandhi',
    quote: 'You must be the change you wish to see in the world.'
  },
  {
    author: 'Mae West',
    quote: 'You only live once, but if you do it right, once is enough.'
  },
  {
    author: 'Robert H. Schuller',
    quote: 'Tough times never last but tough people do.'
  },
  {
    author: 'Stephen King',
    quote: 'Get busy living or get busy dying.'
  },
  {
    author: 'Henry Ford',
    quote: 'Whether you think you can or you think you can\'t, you\'re right.'
  },
  {
    author: 'Alrded Lord Tennyson',
    quote: 'Tis better to have loved and lost than to have never loved at all.'
  }
];

const button = document.getElementById('button');
let divQuote = document.getElementById('quote');

const displayQuotes = () => {

  let randomNr = Math.floor(Math.random() * list.length);

  divQuote.innerHTML = `${list[randomNr].quote} - ${list[randomNr].author}`;
}

button.addEventListener('click', displayQuotes);
