// https://developer.mozilla.org/en-US/docs/Web/Events/resize
import { MEDIA_QUERIES } from "../constants.common/mediaQueries";
import removeFromArray from "../utils.common/removeFromArray";

class ResizeService {
	heightChangeAmount: number;
	widthChangeAmount: number;

	#callbacks: (() => any)[];
	#startCallbacks: (() => any)[];
	#width: number;
	#height: number;
	#isResizing: boolean;
	#resizeComplete: NodeJS.Timeout;

	constructor() {
		this.#callbacks= [];
		this.#startCallbacks = [];
		this.#width = window.innerWidth;
		this.#height = window.innerHeight;
		this.#isResizing = false;
	}

	add = (callback: () => any) => {
		if (!this.#callbacks.length && !this.#startCallbacks.length) {
			window.addEventListener("orientationchange", this.#resize);
			window.addEventListener("resize", this.#resize);
		}

		this.#addCallback(callback);
	};

	addToStart = (callback: () => any) => {
		if (!this.#callbacks.length && !this.#startCallbacks.length) {
			window.addEventListener("orientationchange", this.#resize);
			window.addEventListener("resize", this.#resize);
		}

		this.#addToStartCallback(callback);
	};

	remove = (callback: () => any) => {
		this.#callbacks = removeFromArray(this.#callbacks, callback);

		if (!this.#callbacks.length && !this.#startCallbacks.length) {
			window.removeEventListener("orientationchange", this.#resize);
			window.removeEventListener("resize", this.#resize);
		}
	};

	removeFromStart = (callback: () => any) => {
		this.#startCallbacks = removeFromArray(this.#startCallbacks, callback);

		if (!this.#callbacks.length && !this.#startCallbacks.length) {
			window.removeEventListener("orientationchange", this.#resize);
			window.removeEventListener("resize", this.#resize);
		}
	}; // refactor maybe

	isToMd = (): boolean => {
		return matchMedia(MEDIA_QUERIES.toMd).matches === true;
	};

	isXl = (): boolean => {
		return matchMedia(MEDIA_QUERIES.xl).matches === true;
	};

	isMd = (): boolean => {
		return matchMedia(MEDIA_QUERIES.md).matches === true;
	};

	isLg = (): boolean => {
		return matchMedia(MEDIA_QUERIES.lg).matches === true;
	};

	isToLg = (): boolean => {
		return matchMedia(MEDIA_QUERIES.toLg).matches === true;
	};

	// fired on resize event
	#resize = (): void => {
		if (!resizeService.#isResizing) {
			resizeService.#isResizing = true;

			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(this.#runStartCallbacks);
			} else {
				setTimeout(this.#runStartCallbacks, 66);
			}
		}

		clearTimeout(this.#resizeComplete);
		this.#resizeComplete = setTimeout(() => {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(this.#runCallbacks);
			} else {
				setTimeout(this.#runCallbacks, 66);
			}
		}, 250);
	}

	// run the actual callbacks
	#runCallbacks = (): void => {
		resizeService.#isResizing = false;
		resizeService.heightChangeAmount = Math.abs(
			this.#height - window.innerHeight
		);
		resizeService.widthChangeAmount = Math.abs(
			this.#width - window.innerWidth
		);

		// Only run on width changes or if height change is greater than 150px
		if (window.innerWidth != this.#width || window.innerHeight != this.#height) {
			this.#width = window.innerWidth;
			this.#height = window.innerHeight;

			this.#callbacks.forEach(function (callback) {
				callback();
			});
		}
	}

	#runStartCallbacks = (): void => {
		resizeService.heightChangeAmount = Math.abs(
			this.#height - window.innerHeight
		);
		resizeService.widthChangeAmount = Math.abs(
			this.#width - window.innerWidth
		);
		if (window.innerWidth != this.#width || window.innerHeight != this.#height) {
			this.#startCallbacks.forEach(function (callback) {
				callback();
			});
		}
	}

	// adds callback to loop
	#addCallback = (callback: () => any): void => {
		if (callback && this.#callbacks.indexOf(callback) === -1) {
			this.#callbacks.push(callback);
		}
	}

	#addToStartCallback = (callback: () => any): void => {
		if (callback && this.#startCallbacks.indexOf(callback) === -1) {
			this.#startCallbacks.push(callback);
		}
	}
}

const resizeService = new ResizeService();

export default resizeService;
