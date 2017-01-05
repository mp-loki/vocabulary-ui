import { Component, OnInit } from '@angular/core';
import { Profile } from './model/profile';
import { ProfileService } from './service/profile.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/profile" routerLinkActive="active">Profile</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vocabulary';
  profile: Profile;

  constructor(
    private router: Router,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().then(profile => {
      this.profile = profile;
      if (typeof profile.nativeLanguage === 'undefined'
        || profile.nativeLanguage == null || profile.nativeLanguage === null) {
        this.router.navigateByUrl('/profile/create-profile');
      }
    });
  }
}
