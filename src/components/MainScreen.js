
import React from 'react';

const MainScreen = ({ question, players, feedback }) => {
  return (
    <div className="main-screen">
      <h1>Quiz Game With Indrodlabs</h1>
     
        <h3>Join the game and check your knowledge</h3>
        <h2>Welcome </h2>
       
     
      <div className="feedback">{feedback}</div>
      <div className="players-section">
        <h3>Players:</h3>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainScreen;
