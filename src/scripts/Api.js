function Api(xhr = new XMLHttpRequest()) {
  this.API_VERSION = 2;
  this.xhr         = xhr;
}
// wrapper function to contain xhr pattern
Api.prototype.get = function(url, callback) {
  this.xhr.open('GET', url, true);

  this.xhr.onload = function() {
    // check for success and failure
    if (this.status >= 200 && this.status < 400) {
      callback(JSON.parse(this.response));
    } else {
      console.error('Request failed');
    }
  };
  // necessary for this endpoint- will not return without it
  this.xhr.setRequestHeader('x-api-version', this.API_VERSION);
  this.xhr.send();
};

