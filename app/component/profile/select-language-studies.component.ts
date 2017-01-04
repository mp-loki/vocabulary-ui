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
    this.getProfile();
  }

  getNonNativeLanguages(): Language[] {
    let nativeLangIdx = this.languages.indexOf(this.profile.nativeLanguage);
    let nonNativeLangs = this.languages.slice(0);
    nonNativeLangs.splice(nativeLangIdx, 1);
    return nonNativeLangs;
  }

  toggleLanguage(language: Language): void {
    if (this.isSelectedLanguage(language)) {
      this.unselectLanguage(language);
    } else {
      this.selectLanguage(language);
    }
  }

  selectLanguage(language: Language): void {
    if (typeof this.profile.languages === 'undefined' || this.profile.languages === null) {
      this.profile.languages = [];
    }
    this.profile.languages[this.profile.languages.length] = language;
  }

  unselectLanguage(language: Language): void {
    let index = this.profile.languages.indexOf(language);
    if (index >= 0) {
      this.profile.languages.splice(index, 1);
    }
  }

  isSelectedLanguage(language: Language): boolean {
    if (typeof this.profile === 'undefined' || this.profile === null
      || typeof this.profile.languages === 'undefined' || this.profile.languages === null
      || this.profile.languages.length === 0) {
      return false;
    }
    return (typeof this.profile.languages.find(lang => language.name === lang.name) !== 'undefined');
  }

  save(): void {
    this.profileService.saveProfile(this.profile);
    this.router.navigateByUrl('/');
  }
}
