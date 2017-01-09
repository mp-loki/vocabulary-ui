import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from '../../model/language';
import { Study } from '../../model/study';
import { Quiz } from '../../model/quiz';
import { QuizQuestion } from '../../model/quiz-question';
import { VocabularyPair } from '../../model/vocabulary-pair';
import { StudyService } from '../../service/study.service';
import { AbstractComponent } from '../abstract.component';

@Component({
  moduleId: module.id,
  selector: 'quiz-component',
  templateUrl: '../../view/html/quiz.component.html',
})
export class QuizComponent extends AbstractComponent implements OnInit, OnDestroy {


  lang: string;
  studiedLanguage: Language;
  study: Study;
  quiz: Quiz;

  answered: boolean;
  correct: boolean;
  quizOver: boolean;
  currentQuestionIdx: number;
  currentQuestion: QuizQuestion;
  selectedOption: VocabularyPair;

  private sub: any;

  constructor(injector: Injector,
    private studyService: StudyService,
    private route: ActivatedRoute) {
    super(injector);
  }

  isSelected(option: VocabularyPair): boolean {
    return option === this.selectedOption;
  }

  isCorrect(option: VocabularyPair): boolean {
    return this.currentQuestion.question === option;
  }

  select(event: Event, option: VocabularyPair): void {
    if (!this.answered) {
      event.stopPropagation();
      this.selectedOption = option;
      this.answered = true;
      this.correct = this.isCorrect(option);
      if (this.correct) {
        this.quiz.correct.push(this.currentQuestion);
        setTimeout(this.proceedToNextQuestion, 700, this);
      } else {
        this.quiz.incorrect.push(this.currentQuestion);
      }
    }
  }

  tap() {
    if (this.answered) {
      this.proceedToNextQuestion(this);
    }
  }

  getTotalNumber(): number {
    if (this.quiz) {
      return this.quiz.questions.length;
    }
    return 0;
  }

  getCorrectPrcentage(): number {
    if (this.quiz.questions.length === 0) {
      return null;
    }
    return (this.quiz.correct.length / this.quiz.questions.length) * 100;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.lang = params['language'];
      let studyLanguage = this.languageService.getLanguageByName(this.lang);
      this.profileService.getProfile().then(profile => {
        this.profile = profile;
        this.study = this.studyService.getStudy(studyLanguage, this.profile.nativeLanguage);
        this.quiz = this.studyService.getQuiz(this.study);
        this.currentQuestionIdx = 0;
        this.currentQuestion = this.quiz.questions[this.currentQuestionIdx];
        this.answered = false;
        this.correct = false;
        this.quizOver = false;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private endQuiz(): void {
    this.quizOver = true;
  }
  private proceedToNextQuestion(component: QuizComponent): void {
    component.answered = false;
    component.correct = false;
    component.selectedOption = null;
    component.currentQuestionIdx++;
    if (component.currentQuestionIdx === component.quiz.questions.length) {
      component.endQuiz();
    } else {
      component.currentQuestion = component.quiz.questions[component.currentQuestionIdx];
    }
  }
}
}
