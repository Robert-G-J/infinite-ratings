const URL = 'http://api.ratings.food.gov.uk/Establishments?localAuthorityId=100&pageSize=1758&pageNumber=1`';

beforeEach(function() {
	spyOn(XMLHttpRequest.prototype, 'open');
	spyOn(XMLHttpRequest.prototype, 'send');
  spyOn(XMLHttpRequest.prototype, 'setRequestHeader');
});

describe('Api fetcher', function() {
  it('opens xhr request', function() {
    var api  = new Api();
    api.get(URL, (json) => {console.log(json)});
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
  });

  it('sets xhr header', function() {
    var api  = new Api();
    api.get(URL, (json) => {console.log(json)});
    expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalled();
  });

  it('sends xhr request', function() {
    var api  = new Api();
    api.get(URL, (json) => {console.log(json)});
    expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
  });
});