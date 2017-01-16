
"use strict";

	// deps

	const path = require("path");
	const gulp = require("gulp");
	const plumber = require("gulp-plumber");
	const excludeGitignore = require("gulp-exclude-gitignore");

	const eslint = require("gulp-eslint");

	const babel = require("gulp-babel");

	const mocha = require("gulp-mocha");

	require("babel-preset-es2015-node4");

// private

	var _gulpFile = path.join(__dirname, "gulpfile.js");
	var _libFiles = path.join(__dirname, "lib", "**", "*.js");
	var _distFiles = path.join(__dirname, "dist", "**", "*.js");
	var _unitTestsFiles = path.join(__dirname, "tests", "**", "*.js");
	var _allJSFiles = [_gulpFile, _libFiles, _distFiles, _unitTestsFiles];

// tasks

gulp.task("babel", function () {

	return gulp.src(_libFiles)
		.pipe(babel({
			presets: ["es2015-node4"]
		}))
		.pipe(gulp.dest("dist"));

});

gulp.task("eslint", ["babel"], function () {

	return gulp.src(_allJSFiles)
		.pipe(plumber())
		.pipe(excludeGitignore())
		.pipe(eslint({

			// http://eslint.org/docs/rules/

			"rules": {

				// strict
				"strict": ["error", "global"],

				// style
				"linebreak-style": ["error", "unix"],
				"quotes": ["error", "double"],

				// strict compare
				"eqeqeq": ["error", "always"],

				// rules
				"default-case": "error",
				"no-alert": "error",
				"no-eval": "error",
				"no-extend-native": "error",
				"no-implied-eval": "error",
				"no-multi-spaces": "error"

			},

			"env": {
				"node": true, "es6": true, "mocha": true
			},

			"extends": "eslint:recommended"

		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());

});

gulp.task("mocha", ["eslint"], function () {

	return gulp.src(_unitTestsFiles)
		.pipe(plumber())
		.pipe(mocha({reporter: "spec"}));

});

// watcher

gulp.task("watch", function () {
	gulp.watch(_allJSFiles, ["mocha"]);
});


// default

gulp.task("default", ["mocha"]);
