import { Component, Injector, OnInit } from '@angular/core';
import { AbstractProfileComponent } from './abstract-profile.component';
import { Language } from '../../model/language';

@Component({
  moduleId: module.id,
  selector: 'select-language-studies',
  templateUrl: '../../view/select-language-studies.component.html',
})
export class SelectLanguageStudiesComponent extends AbstractProfileComponent implements OnInit {
  
  constructor(injector: Injector) {
    super(injector);
  }
  
  ngOnInit(): void {
    this.getLanguages();
   // this.getProfile();    
  }
  
  getNonNativeLanguages():Language[] {
    let nativeLangIdx = this.languages.indexOf(this.profile.nativeLanguage);
    let nonNativeLangs = this.languages.slice(0);
    nonNativeLangs.splice(nativeLangIdx, 1);
    return nonNativeLangs;
  }
}