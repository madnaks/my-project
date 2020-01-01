import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  goals = ['Goal 1','Goal 2'];
  
  constructor() { }

  getGoal(){
    return this.goals;
  }
}
