import { Component, Injector, OnInit } from '@angular/core';
import { Language } from '../../model/language';
import { AbstractComponent } from '../abstract.component';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: '../../view/home.component.html',
})
export class HomeComponent extends AbstractComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  openLanguageBoards(language: Language): void {
    console.log('Here the language study will open');
  }
}
