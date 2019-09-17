import { TestBed } from '@angular/core/testing';

import { LeagueTableService } from './league-table.service';

describe('LeagueTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeagueTableService = TestBed.get(LeagueTableService);
    expect(service).toBeTruthy();
  });
});
