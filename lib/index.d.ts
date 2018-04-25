/// <reference types="node" />

declare module "asynchronous-eventemitter" {

	class AsynchronousEventEmitter {

		constructor();

		public addListener(eventName: string, listener: (...args) => void): AsynchronousEventEmitter;
		public emit(eventName: string, ...args): AsynchronousEventEmitter;
		public on(eventName: string, listener: (...args) => void): AsynchronousEventEmitter;
		public once(eventName: string, listener: (...args) => void): AsynchronousEventEmitter;
		public prependListener(eventName: string, listener: (...args) => void): AsynchronousEventEmitter;
		public prependOnceListener(eventName: string, listener: (...args) => void): AsynchronousEventEmitter;
		public removeListener(eventName: string, listener: (...args) => void): AsynchronousEventEmitter;
		public removeAllListeners(eventName: string, listener: (...args) => void): AsynchronousEventEmitter;

	}

	export = AsynchronousEventEmitter;

}
