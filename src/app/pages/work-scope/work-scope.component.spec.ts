import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkScopeComponent } from './work-scope.component';

describe('WorkScopeComponent', () => {
  let component: WorkScopeComponent;
  let fixture: ComponentFixture<WorkScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkScopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
