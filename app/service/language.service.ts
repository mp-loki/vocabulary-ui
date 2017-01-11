import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Profile } from '../model/profile';
import { Language } from '../model/language';

const LANGUAGES: Language[] = [
  { name: 'English', code: 'en' },
  { name: 'Deutsch', code: 'de' },
  { name: 'Français', code: 'fr' },
  { name: 'Español', code: 'es' },
  { name: 'Українська', code: 'ua' },
  { name: '日本語', code: 'jp' },
];

@Injectable()
export class LanguageService {
  constructor(private http: Http) { }

  getLanguages(): Language[] {
    return LANGUAGES;
  }

  getLanguageByName(name: string): Language {
    return LANGUAGES.find(language => language.name === name);
  }

  getBoards(language: Language) {

  }
}
