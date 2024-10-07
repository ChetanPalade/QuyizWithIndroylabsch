import React, { useState } from 'react';

const MobileScreen = ({ question, handleAnswerSubmit, setCurrentScreen, feedback, selectedAnswer, setSelectedAnswer, addPlayer }) => {
  const [playerName, setPlayerName] = useState('');

  const submitAnswer = () => {
    handleAnswerSubmit(selectedAnswer);
  };

  return (
    <div className="mobile-screen">
      <h2>{question.question}</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => setSelectedAnswer(option)}
          className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
        >
          {option}
        </button>
      ))}
      <button className="button" onClick={() => {
        if (playerName) {
          addPlayer(playerName);
          submitAnswer();
        } else {
          alert('Please enter your name before submitting your answer.');
        }
      }} disabled={!selectedAnswer}>
        Submit Answer
      </button>
      <div className="feedback">{feedback}</div>
      <button className="button" onClick={() => setCurrentScreen('main')}>Back to Main Screen</button>
    </div>
  );
};

export default MobileScreen;



