# asynchronous-eventemitter
Asynchronous version of EventEmitter, secured by promises

## Installation

```bash
$ npm install asynchronous-eventemitter
```

## Doc

* see [node events documentation](https://nodejs.org/api/events.html)
* ``` on("eventerror", () => { try {} catch(e) { console.log(e); } }) : return this ``` fire if an error has thrown in a callback

note : use a "try/catch" in "eventerror" event to avoid loop

## Examples

```js
const events = require('asynchronous-eventemitter');

new events().on("eventerror", function(err) {
  console.log(err);
}).on("test", function(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}).emit("test", "arg1", "arg2", "arg3");
```

## Tests

```bash
$ gulp
```

## License

  [ISC](LICENSE)
