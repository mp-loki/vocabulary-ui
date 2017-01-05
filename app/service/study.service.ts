import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Study } from '../model/study';
import { Language } from '../model/language';
import { VocabularyPair } from '../model/vocabulary-pair';

@Injectable()
export class StudyService {

  studies: Study[] = [];
  constructor(private http: Http) { }

  getStudy(studyLanguage: Language, profileLanguage: Language): Study {
    let study = this.studies.find(st => st.studyLanguage === studyLanguage && st.profileLanguage === profileLanguage);
    if (typeof study === 'undefined') {
      study = this.getNewStudy(studyLanguage, profileLanguage);
    }
    this.studies.push(study);
    return study;
  }

  saveStudy(study: Study) {
    // TODO: save study to server
    console.log("Here the study will be saved");
  }

  private getNewStudy(studyLanguage: Language, profileLanguage: Language): Study {
    let study: Study = new Study(studyLanguage, profileLanguage);
    study.defaultBoard.vocabulary = this.getDefaultVocabulary(studyLanguage, profileLanguage);
    return study;
  }

  private getDefaultVocabulary(studyLanguage: Language, profileLanguage: Language): VocabularyPair[] {
    if (studyLanguage.code === 'fr' && profileLanguage.code === 'en') {
      return this.getDefaultFrenchVocabulary(studyLanguage, profileLanguage);
    };
    if (studyLanguage.code === 'de' && profileLanguage.code === 'en') {
      return this.getDefaultGermanVocabulary(studyLanguage, profileLanguage);
    };
    return [];
  }

  private getDefaultFrenchVocabulary(studyLanguage: Language, profileLanguage: Language): VocabularyPair[] {
    return [
      { logosA: 'être', logosALanguage: studyLanguage, logosB: 'be', logosBLanguage: profileLanguage },
      { logosA: 'avoir', logosALanguage: studyLanguage, logosB: 'have', logosBLanguage: profileLanguage },
      { logosA: 'faire', logosALanguage: studyLanguage, logosB: 'do', logosBLanguage: profileLanguage },
      { logosA: 'aller', logosALanguage: studyLanguage, logosB: 'go', logosBLanguage: profileLanguage },
      { logosA: 'prendre', logosALanguage: studyLanguage, logosB: 'take', logosBLanguage: profileLanguage },
      { logosA: 'écrire', logosALanguage: studyLanguage, logosB: 'write', logosBLanguage: profileLanguage },
      { logosA: 'lire', logosALanguage: studyLanguage, logosB: 'read', logosBLanguage: profileLanguage },
    ];
  }

  private getDefaultGermanVocabulary(studyLanguage: Language, profileLanguage: Language): VocabularyPair[] {
    return [
      { logosA: 'sein', logosALanguage: studyLanguage, logosB: 'be', logosBLanguage: profileLanguage },
      { logosA: 'haben', logosALanguage: studyLanguage, logosB: 'have', logosBLanguage: profileLanguage },
      { logosA: 'machen', logosALanguage: studyLanguage, logosB: 'do', logosBLanguage: profileLanguage },
      { logosA: 'gehen', logosALanguage: studyLanguage, logosB: 'go', logosBLanguage: profileLanguage },
      { logosA: 'nehmen', logosALanguage: studyLanguage, logosB: 'take', logosBLanguage: profileLanguage },
      { logosA: 'schreiben', logosALanguage: studyLanguage, logosB: 'write', logosBLanguage: profileLanguage },
      { logosA: 'lesen', logosALanguage: studyLanguage, logosB: 'read', logosBLanguage: profileLanguage },
    ];
  }
}
