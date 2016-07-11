
"use strict";

// module

module.exports = class AsynchronousEventEmitter extends require("events") {

	addListener(eventName, listener) {

		if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("eventName must be a String or a Symbol");
		}
		else if ("function" !== typeof listener) {
			throw new TypeError("listener must be a function");
		}

		let that = this;
		super.addListener(eventName, function () {

			let args = Array.prototype.slice.call(arguments, 0);
			return new Promise(function (resolve) {

				listener(...args);
				resolve();

			}).catch(function (err) {
				that.emit("eventerror", err);
			});

		});

		return this;

	}

	on(eventName, listener) {

		if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("eventName must be a String or a Symbol");
		}
		else if ("function" !== typeof listener) {
			throw new TypeError("listener must be a function");
		}

		let that = this;
		super.on(eventName, function () {

			let args = Array.prototype.slice.call(arguments, 0);
			return new Promise(function (resolve) {

				listener(...args);
				resolve();

			}).catch(function (err) {
				that.emit("eventerror", err);
			});

		});

		return this;

	}

	once(eventName, listener) {

		if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("eventName must be a String or a Symbol");
		}
		else if ("function" !== typeof listener) {
			throw new TypeError("listener must be a function");
		}

		let that = this;
		super.once(eventName, function () {

			let args = Array.prototype.slice.call(arguments, 0);
			return new Promise(function (resolve) {

				listener(...args);
				resolve();

			}).catch(function (err) {
				that.emit("eventerror", err);
			});

		});

		return this;

	}

	prependListener(eventName, listener) {

		if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("eventName must be a String or a Symbol");
		}
		else if ("function" !== typeof listener) {
			throw new TypeError("listener must be a function");
		}
		else if ("function" !== typeof super.prependListener) {
			throw new Error("\"prependListener\" does not exist. Maybe you should check your node version ?");
		}
		
		else {

			let that = this;
			super.prependListener(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				return new Promise(function (resolve) {

					listener(...args);
					resolve();

				}).catch(function (err) {
					that.emit("eventerror", err);
				});

			});

		}

		return this;

	}

	prependOnceListener(eventName, listener) {

		if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("eventName must be a String or a Symbol");
		}
		else if ("function" !== typeof listener) {
			throw new TypeError("listener must be a function");
		}
		else if ("function" !== typeof super.prependOnceListener) {
			throw new Error("\"prependOnceListener\" does not exist. Maybe you should check your node version ?");
		}

		else {

			let that = this;
			super.prependOnceListener(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				return new Promise(function (resolve) {

					listener(...args);
					resolve();

				}).catch(function (err) {
					that.emit("eventerror", err);
				});

			});

		}

		return this;

	}

	removeListener(eventName, listener) {

		if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
			throw new TypeError("eventName must be a String or a Symbol");
		}
		else if ("function" !== typeof listener) {
			throw new TypeError("listener must be a function");
		}

		let that = this;
		super.removeListener(eventName, function () {

			let args = Array.prototype.slice.call(arguments, 0);
			return new Promise(function (resolve) {

				listener(...args);
				resolve();

			}).catch(function (err) {
				that.emit("eventerror", err);
			});

		});

		return this;

	}

};
