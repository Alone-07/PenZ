import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGoalsPage } from './list-goals.page';

describe('ListGoalsPage', () => {
  let component: ListGoalsPage;
  let fixture: ComponentFixture<ListGoalsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
