import { TestBed } from '@angular/core/testing';

import { LoginapiService } from './loginapi.service';

describe('LoginapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginapiService = TestBed.get(LoginapiService);
    expect(service).toBeTruthy();
  });
});
