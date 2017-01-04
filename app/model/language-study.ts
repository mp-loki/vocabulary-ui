import { LanguageStudyBoard } from './language-study-board';
import { Language } from './language';

export class LanguageStudy {
  
  id: number;
  language: Language;
  defaultBoard: LanguageStudyBoard;
  boards: LanguageStudyBoard[];
  
  constructor(language: Language) {
    this.language = language;
    this.defaultBoard = new LanguageStudyBoard(language.name + '-Default');
  }  
}
