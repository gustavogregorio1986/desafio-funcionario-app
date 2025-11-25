import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarConcluidosComponent } from './buscar-concluidos.component';

describe('BuscarConcluidosComponent', () => {
  let component: BuscarConcluidosComponent;
  let fixture: ComponentFixture<BuscarConcluidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarConcluidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarConcluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
