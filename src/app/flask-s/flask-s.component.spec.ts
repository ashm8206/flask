import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaskSComponent } from './flask-s.component';

describe('FlaskSComponent', () => {
  let component: FlaskSComponent;
  let fixture: ComponentFixture<FlaskSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlaskSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaskSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
