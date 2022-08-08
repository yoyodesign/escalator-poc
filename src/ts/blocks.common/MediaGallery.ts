import Swiper, { Navigation, Pagination } from "swiper";

export default class MediaGallery extends HTMLElement {
	public static NAME = "media-gallery";

    #swiper: Swiper;

	connectedCallback(): void {
        this.#swiper = new Swiper(".swiper", {
			modules: [Navigation, Pagination],
			direction: "horizontal",
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			  }
		});
	}

	disconnectedCallback(): void {
	}
}

customElements.define(MediaGallery.NAME, MediaGallery);
