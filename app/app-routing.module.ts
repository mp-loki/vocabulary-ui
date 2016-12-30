import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CreateProfileComponent } from './component/profile/create-profile.component';
import { SelectLanguageStudiesComponent } from './component/profile/select-language-studies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  HeroesComponent,
  HeroDetailComponent,
  ProfileComponent,
  CreateProfileComponent,
  SelectLanguageStudiesComponent
];
