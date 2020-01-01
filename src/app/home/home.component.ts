import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnString: string = 'Add Item';
  goalText: string = 'My first life goal';
  goals = [];

  constructor(private router: Router, private dataService: DataService) {
    this.goals = this.dataService.getGoal();
  }

  ngOnInit() {
    this.itemCount = this.dataService.goals.length;
  }

  addItem() {
    //this.goals.push(this.goalText);
    this.dataService.goals.push(this.goalText);
    this.goalText = '';
    //this.itemCount = this.goals.length;
    this.itemCount = this.dataService.goals.length;
  }

}
