const Assert = require('assert');

const Fyp = require('./index');

const DERP = {
  error: 'quaid',
  hundred: 100
};

function makeCallback (error, done) {
  return function (error, hundred) {
    if (error) {
      Assert.equal(error, DERP.error);
    } else {
      Assert.equal(result, DERP.hundred);
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

  promiseFuck: function (done) {
    var throwPromise = Promise.reject(DERP.error);
    Fyp(throwPromise, makeCallback(true, done));
  },

  promiseYou: function (done) {
    var throwPromise = Promise.resolve(DERP.hundred);
    Fyp(throwPromise, makeCallback(false, done));
  }
}
