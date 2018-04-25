# asynchronous-eventemitter
Asynchronous version of EventEmitter, secured by promises

[![Build Status](https://api.travis-ci.org/Psychopoulet/asynchronous-eventemitter.svg?branch=master)](https://travis-ci.org/Psychopoulet/asynchronous-eventemitter)
[![Coverage Status](https://coveralls.io/repos/github/Psychopoulet/asynchronous-eventemitter/badge.svg?branch=master)](https://coveralls.io/github/Psychopoulet/asynchronous-eventemitter)
[![Dependency Status](https://img.shields.io/david/Psychopoulet/asynchronous-eventemitter/master.svg)](https://github.com/Psychopoulet/asynchronous-eventemitter)

## Installation

```bash
$ npm install asynchronous-eventemitter
```

## Doc

* see [node events documentation](https://nodejs.org/api/events.html)
* fire "error" event if an error has thrown in an event listener
* fire "looperror" event if an error has thrown in an "error" event listener
* you can now chain "emit" events, the method return the class' pointer

## Examples

### Typescript

```typescript
import Events = require("asynchronous-eventemitter");

new Events().on("error", (err: Error) => {
  console.log(err);
}).on("test", (arg1: string, arg2: string, arg3: string) => {
  console.log(arg1, arg2, arg3);
}).emit("test", "arg1", "arg2", "arg3").emit("test2");
```

### Native

```javascript
const Events = require("asynchronous-eventemitter");

new Events().on("error", function(err) {
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
