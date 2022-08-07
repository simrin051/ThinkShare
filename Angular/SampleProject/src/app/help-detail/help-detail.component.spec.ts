import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDetailComponent } from './help-detail.component';

describe('HelpDetailComponent', () => {
  let component: HelpDetailComponent;
  let fixture: ComponentFixture<HelpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
