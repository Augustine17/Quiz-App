import React, { useState } from "react";
import { quiz } from "./json/quiz";
import { Button } from "@mui/material";
import ToastComponent from "./components/ToastComponent";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const startQuiz = () => {
    const selectedQuestions = getRandomQuestions(7);
    setQuestions(selectedQuestions);
    setAnswers({});
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsModalOpen(true);
    setIncorrectAnswers([]);
  };

  const getRandomQuestions = (num) => {
    const shuffled = quiz.questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const handleChange = (e, index) => {
    const selectedAnswer = e.target.value;
    const updatedAnswers = {
      ...answers,
      [index]: selectedAnswer,
    };
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    const selectedAnswer = answers[currentQuestionIndex];

    if (!selectedAnswer) {
      setToastOpen(true);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
      if (selectedAnswer === correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }

      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsLoading(false);
    }, 2000);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Calculate score and gather incorrect answers
      let incorrect = [];
      let correct = 0;

      questions.forEach((question, index) => {
        const correctAnswer = question.correctAnswer;
        const selectedAnswer = answers[index];

        if (selectedAnswer === correctAnswer) {
          correct++;
        } else {
          incorrect.push({
            question: question.question,
            selectedAnswer,
            correctAnswer,
          });
        }
      });

      setScore(correct);
      setIncorrectAnswers(incorrect);
      setIsModalOpen(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleCloseToast = () => {
    setToastOpen(false);
  };

  const restartQuiz = () => {
    setIsModalOpen(false);
    startQuiz();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button onClick={startQuiz} variant="outlined">
        Start Quiz
      </Button>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        score={score}
        questions={questions}
        incorrectAnswers={incorrectAnswers}
        currentQuestionIndex={currentQuestionIndex}
        answers={answers}
        handleNext={handleNext}
        isLoading={isLoading}
        toastOpen={toastOpen}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        startQuiz={restartQuiz}
      />

      <ToastComponent
        toastOpen={toastOpen}
        handleCloseToast={handleCloseToast}
      />
    </div>
  );
}

export default App;
