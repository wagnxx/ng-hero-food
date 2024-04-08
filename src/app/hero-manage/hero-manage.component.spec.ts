import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroManageComponent } from './hero-manage.component';

describe('HeroManageComponent', () => {
  let component: HeroManageComponent;
  let fixture: ComponentFixture<HeroManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
