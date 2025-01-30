import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target-goals',
  templateUrl: './target-goals.page.html',
  styleUrls: ['./target-goals.page.scss'],
  standalone: false,
})
export class TargetGoalsPage implements OnInit {

  selectedDate: string = '';
  constructor() { }

  ngOnInit() {
  }

  handleDateChange(event: any) {
    this.selectedDate = event.detail.value;
    console.log('Selected date:', this.selectedDate);
  }
}
