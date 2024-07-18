import React from "react";
import { Button } from "@mui/material";

export default function ScoreScreen({ incorrectAnswers, startQuiz }) {
  return (
    <>
      <div className="mt-2">
        <div variant="subtitle1">Incorrect Answers:</div>
        {incorrectAnswers.map((answer, index) => (
          <div key={index} className="mt-1">
            <div className="text-lg text-textPrimary font-semibold mt-2">
              Question: {answer.question}
            </div>
            <div className="text-red-600 text-base font-medium mt-1">
              Your Answer: {answer.selectedAnswer}
            </div>
            <div className="text-green-500 text-base font-medium mt-1">
              Correct Answer: {answer.correctAnswer}
            </div>
            <hr className="my-3 h-px text-textPrimary" />
          </div>
        ))}
      </div>
      <Button onClick={startQuiz} variant="outlined" sx={{ mt: 2 }}>
        Restart Quiz
      </Button>
    </>
  );
}
