const http = require('http');

function Requester() {
}

Requester.prototype.getApiData = function() {
  var promise = new Promise(function(resolve, reject) {
    var url = "http://ratings.food.gov.uk/authorities/xml"

    http.get(url, (res) => {
        let rawData = '';
        res.on('data', function(chunk) {
          rawData += chunk;
        });
        res.on('end', function() {
          resolve(rawData);
        });
      });


    });
    return promise;
};

module.exports = Requester;
