import { IAnswer } from "./answer.interface";

export class Answer implements IAnswer{
  title: string;
  user_id: string;
  created_at: Date;
  encrypted_data: string;
  type: string;
  description: string;
}
