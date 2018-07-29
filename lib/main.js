/*
	eslint func-style: [ "error", "declaration", { "allowArrowFunctions": true }]
*/

"use strict";

// module

module.exports = class AsynchronousEventEmitter extends require("events") {

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
			else if ("string" === typeof eventName && "" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}

		else if (!this._events || !this._events.error) {
			throw new Error("You MUST implement \"error\" handler before emit anything");
		}
		else if (!this._events[eventName]) {
			return this;
		}

		else {

			Promise.resolve().then(() => {

				let events = null;
				if (!this._events[eventName]) {
					events = [];
				}
				else if ("function" === typeof this._events[eventName] || "function" === typeof this._events[eventName].listener) {
					events = "function" === typeof this._events[eventName] ? [ this._events[eventName] ] : [ this._events[eventName.listener] ];
				}
				else {
					events = this._events[eventName];
				}

				events.forEach((event) => {

					return new Promise((resolve) => {

						event(...args);
						resolve();

					}).catch((err) => {
						return "error" !== eventName ? this.emit("error", err) : this.emit("looperror", err);
					});

				});

				return Promise.resolve();

			});

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
			else if ("string" === typeof eventName && "" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}

		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}

		else {

			return super.on(eventName, listener);

		}

	}

	once (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("string" === typeof eventName && "" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}

		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}

		else {

			return super.once(eventName, listener);

		}

	}

	prependListener (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("string" === typeof eventName && "" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}

		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}

		else {

			return super.prependListener(eventName, listener);

		}

	}

	prependOnceListener (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("string" === typeof eventName && "" === eventName.trim()) {
				throw new Error("\"eventName\" cannot be empty");
			}

		else if ("undefined" === typeof listener) {
			throw new ReferenceError("Missing \"listener\" parameter");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}

		else {

			return super.prependOnceListener(eventName, listener);

		}

	}

	removeListener (eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("Missing \"eventName\" parameter");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("string" === typeof eventName && "" === eventName.trim()) {
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

			return super.removeListener(eventName, listener);

		}

	}

	removeAllListeners (eventName) {

		if ("undefined" !== typeof eventName && ("string" !== typeof eventName && "symbol" !== typeof eventName)) {
			throw new TypeError("\"eventName\" must be a String or a Symbol");
		}
		else if ("string" === typeof eventName && "" === eventName.trim()) {
			throw new Error("\"eventName\" cannot be empty");
		}

		else {
			return super.removeAllListeners(eventName);
		}

	}

};
