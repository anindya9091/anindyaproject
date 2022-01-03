import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnindyaComponentComponent } from './anindya-component.component';

describe('AnindyaComponentComponent', () => {
  let component: AnindyaComponentComponent;
  let fixture: ComponentFixture<AnindyaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnindyaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnindyaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
