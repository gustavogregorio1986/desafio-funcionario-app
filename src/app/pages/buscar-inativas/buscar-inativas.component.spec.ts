import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarInativasComponent } from './buscar-inativas.component';

describe('BuscarInativasComponent', () => {
  let component: BuscarInativasComponent;
  let fixture: ComponentFixture<BuscarInativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarInativasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarInativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
