
"use strict";

// module

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_require) {
	_inherits(AsynchronousEventEmitter, _require);

	function AsynchronousEventEmitter() {
		_classCallCheck(this, AsynchronousEventEmitter);

		return _possibleConstructorReturn(this, (AsynchronousEventEmitter.__proto__ || Object.getPrototypeOf(AsynchronousEventEmitter)).apply(this, arguments));
	}

	_createClass(AsynchronousEventEmitter, [{
		key: "addListener",
		value: function addListener(eventName, listener) {
			var _this2 = this;

			if ("undefined" === typeof eventName) {
				throw new ReferenceError("\"eventName\" does not exist");
			} else if ("string" !== typeof eventName && "symbol" !== (typeof eventName === "undefined" ? "undefined" : _typeof(eventName))) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			} else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			} else if ("undefined" === typeof listener) {
				throw new ReferenceError("\"listener\" does not exist");
			} else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			} else {
				(function () {

					var that = _this2;
					_get(AsynchronousEventEmitter.prototype.__proto__ || Object.getPrototypeOf(AsynchronousEventEmitter.prototype), "addListener", _this2).call(_this2, eventName, function () {

						var args = Array.prototype.slice.call(arguments, 0);
						new Promise(function (resolve) {

							listener.apply(undefined, _toConsumableArray(args));
							resolve();
						}).catch(function (err) {

							try {
								that.emit("error", err);
							} catch (e) {
								// nothing to do here
							}
						});
					});
				})();
			}

			return this;
		}
	}, {
		key: "emit",
		value: function emit(eventName) {

			if ("undefined" === typeof eventName) {
				throw new ReferenceError("\"eventName\" does not exist");
			} else if ("string" !== typeof eventName && "symbol" !== (typeof eventName === "undefined" ? "undefined" : _typeof(eventName))) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			} else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			} else {
				var _get2;

				var args = Array.prototype.slice.call(arguments, 0);

				(_get2 = _get(AsynchronousEventEmitter.prototype.__proto__ || Object.getPrototypeOf(AsynchronousEventEmitter.prototype), "emit", this)).call.apply(_get2, [this].concat(_toConsumableArray(args)));
			}

			return this;
		}
	}, {
		key: "on",
		value: function on(eventName, listener) {
			var _this3 = this;

			if ("undefined" === typeof eventName) {
				throw new ReferenceError("\"eventName\" does not exist");
			} else if ("string" !== typeof eventName && "symbol" !== (typeof eventName === "undefined" ? "undefined" : _typeof(eventName))) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			} else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			} else if ("undefined" === typeof listener) {
				throw new ReferenceError("\"listener\" does not exist");
			} else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			} else {
				(function () {

					var that = _this3;
					_get(AsynchronousEventEmitter.prototype.__proto__ || Object.getPrototypeOf(AsynchronousEventEmitter.prototype), "on", _this3).call(_this3, eventName, function () {

						var args = Array.prototype.slice.call(arguments, 0);
						new Promise(function (resolve) {

							listener.apply(undefined, _toConsumableArray(args));
							resolve();
						}).catch(function (err) {

							if ("error" !== eventName) {

								try {
									that.emit("error", err);
								} catch (e) {
									// nothing to do here
								}
							}
						});
					});
				})();
			}

			return this;
		}
	}, {
		key: "once",
		value: function once(eventName, listener) {
			var _this4 = this;

			if ("undefined" === typeof eventName) {
				throw new ReferenceError("\"eventName\" does not exist");
			} else if ("string" !== typeof eventName && "symbol" !== (typeof eventName === "undefined" ? "undefined" : _typeof(eventName))) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			} else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			} else if ("undefined" === typeof listener) {
				throw new ReferenceError("\"listener\" does not exist");
			} else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			} else {
				(function () {

					var that = _this4;
					var f = function f() {

						that.removeListener(eventName, f);

						var args = Array.prototype.slice.call(arguments, 0);

						new Promise(function (resolve) {

							listener.apply(undefined, _toConsumableArray(args));
							resolve();
						}).catch(function (err) {

							if ("error" !== eventName) {

								try {
									that.emit("error", err);
								} catch (e) {
									// nothing to do here
								}
							}
						});
					};

					_get(AsynchronousEventEmitter.prototype.__proto__ || Object.getPrototypeOf(AsynchronousEventEmitter.prototype), "on", _this4).call(_this4, eventName, f);
				})();
			}

			return this;
		}
	}, {
		key: "prependListener",
		value: function prependListener(eventName, listener) {
			var _this5 = this;

			if ("undefined" === typeof eventName) {
				throw new ReferenceError("\"eventName\" does not exist");
			} else if ("string" !== typeof eventName && "symbol" !== (typeof eventName === "undefined" ? "undefined" : _typeof(eventName))) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			} else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			} else if ("undefined" === typeof listener) {
				throw new ReferenceError("\"listener\" does not exist");
			} else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			} else {
				(function () {

					var that = _this5;
					_get(AsynchronousEventEmitter.prototype.__proto__ || Object.getPrototypeOf(AsynchronousEventEmitter.prototype), "prependListener", _this5).call(_this5, eventName, function () {

						var args = Array.prototype.slice.call(arguments, 0);
						new Promise(function (resolve) {

							listener.apply(undefined, _toConsumableArray(args));
							resolve();
						}).catch(function (err) {

							if ("error" !== eventName) {

								try {
									that.emit("error", err);
								} catch (e) {
									// nothing to do here
								}
							}
						});
					});
				})();
			}

			return this;
		}
	}, {
		key: "prependOnceListener",
		value: function prependOnceListener(eventName, listener) {
			var _this6 = this;

			if ("undefined" === typeof eventName) {
				throw new ReferenceError("\"eventName\" does not exist");
			} else if ("string" !== typeof eventName && "symbol" !== (typeof eventName === "undefined" ? "undefined" : _typeof(eventName))) {
				throw new TypeError("\"eventName\" must be a String or a Symbol");
			} else if ("" === eventName.trim()) {
				throw new TypeError("\"eventName\" cannot be empty");
			} else if ("undefined" === typeof listener) {
				throw new ReferenceError("\"listener\" does not exist");
			} else if ("function" !== typeof listener) {
				throw new TypeError("\"listener\" must be a function");
			} else {
				(function () {

					var that = _this6;
					var f = function f() {

						that.removeListener(eventName, f);

						var args = Array.prototype.slice.call(arguments, 0);

						new Promise(function (resolve) {

							listener.apply(undefined, _toConsumableArray(args));
							resolve();
						}).catch(function (err) {

							if ("error" !== eventName) {

								try {
									that.emit("error", err);
								} catch (e) {
									// nothing to do here
								}
							}
						});
					};

					_get(AsynchronousEventEmitter.prototype.__proto__ || Object.getPrototypeOf(AsynchronousEventEmitter.prototype), "prependListener", _this6).call(_this6, eventName, f);
				})();
			}

			return this;
		}
	}]);

	return AsynchronousEventEmitter;
}(require("events"));