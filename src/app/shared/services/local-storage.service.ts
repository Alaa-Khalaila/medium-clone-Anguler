import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: string, data: any):void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Error in setting data in local storage', error);
    }
  }

  get(key: string):any {
    try {
      return localStorage.getItem(JSON.parse(key));
    } catch (error) {
      console.log('Error in getting data from local storage', error);
    }
  }
}
