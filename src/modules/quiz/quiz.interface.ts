export interface IQuiz {
  title: string;
  user_id: string;
  created_at: Date;
  description: string;
  encrypted_data: string;
  rules: any
}

export type QuizRules = {
  grade: string;
  compare: string;
  message?: string;
  title?: string;
}
