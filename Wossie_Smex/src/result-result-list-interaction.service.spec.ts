import { TestBed } from '@angular/core/testing';

import { ResultResultListInteractionService } from './result-result-list-interaction.service';

describe('ResultResultListInteractionService', () => {
  let service: ResultResultListInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultResultListInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
