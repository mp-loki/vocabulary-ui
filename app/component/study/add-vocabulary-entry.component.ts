import { Component, Injector, OnInit } from '@angular/core';
import { Language } from '../../model/language';
import { AbstractComponent } from '../abstract.component';
import { StudyComponent } from './study.component';
import { VocabularyPair } from '../../model/vocabulary-pair';

@Component({
  moduleId: module.id,
  selector: 'add-entry',
  templateUrl: '../../view/html/add-vocabulary-entry.component.html',
})
export class AddVocabularyEntryComponent extends AbstractComponent {

  newLogosA: string;
  newLogosB: string;

  constructor(injector: Injector,
    private parent: StudyComponent) {
    super(injector);
  }

  getStudiedLanguage(): Language {
    return this.parent.getStudiedLanguage();
  }

  savePair() {
    let vocabularyPair: VocabularyPair = new VocabularyPair(this.newLogosA, this.parent.studiedLanguage, this.newLogosB, this.profile.nativeLanguage);
    this.parent.savePair(vocabularyPair);
    this.newLogosA = null;
    this.newLogosB = null;
  }
  
  saveEnabled(): boolean {
    return !this.isEmpty(this.newLogosA) && !this.isEmpty(this.newLogosB);
  }
}