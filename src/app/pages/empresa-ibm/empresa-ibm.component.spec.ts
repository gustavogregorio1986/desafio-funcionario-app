import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaIbmComponent } from './empresa-ibm.component';

describe('EmpresaIbmComponent', () => {
  let component: EmpresaIbmComponent;
  let fixture: ComponentFixture<EmpresaIbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaIbmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaIbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
