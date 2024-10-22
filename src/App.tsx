import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import QuizQuestion from './components/QuizQuestion';
import quizData from './data/quizData';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center">
          <Brain className="mr-2" /> AI生成クイズ
        </h1>
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">クイズ完了！</h2>
            <p className="text-xl mb-4">
              あなたのスコア: {score} / {quizData.length}
            </p>
            {score === quizData.length ? (
              <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
            ) : (
              <XCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
            )}
            <button
              onClick={restartQuiz}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center mx-auto"
            >
              <RefreshCw className="mr-2" /> もう一度挑戦
            </button>
          </div>
        ) : (
          <QuizQuestion
            question={quizData[currentQuestion]}
            onAnswerClick={handleAnswerClick}
            currentQuestion={currentQuestion + 1}
            totalQuestions={quizData.length}
          />
        )}
      </div>
    </div>
  );
}

export default App;