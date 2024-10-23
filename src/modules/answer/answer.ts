import { IAnswer } from "./answer.interface";

export class Answer implements IAnswer {
  id: string;
  title: string;
  user_id: string;
  idQuiz: string;
  idConsultor: string;
  created_at: Date;
  encrypted_data: string;
  type: string;
  description: string;
  rules: any;
}
