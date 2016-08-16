
function _catch (callback) {
  return function (error) {
    callback(error, null);
    throw error;
  };
}

function _then (callback) {
  return function (result) {
    callback(null, result);
    return result;
  };
}


function Fyp (promise) {
  return function (callback) {
    return promise
      .catch(_catch(callback))
      .then(_then(callback));
  }
}

Fyp.then = _then;
Fyp.catch = _catch;

module.exports = Fyp;
