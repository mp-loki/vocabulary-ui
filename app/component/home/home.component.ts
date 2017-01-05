import { Component, Injector } from '@angular/core';
import { Language } from '../../model/language';
import { AbstractComponent } from '../abstract.component';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: '../../view/html/home.component.html',
})
export class HomeComponent extends AbstractComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  openLanguageBoards(language: Language): void {
    this.router.navigateByUrl('/study/' + language.name);
  }
}
