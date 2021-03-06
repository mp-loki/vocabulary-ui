import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { ProfileService } from './service/profile.service';
import { LanguageService } from './service/language.service';
import { StudyService } from './service/study.service';
import { HeroSearchComponent } from './hero-search.component';
import { AddVocabularyEntryComponent } from './component/study/add-vocabulary-entry.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    AddVocabularyEntryComponent,
    routedComponents
  ],
  providers: [
    HeroService,
    ProfileService,
    LanguageService,
    StudyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
