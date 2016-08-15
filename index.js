
function _catch (callback) {
  return function (error) {
    callback(error, null);
  };
}

function _then (callback) {
  return function (result) {
    callback(null, result);
  };
}


function Fyp (promise, callback) {
  promise
    .catch(_catch(callback))
    .then(_then(callback));
}

Fyp.then = _then;
Fyp.catch = _catch;

module.exports = Fyp;
