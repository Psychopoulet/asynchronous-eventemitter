# asynchronous-eventemitter
Asynchronous version of EventEmitter, secured by promises

## Installation

```bash
$ npm install asynchronous-eventemitter
```

## Doc

* see [node events documentation](https://nodejs.org/api/events.html)
* fire "error" event if an error has thrown in an event listener
* you can now chain "emit" events, the method return the class' pointer
* because of encapsulation, "removeListener" will not work. Please use removeAllListeners or return the right encapsuled event with "listeners" to use it.

## Examples

```js
const events = require('asynchronous-eventemitter');

new events().on("error", function(err) {
  console.log(err);
}).on("test", function(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}).emit("test", "arg1", "arg2", "arg3").emit("test2");
```

## Tests

```bash
$ gulp
```

## License

  [ISC](LICENSE)
