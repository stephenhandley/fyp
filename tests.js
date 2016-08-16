const Assert = require('assert');

const Fyp = require('./index');

const DERP = {
  error: 'quaid',
  hundred: 100
};

function makeCallback (shouldError, done) {
  return function (error, hundred) {
    if (shouldError) {
      Assert.equal(error, DERP.error);
    } else {
      Assert.equal(hundred, DERP.hundred);
    }
    done();
  }
}

module.exports = {
  fuck: function (done) {
    function callback (error, narp) {
      Assert.equal(error, DERP.error);
      Assert.equal(narp, null);
      done();
    };
    Promise.reject(DERP.error).catch(Fyp.catch(callback));
  },

  you: function (done) {
    function callback (error, hundred) {
      Assert.equal(error, null);
      Assert.equal(hundred, DERP.hundred);
      done();
    };
    Promise.resolve(DERP.hundred).then(Fyp.then(callback));
  },

  promises: function (done) {
    var thenPromise = Promise.resolve(DERP.hundred);
    Fyp(thenPromise)(makeCallback(false, done));
  },

  lol: function (done) {
    var throwPromise = Promise.reject(DERP.error);
    Fyp(throwPromise)(makeCallback(true, done));
  }
}
