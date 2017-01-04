import { Component, Injector, OnInit } from '@angular/core';
import { AbstractProfileComponent } from './abstract-profile.component';

@Component({
  moduleId: module.id,
  selector: 'create-profile',
  templateUrl: '../../view/create-profile.component.html',
})
export class CreateProfileComponent extends AbstractProfileComponent implements OnInit {
  
  constructor(injector: Injector) {
    super(injector);
  }
      
  proceed():void {
    this.profileService.saveTempProfile(this.profile);
    this.router.navigateByUrl('profile/select-language-studies');
  }
}