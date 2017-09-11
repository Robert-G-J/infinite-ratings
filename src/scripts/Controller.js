// ties together Api and Rating constructors
function Controller(api = new Api(), rating = new Rating()) {
  this.api    = api;
  this.rating = rating;
  this.URL    = 'http://api.ratings.food.gov.uk/Establishments';
}

// wraps api call, passes id and page size
Controller.prototype.getScores = function(localAuthorityId, pageSize) {
  this.api.get(this.createRequestURL(localAuthorityId, pageSize), (json) => {
    this.rating.saveScores(json);
    console.log(this.rating.scores);
  });
};
// builds request url
Controller.prototype.createRequestURL = function(localAuthorityId, pageSize) {
  return this.URL + this._createQueryString(localAuthorityId, pageSize);
};
// build query string with authority id and page size
Controller.prototype._createQueryString = function(localAuthorityId, pageSize) {
  return `?localAuthorityId=${localAuthorityId}&pageSize=${pageSize}&pageNumber=1`;
};
