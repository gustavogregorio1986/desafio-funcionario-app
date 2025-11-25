import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTrabalhandoComponent } from './buscar-trabalhando.component';

describe('BuscarTrabalhandoComponent', () => {
  let component: BuscarTrabalhandoComponent;
  let fixture: ComponentFixture<BuscarTrabalhandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarTrabalhandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarTrabalhandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
