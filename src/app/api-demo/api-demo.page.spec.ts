import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiDemoPage } from './api-demo.page';

describe('ApiDemoPage', () => {
  let component: ApiDemoPage;
  let fixture: ComponentFixture<ApiDemoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
