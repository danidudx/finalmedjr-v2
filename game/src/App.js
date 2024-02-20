import React, { useState, useEffect } from 'react';
import './App.css';

const cardsData = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

const App = () => {
  const [cards, setCards] = useState(generateLevelOneCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [level, setLevel] = useState(1);
  const [congratulations, setCongratulations] = useState(false);

  useEffect(() => {
    setFlippedIndices([]);
    setMatchedPairs([]);
    setCongratulations(false);

    if (level <= 10) {
      setCards(generateLevelCards(level));
    }
  }, [level]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [index1, index2] = flippedIndices;
      if (cards[index1] !== cards[index2]) {
        // If the cards don't match, flip them back after a short delay
        setTimeout(() => setFlippedIndices([]), 1000);
      } else {
        setMatchedPairs([...matchedPairs, cards[index1]]);
        setFlippedIndices([]);

        // Check if all pairs are matched for the current level
        if (matchedPairs.length + 1 === cards.length / 2) {
          // Show congratulations message
          setCongratulations(true);
        }
      }
    }
  }, [flippedIndices, cards, matchedPairs, level]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  const renderCard = (index) => {
    const isFlipped = flippedIndices.includes(index) || matchedPairs.includes(cards[index]);

    return (
      <div
        className={`card ${isFlipped ? 'flipped' : ''}`}
        key={index}
        onClick={() => handleCardClick(index)}
      >
        {isFlipped && cards[index]}
      </div>
    );
  };

  function generateLevelOneCards() {
    const shuffledCards = shuffle(cardsData);
    return [...shuffledCards.slice(0, 4), ...shuffledCards.slice(0, 4)];
  }

  function generateLevelCards(level) {
    const shuffledCards = shuffle(cardsData);

    // Each level has an increasing number of cards
    const cardCount = level * 2;

    return [...shuffledCards.slice(0, cardCount), ...shuffledCards.slice(0, cardCount)];
  }

  // Fisher-Yates shuffle algorithm
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const handleNextLevelClick = () => {
    setLevel(level + 1);
  };

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      {congratulations ? (
        <div>
          <p>Congratulations! You completed Level {level}!</p>
          {level < 10 && (
            <button onClick={handleNextLevelClick}>Next Level</button>
          )}
        </div>
      ) : (
        <div>
          <p>Level: {level}</p>
          <div className="card-container">
            {cards.map((_, index) => renderCard(index))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
