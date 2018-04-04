"use strict";

// deps

	const assert = require("assert");
	const Events = require(require("path").join(__dirname, "..", "lib", "main.js"));

// tests

describe("removeAllListeners", () => {

	it("should check missing args", () => {

		assert.throws(() => {
			new Events().removeAllListeners();
		}, ReferenceError, "check missing eventName does not throw an error");

	});

	it("should check wrong args", () => {

		assert.throws(() => {
			new Events().removeAllListeners(false);
		}, TypeError, "check wrong eventName does not throw an error");

	});

	it("should check empty args", () => {

		assert.throws(() => {
			new Events().removeAllListeners("");
		}, Error, "check empty eventName does not throw an error");

	});

	it("should check good args", () => {

		assert.doesNotThrow(() => {
			new Events().removeAllListeners("eventName");
		}, TypeError, "check good args throws an error");

	});

	it("should check good args", () => {

		assert.doesNotThrow(() => {
			new Events().removeAllListeners("eventName");
		}, TypeError, "check good args throws an error");

	});

	it("should not fire event", (done) => {

		new Events().on("error", done).on("eventName", () => {
			done(new Error("Does not work"));
		}).removeAllListeners("eventName").emit("eventName");

		done();

	});

});
