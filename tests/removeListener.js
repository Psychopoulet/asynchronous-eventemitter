"use strict";

// deps

	const assert = require("assert");
	const Events = require(require("path").join(__dirname, "..", "lib", "main.js"));

// tests

describe("removeListener", () => {

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

			new Events().removeListener(false, () => {
				// nothing to do here
			});

		}, TypeError, "check wrong eventName does not throw an error");

		assert.throws(() => {
			new Events().removeListener("eventName", false);
		}, TypeError, "check wrong listener does not throw an error");

	});

	it("should check empty args", () => {

		assert.throws(() => {

			new Events().removeListener("", () => {
				// nothing to do here
			});

		}, Error, "check empty eventName does not throw an error");

	});

	it("should check good args", () => {

		assert.doesNotThrow(() => {

			new Events().removeListener("eventName", () => {
				// nothing to do here
			});

		}, TypeError, "check good args throws an error");

	});

	// it("should not fire event", (done) => {

	// 	/**
	//  	* Test method
	//  	* @returns {void}
	//  	*/
	// 	function event () {

	// 		(0, console).log("");
	// 		(0, console).log("");
	// 		(0, console).log("ICI");
	// 		(0, console).log("");
	// 		(0, console).log("");

	// 		done(new Error("Does not work"));
	// 	}

	// 	new Events().on("error", done)
	// 		.on("eventName", event)
	// 		.removeListener("eventName", event)
	// 		.emit("eventName");

	// 	done();

	// });

});
