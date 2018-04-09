"use strict";

// deps

	const assert = require("assert");
	const Events = require(require("path").join(__dirname, "..", "lib", "main.js"));

// tests

describe("once", () => {

	/**
	* Handler with no action
	* @returns {void}
	*/
	function emptyHandler () {
		// nothing to do here
	}

	it("should check missing args", () => {

		assert.throws(() => {
			new Events().once();
		}, ReferenceError, "check missing eventName does not throw an error");

		assert.throws(() => {
			new Events().once("eventName");
		}, ReferenceError, "check missing listener does not throw an error");

	});

	it("should check wrong args", () => {

		assert.throws(() => {
			new Events().once(false, emptyHandler);
		}, TypeError, "check wrong eventName does not throw an error");

		assert.throws(() => {
			new Events().once("eventName", false);
		}, TypeError, "check wrong listener does not throw an error");

	});

	it("should check empty args", () => {

		assert.throws(() => {
			new Events().once("", emptyHandler);
		}, Error, "check empty eventName does not throw an error");

	});

	it("should check good args", (done) => {

		assert.doesNotThrow(() => {
			new Events().once("eventName", emptyHandler);
		}, TypeError, "check good args throws an error");

		assert.doesNotThrow(() => {

			new Events().once("error", emptyHandler).once("eventName", () => {
				done();
			}).emit("eventName");

		}, TypeError, "check good args throws an error");

	});

	it("should check fire error event", (done) => {

		new Events().once("error", (err) => {

			assert.strictEqual(typeof err, "object", "check fire error event does not generate a valid error");
			assert.strictEqual(err instanceof Error, true, "check fire error event does not generate a valid error");

			done();

		}).once("eventName", () => {
			throw new Error("This is an Error");
		}).emit("eventName");

	});

	it("should check fire count", (done) => {

		let count = 0;

		new Events().once("error", emptyHandler).once("eventName", () => {

			++count;

			assert.strictEqual(count, 1, "should check fire count generate an error");
			done();

		}).emit("eventName").emit("eventName");

	});

	describe("test listener args", () => {

		it("should check listener undefined args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(typeof test, "undefined", "check good listener argument generate an error");
				done();
			}).emit("eventName");

		});

		it("should check listener null args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(test, null, "check good listener argument generate an error");
				done();
			}).emit("eventName", null);

		});

		it("should check listener boolean args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(test, true, "check good listener argument generate an error");
				done();
			}).emit("eventName", true);

		});

		it("should check listener string args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(test, "test", "check good listener argument generate an error");
				done();
			}).emit("eventName", "test");

		});

		it("should check listener integer args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(test, 1, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1);

		});

		it("should check listener float args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(test, 1.1, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1.1);

		});

		it("should check listener function args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(typeof test, "function", "check good listener argument generate an error");
				done();
			}).emit("eventName", emptyHandler);

		});

		it("should check listener array args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {

				assert.strictEqual(typeof test, "object", "check good listener argument generate an error");
				assert.strictEqual(test instanceof Array, true, "check good listener argument generate an error");

				done();

			}).emit("eventName", []);

		});

		it("should check listener object args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {

				assert.strictEqual(typeof test, "object", "check good listener argument generate an error");
				assert.strictEqual(test instanceof Object, true, "check good listener argument generate an error");

				done();

			}).emit("eventName", {});

		});

		it("should check listener buffer args", (done) => {

			new Events().once("error", done).once("eventName", (test) => {

				assert.strictEqual(typeof test, "object", "check good listener argument generate an error");
				assert.strictEqual(test instanceof Buffer, true, "check good listener argument generate an error");

				done();

			}).emit("eventName", Buffer.from([]));

		});

	});

});
