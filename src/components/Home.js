import { useEffect, useState } from 'react';

function Home() {

  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then((res) => res.json())
    .then((data) => {
      let randoNum = Math.floor(Math.random() * data.length);
      setQuote(data[randoNum]);
    });
};

  useEffect(() => {
    getQuote();
  }, []);
  
  return (
    <div>

      <div className='Intro Text'>
      <h1>Random Simpsons Quote Generator</h1>
      <h4>Get a fun surprise quote directly from your favorite iconic Simpson character!</h4>
      </div>

      <div className='QuoteResults'>
        <p><i>"{quote.quote}"</i></p>
        <p>-{quote.character}</p>
        <img src={quote.image} />
      </div>

    </div>
  )
}

export default Home;