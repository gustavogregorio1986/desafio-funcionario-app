import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEnfermeiraComponent } from './buscar-enfermeira.component';

describe('BuscarEnfermeiraComponent', () => {
  let component: BuscarEnfermeiraComponent;
  let fixture: ComponentFixture<BuscarEnfermeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarEnfermeiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarEnfermeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
