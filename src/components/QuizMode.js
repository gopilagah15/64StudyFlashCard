import React, { useState } from 'react';

const QuizMode = ({ flashcards, onUpdateResults }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < flashcards.length) {
      setCurrentIndex(nextIndex);
    } else {
      alert('Quiz completed!');
      onUpdateResults(correctAnswers, incorrectAnswers);
      setCurrentIndex(0);
      setShowAnswer(false);
    }
  };

  if (flashcards.length === 0) {
    return <p>No flashcards available for quiz mode.</p>;
  }

  const flashcard = flashcards[currentIndex];

  return (
    <div>
      <h2>Quiz Mode</h2>
      <p><strong>Q:</strong> {flashcard.question}</p>
      {showAnswer && <p><strong>A:</strong> {flashcard.answer}</p>}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      <button onClick={() => handleAnswer(true)}>Correct</button>
      <button onClick={() => handleAnswer(false)}>Incorrect</button>
    </div>
  );
};

export default QuizMode;
