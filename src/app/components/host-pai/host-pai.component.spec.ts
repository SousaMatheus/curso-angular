import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPaiComponent } from './host-pai.component';

describe('HostPaiComponent', () => {
  let component: HostPaiComponent;
  let fixture: ComponentFixture<HostPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostPaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
