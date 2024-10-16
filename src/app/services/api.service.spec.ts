import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getSimpleValue debería devolver el texto en mayúsculas', () => {
    expect(service.getSimpleValue('hola mundo')).toBe('HOLA MUNDO');
  })

  it('getUsers debería retornar el valor de la API en forma de Observable', (done: DoneFn) => {
    service.getUsers().subscribe(value => {
      expect(value.results.length).toBe(10);
      done();
    })
  })

  it('getUsersProm debería retornar el valor de la API en forma de Promise', (done: DoneFn) => {
    service.getUsersProm().then(value => {
      expect(value.page).toBe(1);
      done();
    })
  })

});
