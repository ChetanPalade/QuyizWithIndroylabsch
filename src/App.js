
import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import MobileScreen from './components/MobileScreen';
import QRCodeComponent from './components/QRCodeComponent';
import Timer from './components/Timer';
import './App.css';

const questions = [
  {
    question: "Who developed the theory of relativity?",
    options: [ "A) Newton", "B) Einstein", "C) Galilio", "D) Tesla"],
    correct: "B) Einstein",
  },

  {
    question: "Which planet is known as the Red Planet",
    options:  [ "A) Earth", "B) Mars", "C) Jupiter", "D) Venus"],
    correct:  "B) Mars",
  },

  {
    question:"Which element has the chemical Symbol 'O' ?",
    options: [ "A) Ozone", "B) Osmium", "C) Oxygen", "D) Oganesson"],
    correct: "C) Oxygen",
  },

  {
    question: "Who wrote 'Hamlet' ?",
    options: [ "A) Charles Dickens", "B) Jane Austen", "C) William Shakespeare", "D) Mark Twain"],
    correct: "C) William Shakespeare",
  },

  {
    question: "What is the Largest ocean on Earth?",
    options: [ "A) Atlantic", "B) Indian", "C) Arctic", "D) Pacific"],
    correct: "D) Pacific",
  }
];

function App() {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScreen, setCurrentScreen] = useState('main');
  const [feedback, setFeedback] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timerKey, setTimerKey] = useState(0)
  const addPlayer = (name) => {
    setPlayers([...players, { name, score: 0 }]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback('');
      setSelectedAnswer('');
    } else {
      alert("Game Over! Thanks For Playing");
      setCurrentScreen('main');
    }
  };

  const handleAnswerSubmit = (answer) => {
    if (answer === questions[currentQuestionIndex].correct) {
      alert("Correct!Next Question Coming up");
     
      nextQuestion();
    } else {
      setFeedback("Wrong answer!");
    }
    setTimeout(() => {
      setCurrentQuestionIndex((prev) => prev+1);
      setTimerKey(timerKey+ 1)
    }, 2000)
  };

  const handleTimeup = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setTimerKey(timerKey + 1);
  }

  return (
    <div className="App">
      {currentScreen === 'main' ? (
        <>
          <MainScreen
            question={questions[currentQuestionIndex]}
            players={players}
            feedback={feedback}
          />
          <QRCodeComponent />
          <button className="button" onClick={() => setCurrentScreen('mobile')}>Join the Game From Here</button>
          
        </>
      ) : (
        
        <MobileScreen
          question={questions[currentQuestionIndex]}
          handleAnswerSubmit={handleAnswerSubmit}
          setCurrentScreen={setCurrentScreen}
          feedback={feedback}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          addPlayer={addPlayer}
        />
      )}
      <Timer key={timerKey} duration={30} onTimeUp={handleTimeup}/>
    </div>
  );
}

export default App;

