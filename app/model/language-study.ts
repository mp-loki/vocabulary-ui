import { LanguageStudyBoard } from './language-study-board';

export class LanguageStudy {
  id: number;
  language: string;
  defaultBoard: LanguageStudyBoard;
  boards: LanguageStudyBoard[];
}
