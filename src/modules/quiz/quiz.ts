import { IQuiz, QuizRules } from "./quiz.interface";
export class Quiz implements IQuiz {
  title: string;
  user_id: string;
  description: string;
  created_at: Date;
  encrypted_data: string;
  rules: any;
}
