import { Component, OnInit } from '@angular/core';
import { GoalsService } from 'src/app/services/goals.serivice';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  standalone: false,
})
export class GoalsComponent  implements OnInit {

  hasGoals = false;
  addedGoals: any = [];

  constructor(private goalsService: GoalsService) {}

  ngOnInit() {
    this.goalsService.getGoals().subscribe(goals => {
      this.hasGoals = goals.length > 0;
      this.addedGoals = goals;
    });
  }

}
