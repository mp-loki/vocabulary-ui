import { Injector, OnInit } from '@angular/core';
import { Profile } from '../../model/profile';
import { Language } from '../../model/language';
import { ProfileService } from '../../service/profile.service';
import { LanguageService } from '../../service/language.service';
import { Router } from '@angular/router';

export class AbstractProfileComponent implements OnInit {
   
  protected router: Router;
  protected profileService: ProfileService;
  protected languageService: LanguageService;
  
  profile: Profile;
  languages: Language[];
  
  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.profileService = injector.get(ProfileService);
    this.languageService = injector.get(LanguageService);
  }
  
  getProfile(): void {
    this.profileService.getProfile().then(profile => {
      this.profile = profile;
      this.profile.nativeLanguage = this.languages[0];
    });
  }
  
  getLanguages(): void {
    this.languages = this.languageService.getLanguages();
  }
  
  ngOnInit(): void {
    this.getLanguages();
    this.getProfile(); 
  }
}