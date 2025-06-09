import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AportesDetalladosPage } from './aportes-detallados.page';

describe('AportesDetalladosPage', () => {
  let component: AportesDetalladosPage;
  let fixture: ComponentFixture<AportesDetalladosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AportesDetalladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
