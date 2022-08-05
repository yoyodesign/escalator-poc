/**
 * A wrapper for iframe video embeds.
 *
 * @example
 * 	<video-embed>
 * 		<iframe src="about:blank" data-src="{YouTube or Vimeo embed URL}" />
 * 		(or <video src="{video URL}" />)
 * 		<button type="button">Play video</button>
 * 	</video-embed>
 */
export default class VideoEmbed extends HTMLElement {
	public static NAME = "video-embed";

	private _button: HTMLButtonElement;
	private _iframe: HTMLIFrameElement;
	private _video: HTMLVideoElement;
	private _poster: HTMLElement;

	connectedCallback(): void {
		this._button = this.querySelector("button");
		this._iframe = this.querySelector("iframe");
		this._video = this.querySelector("video");
		this._poster = this.querySelector(`[${VideoEmbed.NAME}-poster]`);

		if (this._isValid()) {
			this._handleButtonClick = this._handleButtonClick.bind(this);

			this._button.addEventListener("click", this._handleButtonClick);
		}
	}

	disconnectedCallback(): void {
		if (this._isValid()) {
			this._button.removeEventListener("click", this._handleButtonClick);
		}
	}

	private _isValid(): boolean {
		return (
			this._button != null &&
			(this._iframe != null || this._video != null)
		);
	}

	private _handleButtonClick(): void {
		if (this._poster) {
			this._hide(this._poster);
		}

		if (this._iframe) {
			this._iframe.classList.remove("pointer-events-none");

			if (this._iframe.dataset.src) {
				this._iframe.src = this._iframe.dataset.src;
			}

			this._show(this._iframe);
		}

		if (this._video) {
			this._show(this._video);
			this._video.autoplay = true;
			this._video.play();
		}

		this._hide(this._button);
	}

	private _hide(element: HTMLElement): void {
		const hideClasses = element.getAttribute(
			`[${VideoEmbed.NAME}-hide-classes]`
		);

		if (hideClasses) {
			element.classList.add(...hideClasses.split(" "));
		} else {
			element.remove();
		}
	}

	private _show(element: HTMLElement): void {
		const showClasses = element.getAttribute(
			`[${VideoEmbed.NAME}-show-classes]`
		);

		if (showClasses) {
			element.classList.add(...showClasses.split(" "));
		}
	}
}

customElements.define(VideoEmbed.NAME, VideoEmbed);
