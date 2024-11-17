import React, { useState } from 'react';
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';
import QuizMode from './components/QuizMode';
import ProgressReport from './components/ProgressReport';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [quizResults, setQuizResults] = useState({ correct: 0, incorrect: 0 });



  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  const updateQuizResults = (correct, incorrect) => {
    setQuizResults({ correct, incorrect });
  };

  return (
    <div>
      <h1>Study Flashcards App</h1>
      <FlashcardForm onAddFlashcard={addFlashcard} />
      <FlashcardList flashcards={flashcards} />
      <QuizMode flashcards={flashcards} onUpdateResults={updateQuizResults} />
      <ProgressReport results={quizResults} />
    </div>
  );
};

export default App;
