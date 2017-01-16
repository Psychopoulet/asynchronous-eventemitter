"use strict";

// deps

	const assert = require("assert");
	const events = require(require("path").join(__dirname, "..", "dist", "main.js"));

// tests

describe("addListener", () => {

	it("should check missing args", () => {
		assert.throws(() => { new events().addListener(); }, ReferenceError, "check missing eventName does not throw an error");
		assert.throws(() => { new events().addListener("eventName"); }, ReferenceError, "check missing listener does not throw an error");
	});

	it("should check wrong args", () => {
		assert.throws(() => { new events().addListener(false, () => {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(() => { new events().addListener("eventName", false); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check empty args", () => {
		assert.throws(() => { new events().addListener("", () => {}); }, TypeError, "check empty eventName does not throw an error");
	});

	it("should check good args", () => {
		assert.doesNotThrow(() => { new events().addListener("eventName", () => {}); }, TypeError, "check good args throws an error");
	});

	it("should check fire count", (done) => {

		let count = 0;

		new events().addListener("eventName", () => {

			++count;

			if (2 === count) {
				done();
			}

		}).emit("eventName").emit("eventName");

	});

	describe("test listener args", () => {

		it("should check listener undefined args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual("undefined", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName");

		});

		it("should check listener null args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual(null, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", null);

		});

		it("should check listener boolean args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual(true, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", true);

		});

		it("should check listener string args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual("test", test, "check good listener argument generate an error");
				done();
			}).emit("eventName", "test");

		});

		it("should check listener integer args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual(1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1);

		});

		it("should check listener float args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual(1.1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1.1);

		});

		it("should check listener function args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual("function", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName", () => {});

		});

		it("should check listener array args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Array, "check good listener argument generate an error");
				done();
			}).emit("eventName", []);

		});

		it("should check listener object args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Object, "check good listener argument generate an error");
				done();
			}).emit("eventName", {});

		});

		it("should check listener buffer args", (done) => {

			new events().addListener("error", done).addListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Buffer, "check good listener argument generate an error");
				done();
			}).emit("eventName", new Buffer([]));

		});

	});

});

describe("emit", () => {

	it("should check missing args", () => {
		assert.throws(() => { new events().emit(); }, ReferenceError, "check missing eventName does not throw an error");
	});

	it("should check wrong args", () => {
		assert.throws(() => { new events().emit(false); }, TypeError, "check wrong eventName does not throw an error");
	});

	it("should check empty args", () => {
		assert.throws(() => { new events().emit(""); }, TypeError, "check empty eventName does not throw an error");
	});

});

describe("on", () => {

	it("should check missing args", () => {
		assert.throws(() => { new events().on(); }, ReferenceError, "check missing eventName does not throw an error");
		assert.throws(() => { new events().on("eventName"); }, ReferenceError, "check missing listener does not throw an error");
	});

	it("should check wrong args", () => {
		assert.throws(() => { new events().on(false, () => {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(() => { new events().on("eventName", false); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check empty args", () => {
		assert.throws(() => { new events().on("", () => {}); }, TypeError, "check empty eventName does not throw an error");
	});

	it("should check good args", () => {
		assert.doesNotThrow(() => { new events().on("eventName", () => {}); }, TypeError, "check good args throws an error");
	});

	it("should check fire count", (done) => {

		let count = 0;

		new events().on("eventName", () => {

			++count;

			if (2 === count) {
				done();
			}

		}).emit("eventName").emit("eventName");

	});

	describe("test listener args", () => {

		it("should check listener undefined args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual("undefined", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName");

		});

		it("should check listener null args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual(null, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", null);

		});

		it("should check listener boolean args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual(true, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", true);

		});

		it("should check listener string args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual("test", test, "check good listener argument generate an error");
				done();
			}).emit("eventName", "test");

		});

		it("should check listener integer args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual(1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1);

		});

		it("should check listener float args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual(1.1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1.1);

		});

		it("should check listener function args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual("function", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName", () => {});

		});

		it("should check listener array args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Array, "check good listener argument generate an error");
				done();
			}).emit("eventName", []);

		});

		it("should check listener object args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Object, "check good listener argument generate an error");
				done();
			}).emit("eventName", {});

		});

		it("should check listener buffer args", (done) => {

			new events().on("error", done).on("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Buffer, "check good listener argument generate an error");
				done();
			}).emit("eventName", new Buffer([]));

		});

	});

});

describe("once", () => {

	it("should check missing args", () => {
		assert.throws(() => { new events().once(); }, ReferenceError, "check missing eventName does not throw an error");
		assert.throws(() => { new events().once("eventName"); }, ReferenceError, "check missing listener does not throw an error");
	});

	it("should check wrong args", () => {
		assert.throws(() => { new events().once(false, () => {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(() => { new events().once("eventName", false); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check empty args", () => {
		assert.throws(() => { new events().once("", () => {}); }, TypeError, "check empty eventName does not throw an error");
	});

	it("should check good args", () => {
		assert.doesNotThrow(() => { new events().once("eventName", () => {}); }, TypeError, "check good args throws an error");
	});

	it("should check fire count", (done) => {

		let count = 0;

		new events().once("eventName", () => {

			++count;

			assert.strictEqual(1, count, "should check fire count generate an error");
			done();

		}).emit("eventName").emit("eventName");

	});

	describe("test listener args", () => {

		it("should check listener undefined args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual("undefined", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName");

		});

		it("should check listener null args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(null, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", null);

		});

		it("should check listener boolean args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(true, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", true);

		});

		it("should check listener string args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual("test", test, "check good listener argument generate an error");
				done();
			}).emit("eventName", "test");

		});

		it("should check listener integer args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1);

		});

		it("should check listener float args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual(1.1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1.1);

		});

		it("should check listener function args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual("function", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName", () => {});

		});

		it("should check listener array args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Array, "check good listener argument generate an error");
				done();
			}).emit("eventName", []);

		});

		it("should check listener object args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Object, "check good listener argument generate an error");
				done();
			}).emit("eventName", {});

		});

		it("should check listener buffer args", (done) => {

			new events().once("error", done).once("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Buffer, "check good listener argument generate an error");
				done();
			}).emit("eventName", new Buffer([]));

		});

	});

});

describe("prependListener", () => {

	it("should check missing args", () => {
		assert.throws(() => { new events().prependListener(); }, ReferenceError, "check missing eventName does not throw an error");
		assert.throws(() => { new events().prependListener("eventName"); }, ReferenceError, "check missing listener does not throw an error");
	});

	it("should check wrong args", () => {
		assert.throws(() => { new events().prependListener(false, () => {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(() => { new events().prependListener("eventName", false); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check empty args", () => {
		assert.throws(() => { new events().prependListener("", () => {}); }, TypeError, "check empty eventName does not throw an error");
	});

	it("should check good args", () => {
		assert.doesNotThrow(() => { new events().prependListener("eventName", () => {}); }, TypeError, "check wrong eventName throws an error");
	});

	it("should check good args", () => {
		assert.doesNotThrow(() => { new events().prependListener("eventName", () => {}); }, TypeError, "check good args throws an error");
	});

	describe("test listener args", () => {

		it("should check listener undefined args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual("undefined", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName");

		});

		it("should check listener null args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual(null, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", null);

		});

		it("should check listener boolean args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual(true, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", true);

		});

		it("should check listener string args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual("test", test, "check good listener argument generate an error");
				done();
			}).emit("eventName", "test");

		});

		it("should check listener integer args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual(1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1);

		});

		it("should check listener float args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual(1.1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1.1);

		});

		it("should check listener function args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual("function", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName", () => {});

		});

		it("should check listener array args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Array, "check good listener argument generate an error");
				done();
			}).emit("eventName", []);

		});

		it("should check listener object args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Object, "check good listener argument generate an error");
				done();
			}).emit("eventName", {});

		});

		it("should check listener buffer args", (done) => {

			new events().prependListener("error", done).prependListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Buffer, "check good listener argument generate an error");
				done();
			}).emit("eventName", new Buffer([]));

		});

	});

});

describe("prependOnceListener", () => {

	it("should check missing args", () => {
		assert.throws(() => { new events().prependOnceListener(); }, ReferenceError, "check missing eventName does not throw an error");
		assert.throws(() => { new events().prependOnceListener("eventName"); }, ReferenceError, "check missing listener does not throw an error");
	});

	it("should check wrong args", () => {
		assert.throws(() => { new events().prependOnceListener(false, () => {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(() => { new events().prependOnceListener("eventName", false); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check empty args", () => {
		assert.throws(() => { new events().prependOnceListener("", () => {}); }, TypeError, "check empty eventName does not throw an error");
	});

	it("should check good args", () => {
		assert.doesNotThrow(() => { new events().prependOnceListener("eventName", () => {}); }, TypeError, "check wrong eventName throws an error");
	});

	it("should check good args", () => {
		assert.doesNotThrow(() => { new events().prependOnceListener("eventName", () => {}); }, TypeError, "check good args throws an error");
	});

	it("should check fire count", (done) => {

		let count = 0;

		new events().prependOnceListener("eventName", () => {

			++count;

			assert.strictEqual(1, count, "should check fire count generate an error");
			done();

		}).emit("eventName").emit("eventName");

	});

	describe("test listener args", () => {

		it("should check listener undefined args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual("undefined", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName");

		});

		it("should check listener null args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual(null, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", null);

		});

		it("should check listener boolean args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual(true, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", true);

		});

		it("should check listener string args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual("test", test, "check good listener argument generate an error");
				done();
			}).emit("eventName", "test");

		});

		it("should check listener integer args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual(1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1);

		});

		it("should check listener float args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual(1.1, test, "check good listener argument generate an error");
				done();
			}).emit("eventName", 1.1);

		});

		it("should check listener function args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual("function", typeof test, "check good listener argument generate an error");
				done();
			}).emit("eventName", () => {});

		});

		it("should check listener array args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Array, "check good listener argument generate an error");
				done();
			}).emit("eventName", []);

		});

		it("should check listener object args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Object, "check good listener argument generate an error");
				done();
			}).emit("eventName", {});

		});

		it("should check listener buffer args", (done) => {

			new events().prependOnceListener("error", done).prependOnceListener("eventName", (test) => {
				assert.strictEqual("object", typeof test, "check good listener argument generate an error");
				assert.strictEqual(true, test instanceof Buffer, "check good listener argument generate an error");
				done();
			}).emit("eventName", new Buffer([]));

		});

	});

});

describe("test throwing an error in callback", () => {

	it("should throw an error in callback", (done) => {

		new events().on("error", (err) => {

			assert.strictEqual("object", typeof err, "throwing an error in callback throws an invalid error");
			assert.strictEqual(true, err instanceof Error, "throwing an error in callback throws an invalid error");

			done();

		}).on("eventName", () => {
			throw new Error("error");
		}).emit("eventName");

	});

});

describe("test remove listener", () => {

	it("should not fire event", (done) => {

		new events().on("error", done).on("eventName", () => {
			(1, console).log("doesn't work");
		}).removeAllListeners("eventName").emit("eventName");

		done();

	});

});
