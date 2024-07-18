import React from "react";
import { Modal, Box } from "@mui/material";
import AppCard from "./AppCard";
import QuestionSection from "./QuestionSection";
import ScoreScreen from "./ScoreScreen";

export default function ModalComponent({
  isModalOpen,
  handleClose,
  score,
  questions,
  incorrectAnswers,
  currentQuestionIndex,
  answers,
  handleNext,
  isLoading,
  toastOpen,
  handleChange,
  handleSubmit,
  startQuiz,
}) {
  const handleNextOrSubmit = (e) => {
    e.preventDefault();
    if (currentQuestionIndex === questions.length - 1) {
      handleSubmit();
    } else {
      handleNext();
    }
  };

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "80vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
        className="rounded-lg md:w-[800px] w-screen"
      >
        <AppCard>
          <div className="text-2xl font-bold">Quiz</div>
          <div className="text-xl font-semibold mt-2">
            Score: {score}/{questions.length}
          </div>

          {incorrectAnswers.length === 0 ? (
            <QuestionSection
              handleNextOrSubmit={handleNextOrSubmit}
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              handleChange={handleChange}
              isLoading={isLoading}
              toastOpen={toastOpen}
              answers={answers}
            />
          ) : (
            <ScoreScreen
              incorrectAnswers={incorrectAnswers}
              startQuiz={startQuiz}
            />
          )}
        </AppCard>
      </Box>
    </Modal>
  );
}
