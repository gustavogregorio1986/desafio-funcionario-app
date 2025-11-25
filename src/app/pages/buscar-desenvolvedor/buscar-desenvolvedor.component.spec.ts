import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDesenvolvedorComponent } from './buscar-desenvolvedor.component';

describe('BuscarDesenvolvedorComponent', () => {
  let component: BuscarDesenvolvedorComponent;
  let fixture: ComponentFixture<BuscarDesenvolvedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarDesenvolvedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDesenvolvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
