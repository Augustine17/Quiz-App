import React from "react";
import { Button, CircularProgress } from "@mui/material";

export default function QuestionSection({
  handleNextOrSubmit,
  questions,
  currentQuestionIndex,
  handleChange,
  isLoading,
  toastOpen,
  answers,
}) {
  return (
    <form onSubmit={handleNextOrSubmit} className="mt-4">
      <div className="text-lg text-textPrimary font-semibold mt-2">
        Question {currentQuestionIndex + 1}:
      </div>
      <div className="text-base font-medium">
        {questions[currentQuestionIndex].question}
      </div>

      <div
        className="text-base font-medium mt-5"
        onChange={(e) => handleChange(e, currentQuestionIndex)}
      >
        {questions[currentQuestionIndex].choices.map((choice, i) => (
          <div key={i} className="flex gap-2 cursor-pointer mb-2 items-center">
            <input
              type="radio"
              id={`choice-${i}`}
              name={`question-${currentQuestionIndex}`}
              value={choice}
              checked={answers[currentQuestionIndex] === choice}
              className="cursor-pointer"
            />
            <label htmlFor={`choice-${i}`} className="cursor-pointer">
              {choice}
            </label>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          disabled={isLoading || toastOpen} // Disable button when loading or toast is open
          sx={{ ml: 2 }}
          className="w-24"
        >
          {isLoading ? (
            <CircularProgress size={24} />
          ) : currentQuestionIndex === questions.length - 1 ? (
            "Submit"
          ) : (
            "Next"
          )}
        </Button>
      </div>
    </form>
  );
}
