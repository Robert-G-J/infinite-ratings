function Rating() {
  this.scores = {};
};
// iterates through the retrieved json, taking each establishment and running addScore
Rating.prototype.saveScores = function(json) {
  json.establishments.forEach((est) => {
    this._addScore(est.RatingValue);
  });
};

// checks if rating exists in obj and increments it, if not making it one.
Rating.prototype._addScore = function(ratingValue) {
  if (this.scores.hasOwnProperty(ratingValue)) {
    this.scores[ratingValue] += 1;
  } else {
    this.scores[ratingValue] = 1;
  }
};