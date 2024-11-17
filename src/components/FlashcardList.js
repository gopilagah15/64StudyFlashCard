import React from 'react';

const FlashcardList = ({ flashcards }) => {
  return (
    <div>
      <h2>Flashcard List</h2>
      {flashcards.length === 0 ? (
        <p>No flashcards created yet.</p>
      ) : (
        <ul>
          {flashcards.map((flashcard, index) => (
            <li key={index}>
              <strong>Q:</strong> {flashcard.question} <br />
              <strong>A:</strong> {flashcard.answer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlashcardList;
