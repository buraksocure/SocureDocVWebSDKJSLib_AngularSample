import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocureComponent } from './socure.component';

describe('SocureComponent', () => {
  let component: SocureComponent;
  let fixture: ComponentFixture<SocureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
