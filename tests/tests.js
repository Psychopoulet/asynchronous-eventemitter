"use strict";

// deps

	const	assert = require("assert"),
			events = require(require("path").join(__dirname, "..", "dist", "main.js"));

// private

	var is6OrMore = (6 <= parseInt(process.version.replace("v", "").split(".")[0]));

// tests

describe("wrong args", function() {

	let ee = new events();

	it("should check addListener args", function() {
		assert.throws(function() { ee.addListener(function() {}, function() {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(function() { ee.addListener("eventName", "test"); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check on args", function() {
		assert.throws(function() { ee.on(function() {}, function() {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(function() { ee.on("eventName", "test"); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check once args", function() {
		assert.throws(function() { ee.once(function() {}, function() {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(function() { ee.once("eventName", "test"); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check prependListener args", function() {
		assert.throws(function() { ee.prependListener(function() {}, function() {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(function() { ee.prependListener("eventName", "test"); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check prependOnceListener args", function() {
		assert.throws(function() { ee.prependOnceListener(function() {}, function() {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(function() { ee.prependOnceListener("eventName", "test"); }, TypeError, "check wrong listener does not throw an error");
	});

	it("should check removeListener args", function() {
		assert.throws(function() { ee.removeListener(function() {}, function() {}); }, TypeError, "check wrong eventName does not throw an error");
		assert.throws(function() { ee.removeListener("eventName", "test"); }, TypeError, "check wrong listener does not throw an error");
	});

});

describe("good args", function() {

	let ee = new events();

	it("should check addListener args", function() {
		assert.doesNotThrow(function() { ee.addListener("eventName", function() {}); }, TypeError, "check wrong eventName throws an error");
	});

	it("should check on args", function() {
		assert.doesNotThrow(function() { ee.on("eventName", function() {}); }, TypeError, "check wrong eventName throws an error");
	});

	it("should check once args", function() {
		assert.doesNotThrow(function() { ee.once("eventName", function() {}); }, TypeError, "check wrong eventName throws an error");
	});

	it("should check prependListener args", function() {

		if (is6OrMore) {
			assert.doesNotThrow(function() { ee.prependListener("eventName", function() {}); }, TypeError, "check wrong eventName throws an error");
		}
		else {
			assert.throws(function() { ee.prependListener("eventName", function() {}); }, Error, "check wrong eventName does not throw an error");
		}
		
	});

	it("should check prependOnceListener args", function() {

		if (is6OrMore) {
			assert.doesNotThrow(function() { ee.prependOnceListener("eventName", function() {}); }, TypeError, "check wrong eventName throws an error");
		}
		else {
			assert.throws(function() { ee.prependOnceListener("eventName", function() {}); }, Error, "check wrong eventName does not throw an error");
		}

	});

	it("should check removeListener args", function() {
		assert.doesNotThrow(function() { ee.removeListener("eventName", function() {}); }, TypeError, "check wrong eventName throws an error");
	});

});

describe("test listener args", function() {

	it("should check listener undefined args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("undefined", typeof test, "check good listener argument generate an error");
			done();
		}).emit("eventName");

	});

	it("should check listener null args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("object", typeof test, "check good listener argument generate an error");
			done();
		}).emit("eventName", null);

	});

	it("should check listener boolean args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("boolean", typeof test, "check good listener argument generate an error");
			done();
		}).emit("eventName", true);

	});

	it("should check listener string args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("string", typeof test, "check good listener argument generate an error");
			done();
		}).emit("eventName", "test");

	});

	it("should check listener integer args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("number", typeof test, "check good listener argument generate an error");
			done();
		}).emit("eventName", 1);

	});

	it("should check listener float args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("number", typeof test, "check good listener argument generate an error");
			done();
		}).emit("eventName", 1.1);

	});

	it("should check listener function args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("function", typeof test, "check good listener argument generate an error");
			done();
		}).emit("eventName", function() {});

	});

	it("should check listener array args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("object", typeof test, "check good listener argument generate an error");
			assert.strictEqual(true, test instanceof Array, "check good listener argument generate an error");
			done();
		}).emit("eventName", []);

	});

	it("should check listener object args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("object", typeof test, "check good listener argument generate an error");
			assert.strictEqual(true, test instanceof Object, "check good listener argument generate an error");
			done();
		}).emit("eventName", {});

	});

	it("should check listener buffer args", function(done) {

		new events().on("eventerror", done).on("eventName", function(test) {
			assert.strictEqual("object", typeof test, "check good listener argument generate an error");
			assert.strictEqual(true, test instanceof Buffer, "check good listener argument generate an error");
			done();
		}).emit("eventName", new Buffer([]));

	});

});

describe("test throwing an error in callback", function() {

	it("should throw an error in callback", function(done) {

		new events().on("eventerror", function(msg) {

			// avoid loop
			try {
				assert.strictEqual("object", typeof msg, "throwing an error in callback throws an invalid error");
				assert.strictEqual(true, msg instanceof Error, "throwing an error in callback throws an invalid error");
			}
			catch(e) {
				(1, console).log(e);
			}

			done();

		}).on("eventName", function() {
			throw new Error("error");
		}).emit("eventName");

	});

});
