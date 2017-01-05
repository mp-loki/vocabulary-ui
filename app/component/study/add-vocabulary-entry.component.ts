import { Component, Injector, OnInit } from '@angular/core';
import { Language } from '../../model/language';
import { AbstractComponent } from '../abstract.component';

@Component({
  moduleId: module.id,
  selector: 'add-entry',
  templateUrl: '../../view/html/add-vocabulary-entry.component.html',
})
export class AddVocabularyEntryComponent extends AbstractComponent {
  
  constructor(injector: Injector) {
    super(injector);
  }
}