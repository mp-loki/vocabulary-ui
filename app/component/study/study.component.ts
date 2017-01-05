import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from '../../model/language';
import { AbstractComponent } from '../abstract.component';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: '../../view/html/study.component.html',
})
export class StudyComponent extends AbstractComponent implements OnInit, OnDestroy {

  lang: string;
  private sub: any;

  constructor(injector: Injector,
    private route: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.lang = params['language'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
