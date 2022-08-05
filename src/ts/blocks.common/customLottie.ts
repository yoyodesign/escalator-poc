import { LOTTIE_FILES } from "../constants.common/lottieFiles";
import { CloneAttributes } from "../utils.common/elementUtils";
import { runCallbacks } from "../utils.common/callbackUtils";

export default class CustomLottie extends HTMLElement {
	public static NAME = LOTTIE_FILES.name;

	#loaded: boolean;
	#lottiePlayer: any;
	#callbacks: (() => any)[];
	#intersectionObserver: IntersectionObserver;

	constructor() {
		super();

		this.#loaded = false;
		this.#callbacks = [];
	}

	#addCallback = (callback: () => any): void => {
		if (this.#loaded) {
			callback();
			return;
		}
		this.#callbacks.push(callback);
	};

	#handleIntersection = (entries: IntersectionObserverEntry[]): void => {
		entries.forEach((entry) => {
			this.#addCallback(() => {
				if (this.#lottiePlayer.autoplay) {
					if (entry.isIntersecting) {
						if (!this.#lottiePlayer.loop) {
							this.#lottiePlayer.seek(0);
						}
						this.#lottiePlayer.play();
					} else {
						this.#lottiePlayer.pause();
					}
				}
			});
		});
	};

	#handleLoad = (): void => {
		runCallbacks(this.#callbacks, null);
		this.#loaded = true;
	};

	#init = () => {
		const injectedScript = document.querySelector(
			`[${LOTTIE_FILES.scriptAttr}]`
		);
		if (!injectedScript) {
			const script = document.createElement("script");
			script.src = LOTTIE_FILES.scriptSrc;
			script.setAttribute(LOTTIE_FILES.scriptAttr, "");
			document.body.appendChild(script);
		}

		this.#lottiePlayer = document.createElement("lottie-player");
		CloneAttributes(this, this.#lottiePlayer);
		this.appendChild(this.#lottiePlayer);
		this.#lottiePlayer.addEventListener("ready", this.#handleLoad);

		this.#intersectionObserver = new IntersectionObserver(
			this.#handleIntersection,
			{
				root: null,
				rootMargin: "0px",
				threshold: 0,
			}
		);
		this.#intersectionObserver.observe(this);
	};

	#destroy = () => {
		this.#lottiePlayer.removeEventListener("ready", this.#handleLoad);
		this.#lottiePlayer.remove();
		this.#intersectionObserver.unobserve(this);
	};

	connectedCallback(): void {
		this.#init();
	}

	disconnectedCallback(): void {
		this.#destroy();
	}
}

customElements.define(CustomLottie.NAME, CustomLottie);
