const Requester = require('../src/scripts/Requester.js')

describe('dataGetter', function() {
  it('brings back data from the api', function(done) {
    var requester  = new Requester();
    requester.getApiData().then(function(apiResponse) {
      console.log(apiResponse);
      expect(apiResponse).toBeTruthy();
      done();
    });
  }, 10000);
});
