import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HomeComponent } from './component/home/home.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CreateProfileComponent } from './component/profile/create-profile.component';
import { SelectLanguageStudiesComponent } from './component/profile/select-language-studies.component';
import { StudyComponent } from './component/study/study.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/create-profile',
    component: CreateProfileComponent
  },
  {
    path: 'profile/select-language-studies',
    component: SelectLanguageStudiesComponent
  },
  {
    path: 'study/:language',
    component: StudyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  HomeComponent,
  HeroesComponent,
  HeroDetailComponent,
  ProfileComponent,
  CreateProfileComponent,
  SelectLanguageStudiesComponent,
  StudyComponent
];
