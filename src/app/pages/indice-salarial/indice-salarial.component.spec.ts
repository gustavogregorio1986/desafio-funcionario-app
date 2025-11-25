import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceSalarialComponent } from './indice-salarial.component';

describe('IndiceSalarialComponent', () => {
  let component: IndiceSalarialComponent;
  let fixture: ComponentFixture<IndiceSalarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceSalarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceSalarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
