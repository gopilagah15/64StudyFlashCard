import React from 'react';

const ProgressReport = ({ results }) => {
  const { correct, incorrect } = results;
  const total = correct + incorrect;
  const accuracy = total > 0 ? ((correct / total) * 100).toFixed(2) : 0;

  return (
    <div>
      <h2>Progress Report</h2>
      <p>Total Attempts: {total}</p>
      <p>Correct Answers: {correct}</p>
      <p>Incorrect Answers: {incorrect}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
};

export default ProgressReport;
