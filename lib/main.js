
"use strict";

// module

module.exports = class AsynchronousEventEmitter extends require("events") {

	// private

	_securize (listener) {

		return (...args) => {

			new Promise((resolve) => {

				listener(...args);
				resolve();

			}).catch((err) => {
				this.emit("error", err);
			});

		};

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

			return super.on(eventName, this._securize(listener));

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

			return super.once(eventName, this._securize(listener));

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

			return super.prependListener(eventName, this._securize(listener));

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

			return super.prependOnceListener(eventName, this._securize(listener));

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
		else {

			return super.removeListener(eventName, this._securize(listener));

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
