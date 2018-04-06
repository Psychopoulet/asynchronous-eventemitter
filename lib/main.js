/*
	eslint func-style: [ "error", "declaration", { "allowArrowFunctions": true }], complexity: 0
*/

"use strict";

// module

module.exports = class AsynchronousEventEmitter extends require("events") {

	constructor (...args) {

		super(...args);

		this.count = 0;

	}

	// private

	_securize (eventName, listener) {

		const result = ((count) => {

			return (...args) => {

				return new Promise((resolve) => {

					listener(...args);
					resolve(count);

				}).catch((err) => {

					if ("error" !== eventName) {
						this.emit("error", err);
					}
					else {
						(0, console).log(err);
					}

					return Promise.resolve();

				});

			};

		})(this.count);

		++this.count;

		return result;

	}

	// public

	addListener (eventName, listener) {
		return this.on(eventName, listener);
	}

	emit (eventName, ...args) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}
		else {

			super.emit(eventName, ...args);

			return this;

		}

	}

	on (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			return super.on(eventName, this._securize(eventName, listener));

		}

	}

	once (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			return super.once(eventName, this._securize(eventName, listener));

		}

	}

	prependListener (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			return super.prependListener(eventName, this._securize(eventName, listener));

		}

	}

	prependOnceListener (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			return super.prependOnceListener(eventName, this._securize(eventName, listener));

		}

	}

	removeListener (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else if (!this._events || !this._events[eventName]) {
			return this;
		}
		else {

			const list = this._events[eventName];
			const securizedStringified = this._securize(eventName, listener).toString();

			if ("function" === typeof list || "function" === typeof list.listener) {

				const event = list.listener ? list.listener : list;

				if (event.toString() === securizedStringified) {

					if (0 === --this._eventsCount) {
						this._events = Object.create(null);
					}
					else {

						delete this._events[eventName];

						if (this._events.removeListener) {
							this.emit("removeListener", eventName, list.listener || listener);
						}

					}

				}

			}
			else if ("object" === typeof list && list instanceof Array) {

				let position = -1;
				let originalListener = null;

				// (0, console).log("");
				// (0, console).log("REMOVE MULTIPLE", list);
				// (0, console).log("");

				for (let i = list.length - 1; -1 < i; --i) {

					const event = list[i].listener ? list[i].listener : list[i];

					// (0, console).log("");
					// (0, console).log(event.toString());
					// (0, console).log(securizedStringified);
					// (0, console).log("");

					if (event.toString() === securizedStringified) {

						originalListener = list[i].listener;
						position = i;

						break;

					}

				}

				// (0, console).log("");
				// (0, console).log("REMOVE AT", position);
				// (0, console).log("");

				if (-1 < position) {

					if (0 === position) {
						list.shift();
					}
					else {
						list.splice(position, 1);
					}

					if (1 === list.length) {
						[ this._events[eventName] ] = list;
					}

					if (this._events.removeListener) {
						this.emit("removeListener", eventName, originalListener || listener);
					}

				}

			}

			return this;

		}

	}

	removeAllListeners (eventName) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}
		else {

			return super.removeAllListeners(eventName);

		}

	}

};
