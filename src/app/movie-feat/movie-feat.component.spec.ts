import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFeatComponent } from './movie-feat.component';

describe('MovieFeatComponent', () => {
  let component: MovieFeatComponent;
  let fixture: ComponentFixture<MovieFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
