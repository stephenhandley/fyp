# fyp
Fuck you promises

# basically just for this type of bullshit
```
    function getSomething (path, callback) {
      var ref = Firebase.database().ref(path);
      var onValue = Fyp(ref.on('value'));
      onValue(callback);
    }
```
