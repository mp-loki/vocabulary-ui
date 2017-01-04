import { QuizPair } from './quiz-pair';

export class LanguageStudyBoard {
  
  constructor(name:string) {
    this.name = name;
  }
  name: string;
  quizStatements: QuizPair[];
}
