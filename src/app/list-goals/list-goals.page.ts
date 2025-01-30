import { Component, OnInit } from '@angular/core';
import { GoalsService } from 'src/app/services/goals.serivice';

interface Goal {
  title: string;
  expanded?: boolean;
  category?: string;
  skinType?: string;
  skinConcerns?: string;
  skinConditions?: string;
}

@Component({
  selector: 'app-list-goals',
  templateUrl: './list-goals.page.html',
  styleUrls: ['./list-goals.page.scss'],
  standalone: false,
})
export class ListGoalsPage implements OnInit {

  selectedSegment = 'all';
  goals: Goal[] = [
    { title: 'My Skin Care - Goal' },
    { title: 'Soft Hair Care Goal' },
    { 
      title: 'Health & Wellness Goal',
      expanded: true,
      category: 'Skin',
      skinType: 'Oily Skin',
      skinConcerns: 'Acne or breakouts',
      skinConditions: 'Eczema'
    }
  ];

  toggleGoal(goal: Goal) {
    goal.expanded = !goal.expanded;
  }

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  isSkinExpanded = false;

  skinToggleExpand() {
    this.isSkinExpanded = !this.isSkinExpanded;
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  hasGoals = false;
  addedGoals: any = [];
  
    constructor(private goalsService: GoalsService) {}
  
    ngOnInit() {
      this.goalsService.getGoals().subscribe(goals => {
        this.hasGoals = goals.length > 0;
        console.warn(goals);
        this.addedGoals = goals;
      });
    }

}
