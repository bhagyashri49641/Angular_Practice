import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousLableComponent } from './marvellous-lable.component';

describe('MarvellousLableComponent', () => {
  let component: MarvellousLableComponent;
  let fixture: ComponentFixture<MarvellousLableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousLableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
