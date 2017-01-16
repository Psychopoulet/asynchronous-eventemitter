
"use strict";

// module

module.exports = class AsynchronousEventEmitter extends require("events") {

	addListener(eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			let that = this;
			super.addListener(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				new Promise((resolve) => {

					listener(...args);
					resolve();

				}).catch((err) => {

					try {
						that.emit("error", err);
					}
					catch(e) {
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
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			}
		else {

			let args = Array.prototype.slice.call(arguments, 0);

			super.emit(...args);

		}

		return this;

	}

	on(eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			let that = this;
			super.on(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				new Promise(function (resolve) {

					listener(...args);
					resolve();

				}).catch(function (err) {

					if ("error" !== eventName) {

						try {
							that.emit("error", err);
						}
						catch(e) {
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
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			let that = this;
			let f = function () {

				that.removeListener(eventName, f);

				let args = Array.prototype.slice.call(arguments, 0);

				new Promise(function (resolve) {

					listener(...args);
					resolve();

				}).catch(function (err) {

					if ("error" !== eventName) {

						try {
							that.emit("error", err);
						}
						catch(e) {
							// nothing to do here
						}
						
					}
					
				});

			};

			super.on(eventName, f);

		}

		return this;

	}

	prependListener(eventName, listener) {

		if ("undefined" === typeof eventName) {
			throw new ReferenceError("\"eventName\" does not exist");
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			let that = this;
			super.prependListener(eventName, function () {

				let args = Array.prototype.slice.call(arguments, 0);
				new Promise((resolve) => {

					listener(...args);
					resolve();

				}).catch((err) => {

					if ("error" !== eventName) {

						try {
							that.emit("error", err);
						}
						catch(e) {
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
		}
			else if ("string" !== typeof eventName && "symbol" !== typeof eventName) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			}
			else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			}
		else if ("undefined" === typeof listener) {
			throw new ReferenceError("\"listener\" does not exist");
		}
			else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			}
		else {

			let that = this;
			let f = function () {

				that.removeListener(eventName, f);

				let args = Array.prototype.slice.call(arguments, 0);

				new Promise(function (resolve) {

					listener(...args);
					resolve();

				}).catch(function (err) {

					if ("error" !== eventName) {

						try {
							that.emit("error", err);
						}
						catch(e) {
							// nothing to do here
						}
						
					}
					
				});

			};

			super.prependListener(eventName, f);

		}

		return this;

	}

};
