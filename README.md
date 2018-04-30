# asynchronous-eventemitter
Asynchronous version of EventEmitter, secured by promises

[![Build Status](https://api.travis-ci.org/Psychopoulet/asynchronous-eventemitter.svg?branch=master)](https://travis-ci.org/Psychopoulet/asynchronous-eventemitter)
[![Coverage Status](https://coveralls.io/repos/github/Psychopoulet/asynchronous-eventemitter/badge.svg?branch=master)](https://coveralls.io/github/Psychopoulet/asynchronous-eventemitter)
[![Dependency Status](https://david-dm.org/Psychopoulet/asynchronous-eventemitter/status.svg)](https://david-dm.org/Psychopoulet/asynchronous-eventemitter)
[![Dev dependency Status](https://david-dm.org/Psychopoulet/asynchronous-eventemitter/dev-status.svg)](https://david-dm.org/Psychopoulet/asynchronous-eventemitter?type=dev)

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

### Native

```javascript
const Events = require("asynchronous-eventemitter");

new Events().on("error", (err) => {
  console.log(err);
}).on("test", (arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3);
}).emit("test", "arg1", "arg2", "arg3").emit("test2");
```

### Typescript

```typescript
import Events = require("asynchronous-eventemitter");

new Events().on("error", (err: Error) => {
  console.log(err);
}).on("test", (arg1: string, arg2: string, arg3: string) => {
  console.log(arg1, arg2, arg3);
}).emit("test", "arg1", "arg2", "arg3").emit("test2");
```

## Tests

```bash
$ gulp
```

## License

  [ISC](LICENSE)
