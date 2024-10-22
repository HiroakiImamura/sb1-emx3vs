import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: {
    questionText: string;
    answerOptions: { answerText: string; isCorrect: boolean }[];
  };
  onAnswerClick: (isCorrect: boolean) => void;
  currentQuestion: number;
  totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswerClick,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div>
      <div className="mb-4 text-sm text-gray-600">
        問題 {currentQuestion} / {totalQuestions}
      </div>
      <h2 className="text-xl font-semibold mb-4">{question.questionText}</h2>
      <div className="space-y-3">
        {question.answerOptions.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(answer.isCorrect)}
            className="w-full text-left p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-between group"
          >
            <span>{answer.answerText}</span>
            {answer.isCorrect ? (
              <CheckCircle2 className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            ) : (
              <XCircle className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;