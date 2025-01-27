import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
