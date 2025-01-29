import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGoalsPage } from './edit-goals.page';

describe('EditGoalsPage', () => {
  let component: EditGoalsPage;
  let fixture: ComponentFixture<EditGoalsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
