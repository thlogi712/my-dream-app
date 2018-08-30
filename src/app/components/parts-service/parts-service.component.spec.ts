import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsServiceComponent } from './parts-service.component';

describe('PartsServiceComponent', () => {
  let component: PartsServiceComponent;
  let fixture: ComponentFixture<PartsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
