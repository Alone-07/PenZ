import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGoalsPage } from './add-goals.page';

describe('AddGoalsPage', () => {
  let component: AddGoalsPage;
  let fixture: ComponentFixture<AddGoalsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
