import {
	clearAllBodyScrollLocks,
	disableBodyScroll,
	enableBodyScroll,
} from "body-scroll-lock";
import removeFromArray from "../utils.common/removeFromArray";
import { runCallbacks } from "../utils.common/callbackUtils";

class ScrollService {
	#queue: (() => any)[];
	#rafStarted: boolean;
	#lastScrollPosition: number;
	#currentScrollPosition: number;

	constructor() {
		this.#queue = [];
		this.#rafStarted = false;
	}

	clearAllBodyScrollLocks = (): void => {
		clearAllBodyScrollLocks();
	};

	disableBodyScroll = (
		target: HTMLElement | Element
	): void => {
		disableBodyScroll(target, {
			allowTouchMove: (el: HTMLElement | Element) => {
				while (el && el !== document.body) {
					if (
						el.getAttribute("body-scroll-lock-ignore") !== null
					) {
						return true;
					}

					if (el.parentElement) {
						el = el.parentElement;
					}
				}
			},
		});
	};

	enableBodyScroll = (target: HTMLElement | Element): void => {
		enableBodyScroll(target);
	};

	add = (callback: () => any): void => {
		this.#queue.push(callback);

		if (!!window.requestAnimationFrame) {
			if (!this.#rafStarted) {
				this.#updateScrollPosition();
			}
		}
	};

	remove = (callback: () => any): void => {
		this.#queue = removeFromArray(this.#queue, callback);
	};

	getScrollPosition = (): number => {
		this.#setCurrentScrollPosition();

		return this.#currentScrollPosition;
	};

	saveScrollPosition = (): void => {
		this.#lastScrollPosition = this.getScrollPosition();
	};

	scrollTo = function (target) {
		if (typeof target === "number") {
			window.scrollTo({
				top: target,
			});
		} else {
			if (typeof target === "string") {
				target = document.querySelector(target) as HTMLElement;
			}
			target.scrollIntoView(true);
			target.focus();
		}
	};

	scrollToLastPosition = (): void => {
		this.scrollTo(this.#lastScrollPosition);
	};

	getLastScrollPosition = (): number => {
		return this.#lastScrollPosition;
	};

	#setCurrentScrollPosition = (): void => {
		if (window.pageYOffset) {
			this.#currentScrollPosition = window.pageYOffset;
		} else if (
			document.documentElement &&
			document.documentElement.scrollTop
		) {
			this.#currentScrollPosition = document.documentElement.scrollTop;
		} else if (document.body.scrollTop) {
			this.#currentScrollPosition = document.body.scrollTop;
		} else {
			this.#currentScrollPosition = 0;
		}
	};

	#updateScrollPosition = (): void => {
		this.#rafStarted = true;

		this.#setCurrentScrollPosition();

		if (this.#lastScrollPosition !== this.#currentScrollPosition) {
			runCallbacks(this.#queue, null);
			this.#lastScrollPosition = this.#currentScrollPosition;
		}

		window.requestAnimationFrame(() => this.#updateScrollPosition());
	};
}

const scrollService = new ScrollService();

export default scrollService;
