'use strict';

describe('Service: blockTemplates', function () {

  // load the service's module
  beforeEach(module('hipeWebApp'));

  // instantiate service
  var blockTemplates;
  beforeEach(inject(function (_blockTemplates_) {
    blockTemplates = _blockTemplates_;
  }));

  it('should do something', function () {
    expect(!!blockTemplates).toBe(true);
  });

});
