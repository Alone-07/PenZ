import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Goal {
  categoryId: number;
  categoryName: string;
  questions: any[];
  // Add other relevant goal properties
}

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  private goals: Goal[] = [];
  private goalsSubject = new BehaviorSubject<Goal[]>([]);

  constructor() {}

  addGoal(goal: Goal) {
    this.goals.push(goal);
    this.goalsSubject.next(this.goals);
  }

  getGoals(): Observable<Goal[]> {
    return this.goalsSubject.asObservable();
  }

  hasGoals(): boolean {
    return this.goals.length > 0;
  }
}