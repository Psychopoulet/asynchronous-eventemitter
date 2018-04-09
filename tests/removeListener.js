"use strict";

// deps

	const assert = require("assert");
	const Events = require(require("path").join(__dirname, "..", "lib", "main.js"));

// tests

describe("removeListener", () => {

	/**
	* Handler with no action
	* @returns {void}
	*/
	function emptyHandler () {
		// nothing to do here
	}

	it("should check missing args", () => {

		assert.throws(() => {
			new Events().removeListener();
		}, ReferenceError, "check missing eventName does not throw an error");

		assert.throws(() => {
			new Events().removeListener("eventName");
		}, ReferenceError, "check missing listener does not throw an error");

	});

	it("should check wrong args", () => {

		assert.throws(() => {
			new Events().removeListener(false, emptyHandler);
		}, TypeError, "check wrong eventName does not throw an error");

		assert.throws(() => {
			new Events().removeListener("eventName", false);
		}, TypeError, "check wrong listener does not throw an error");

	});

	it("should check empty args", () => {

		assert.throws(() => {
			new Events().removeListener("", emptyHandler);
		}, Error, "check empty eventName does not throw an error");

	});

	it("should check good args", () => {

		assert.doesNotThrow(() => {
			new Events().removeListener("eventName", emptyHandler);
		}, TypeError, "check good args throws an error");

	});

	it("should not fire event", (done) => {

		/**
	 	* Test method
	 	* @returns {void}
	 	*/
		function event () {
			done(new Error("Does not work"));
		}

		new Events().on("error", done)
			.on("eventName", event)
			.removeListener("eventName", event)
			.emit("eventName");

		done();

	});

	it("should not fire first event", (done) => {

		/**
	 	* Test method
	 	* @returns {void}
	 	*/
		function event () {
			done(new Error("Does not work"));
		}

		new Events().on("error", done)
			.on("eventName", event)
			.on("eventName", emptyHandler)
			.removeListener("eventName", event)
			.emit("eventName");

		done();

	});

});
