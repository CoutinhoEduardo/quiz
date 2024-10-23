export interface IAnswer {
  id: string
  title: string;
  user_id: string;
  idConsultor: string;
  idQuiz: string;
  created_at?: Date;
  encrypted_data: string;
  description: string;
  type: string;
  rules: any;
}
