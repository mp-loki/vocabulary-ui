import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Profile } from '../model/profile';

@Injectable()
export class ProfileService {
  constructor(private http: Http) { }
  
  initProfile(): Profile {
    var profile = new Profile();
    profile.name = 'Savi';
    profile.email = 'savi@gmail.com';
    //profile.nativeLanguage = 'Zulu';
    return profile;
  }
  
  profile = this.initProfile();
  
  getProfile(): Promise<Profile> {
    return Promise.resolve(this.profile);
  }
  
  saveTempProfile(profile: Profile) {
    this.profile = profile;
  }
  
  saveProfile(profile: Profile) {
    // TODO: Save profile to server
    this.profile = profile;
  }
}
