import { TestBed, async, inject } from '@angular/core/testing';

import { VisiteurGuard } from './visiteur.guard';

describe('VisiteurGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisiteurGuard]
    });
  });

  it('should ...', inject([VisiteurGuard], (guard: VisiteurGuard) => {
    expect(guard).toBeTruthy();
  }));
});
