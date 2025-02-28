import { Exam } from "models";

export interface ExamSimulatorConfig {
  exam: Exam,
  duration: number,
  numberOfQuestions: number,
  isQuiz?: boolean
};
