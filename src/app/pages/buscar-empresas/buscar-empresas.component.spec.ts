import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEmpresasComponent } from './buscar-empresas.component';

describe('BuscarEmpresasComponent', () => {
  let component: BuscarEmpresasComponent;
  let fixture: ComponentFixture<BuscarEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
