
"use strict";

// module

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

module.exports = class AsynchronousEventEmitter extends require("events") {

	addListener(eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		} else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("\"eventName\" must be a String or a Symbol");
		} else if ("" === eventName.trim()) {
			throw new TypeError("\"eventName\" cannot be empty");
		} else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		} else if ("function" !== typeof listener) {
			throw new TypeError("\"listener\" must be a function");
		} else {

			let that = this;
			super.addListener(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				new Promise(resolve => {

					listener.apply(undefined, _toConsumableArray(args));
					resolve();
				}).catch(err => {

					try {
						that.emit("error", err);
					} catch (e) {
						// nothing to do here
					}
				});
			});
		}

		return this;
	}

	emit(eventName) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		} else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("\"eventName\" must be a String or a Symbol");
		} else if ("" === eventName.trim()) {
			throw new TypeError("\"eventName\" cannot be empty");
		} else {

			let args = Array.prototype.slice.call(arguments, 0);

			super.emit.apply(this, _toConsumableArray(args));
		}

		return this;
	}

	on(eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		} else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("\"eventName\" must be a String or a Symbol");
		} else if ("" === eventName.trim()) {
			throw new TypeError("\"eventName\" cannot be empty");
		} else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		} else if ("function" !== typeof listener) {
			throw new TypeError("\"listener\" must be a function");
		} else {

			let that = this;
			super.on(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);

				new Promise(resolve => {

					listener.apply(undefined, _toConsumableArray(args));
					resolve();
				}).catch(err => {

					if ("error" !== eventName) {

						try {
							that.emit("error", err);
						} catch (e) {
							// nothing to do here
						}
					}
				});
			});
		}

		return this;
	}

	once(eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		} else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("\"eventName\" must be a String or a Symbol");
		} else if ("" === eventName.trim()) {
			throw new TypeError("\"eventName\" cannot be empty");
		} else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		} else if ("function" !== typeof listener) {
			throw new TypeError("\"listener\" must be a function");
		} else {

			let that = this;
			super.once(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				new Promise(resolve => {

					listener.apply(undefined, _toConsumableArray(args));
					resolve();
				}).catch(err => {

					if ("error" !== eventName) {

						try {
							that.emit("error", err);
						} catch (e) {
							// nothing to do here
						}
					}
				});
			});
		}

		return this;
	}

	prependListener(eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		} else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("\"eventName\" must be a String or a Symbol");
		} else if ("" === eventName.trim()) {
			throw new TypeError("\"eventName\" cannot be empty");
		} else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		} else if ("function" !== typeof listener) {
			throw new TypeError("\"listener\" must be a function");
		} else {

			let that = this;
			super.prependListener(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				new Promise(resolve => {

					listener.apply(undefined, _toConsumableArray(args));
					resolve();
				}).catch(err => {

					if ("error" !== eventName) {

						try {
							that.emit("error", err);
						} catch (e) {
							// nothing to do here
						}
					}
				});
			});
		}

		return this;
	}

	prependOnceListener(eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		} else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("\"eventName\" must be a String or a Symbol");
		} else if ("" === eventName.trim()) {
			throw new TypeError("\"eventName\" cannot be empty");
		} else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		} else if ("function" !== typeof listener) {
			throw new TypeError("\"listener\" must be a function");
		} else {

			let that = this;
			super.prependOnceListener(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				new Promise(resolve => {

					listener.apply(undefined, _toConsumableArray(args));
					resolve();
				}).catch(err => {

					if ("error" !== eventName) {

						try {
							that.emit("error", err);
						} catch (e) {
							// nothing to do here
						}
					}
				});
			});
		}

		return this;
	}

};