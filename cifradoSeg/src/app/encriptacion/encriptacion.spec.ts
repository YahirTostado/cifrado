import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encriptacion } from './encriptacion';

describe('Encriptacion', () => {
  let component: Encriptacion;
  let fixture: ComponentFixture<Encriptacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encriptacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encriptacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
