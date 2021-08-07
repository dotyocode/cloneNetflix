import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistirComponent } from './assistir.component';

describe('AssistirComponent', () => {
  let component: AssistirComponent;
  let fixture: ComponentFixture<AssistirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
