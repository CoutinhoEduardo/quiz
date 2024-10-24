export interface IQuiz {
  id: string;
  title: string;
  user_id: string;
  created_at: Date;
  description: string;
  encrypted_data: string;
  type: number;
  rules: any;
  status: string;
}

export type QuizRules = {
  grade: string;
  compare: string;
  message?: string;
  title?: string;
}
