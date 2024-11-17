import React, { useState } from 'react';

const FlashcardForm = ({ onAddFlashcard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && answer) {
      onAddFlashcard({ question, answer });
      setQuestion('');
      setAnswer('');
    } else {
      alert('Please fill in both the question and answer.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Flashcard</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter question"
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter answer"
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default FlashcardForm;
