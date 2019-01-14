"use strict";

// deps

	const assert = require("assert");
	const Events = require(require("path").join(__dirname, "..", "lib", "main.js"));

// tests

describe("emit", () => {

	it("should check missing args", () => {

		assert.throws(() => {
			new Events().emit();
		}, ReferenceError, "check missing eventName does not throw an error");

	});

	it("should check wrong args", () => {

		assert.throws(() => {
			new Events().emit(false);
		}, TypeError, "check wrong eventName does not throw an error");

	});

	it("should check empty args", () => {

		assert.throws(() => {
			new Events().emit("");
		}, Error, "check empty eventName does not throw an error");

	});

	it("should check no error handler", () => {

		assert.throws(() => {
			new Events().emit("eventName");
		}, Error, "check no error handler does not throw an error");

	});

	it("should check asynchronous work", (done) => {

		let firstEventFired = false;
		let secondEventFired = false;

		new Events().on("error", done).on("eventName", (test) => {

			assert.strictEqual(firstEventFired, false, "check asynchronous work generate an error");
			assert.strictEqual(secondEventFired, false, "check asynchronous work generate an error");

			assert.strictEqual(typeof test, "object", "check asynchronous work generate an error");
			assert.strictEqual(test instanceof Buffer, true, "check asynchronous work generate an error");

			setTimeout(() => {

				assert.strictEqual(firstEventFired, false, "check asynchronous work generate an error");
				assert.strictEqual(secondEventFired, true, "check asynchronous work generate an error");

				firstEventFired = true;

				done();

			}, 500);

		}).on("eventName", (test) => {

			assert.strictEqual(firstEventFired, false, "check asynchronous work generate an error");
			assert.strictEqual(secondEventFired, false, "check asynchronous work generate an error");

			assert.strictEqual(typeof test, "object", "check asynchronous work generate an error");
			assert.strictEqual(test instanceof Buffer, true, "check asynchronous work generate an error");

			secondEventFired = true;

		}).emit("eventName", Buffer.from([]));

	});

	it("should check looping error", (done) => {

		new Events().on("error", () => {
			throw new Error("This is an Error");
		}).on("looperror", (err) => {

			assert.strictEqual(typeof err, "object", "check looping error does not generate a valid error");
			assert.strictEqual(err instanceof Error, true, "check looping error does not generate a valid error");

			done();

		}).emit("error", new Error("This is an Error"));

	});

});
