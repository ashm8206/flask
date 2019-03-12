import { TestBed } from '@angular/core/testing';

import { FlaskServiceService } from './flask-service.service';

describe('FlaskServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlaskServiceService = TestBed.get(FlaskServiceService);
    expect(service).toBeTruthy();
  });
});
