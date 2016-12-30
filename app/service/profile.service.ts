import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Profile } from '../model/profile';

@Injectable()
export class ProfileService {
  constructor(private http: Http) { }
  
  initProfile(): Profile {
    var profile = new Profile();
    profile.name = 'Alisa';
    profile.email = 'alisa@gmail.com';
    //profile.nativeLanguage = 'Zulu';
    return profile;
  }
  
  profile = this.initProfile();
  
  getProfile(): Promise<Profile> {
    return Promise.resolve(this.profile);
  }
}
