import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffComponent } from './aff.component';

describe('AffComponent', () => {
  let component: AffComponent;
  let fixture: ComponentFixture<AffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
