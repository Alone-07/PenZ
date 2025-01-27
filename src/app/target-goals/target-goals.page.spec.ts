import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetGoalsPage } from './target-goals.page';

describe('TargetGoalsPage', () => {
  let component: TargetGoalsPage;
  let fixture: ComponentFixture<TargetGoalsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetGoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
