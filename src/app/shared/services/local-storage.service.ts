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

  get(key:string):any {
    try {
      const token = localStorage.getItem(key)
      if(typeof(token)=="string"){
        return JSON.parse(token)
      }
    } catch (error) {
      console.log('Error in getting data from local storage', error);
    }
  }
}
