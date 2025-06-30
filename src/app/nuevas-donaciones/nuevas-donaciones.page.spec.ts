import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevasDonacionesPage } from './nuevas-donaciones.page';

describe('NuevasDonacionesPage', () => {
  let component: NuevasDonacionesPage;
  let fixture: ComponentFixture<NuevasDonacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasDonacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
