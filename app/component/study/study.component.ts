import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from '../../model/language';
import { Study } from '../../model/study';
import { VocabularyPair } from '../../model/vocabulary-pair';
import { StudyService } from '../../service/study.service';
import { AbstractComponent } from '../abstract.component';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: '../../view/html/study.component.html',
})
export class StudyComponent extends AbstractComponent implements OnInit, OnDestroy {

  lang: string;
  studiedLanguage: Language;
  study: Study;
  private sub: any;

  constructor(injector: Injector,
    private studyService: StudyService,
    private route: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.lang = params['language'];
      let studyLanguage = this.languageService.getLanguageByName(this.lang);
      this.profileService.getProfile().then(profile => {
        this.profile = profile;
        this.study = this.studyService.getStudy(studyLanguage, this.profile.nativeLanguage);
      }
      );
    });
  }

  getStudiedLanguage(): Language {
    return this.languageService.getLanguageByName(this.lang);
  }

  savePair(vocabularyPair: VocabularyPair) {
    this.study.defaultBoard.vocabulary.unshift(vocabularyPair);
    this.studyService.saveStudy(this.study);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
