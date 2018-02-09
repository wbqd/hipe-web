'use strict';

describe('Controller: UpdateprojectCtrl', function () {

  // load the controller's module
  beforeEach(module('hipeWebApp'));

  var UpdateprojectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateprojectCtrl = $controller('UpdateprojectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UpdateprojectCtrl.awesomeThings.length).toBe(3);
  });
});
