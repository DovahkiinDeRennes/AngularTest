import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pseudoGuard } from './pseudo.guard';

describe('pseudoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pseudoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
