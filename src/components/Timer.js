import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  return (
    <div className="timer">
      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
};

export default Timer;
