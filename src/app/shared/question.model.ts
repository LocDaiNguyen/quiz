export interface Question {
  id: number;
  type: string;
  question: string;
  image: string;
  answers: {answer: string, correct: boolean}[];
}
