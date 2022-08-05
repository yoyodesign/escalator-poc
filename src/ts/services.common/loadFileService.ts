class LoadFileService {
	#loadedFiles: (HTMLScriptElement | HTMLLinkElement)[];
	#isLoading: boolean;

	constructor() {
		this.#loadedFiles = [];
		this.#isLoading = false;
	}
	/**
	 * Load a file and returns a promise once load event has fired
	 *
	 * @param {string} url
	 * @returns
	 * @memberof LoadFileService
	 */
	loadFile = (
		url: string,
		fileType: "css" | "js" | string = "",
		waitForLoadEvent = true
	): Promise<void> => {
		return new Promise((resolve, reject) => {
			if (fileType === "") {
				var temp = url.split(".").pop();
				if (temp) {
					fileType = temp;
				}
			}

			const head = document.querySelector("head");
			let hasFile = false;

			this.#loadedFiles.forEach((file) => {
				if (
					file.getAttribute("src") === url ||
					file.getAttribute("href") === url
				) {
					hasFile = true;
				}
			});

			if (head && hasFile === false && this.#isLoading === false) {
				this.#isLoading = true;

				let newFile: any;
				switch (fileType) {
					case "css":
						newFile = document.createElement("link");
						newFile.type = "text/css";
						newFile.rel = "stylesheet";
						newFile.href = url;
						break;
					case "js":
						newFile = document.createElement("script");
						newFile.type = "text/javascript";
						newFile.async = true;
						newFile.defer = true;
						newFile.src = url;
						break;
				}

				head.appendChild(newFile);

				if (waitForLoadEvent === true) {
					newFile.addEventListener("load", () => {
						this.#loadedFiles.push(newFile);
						this.#isLoading = false;
						resolve();
					});
				} else {
					this.#loadedFiles.push(newFile);
					this.#isLoading = false;
					resolve();
				}

				newFile.addEventListener("error", () => {
					this.#isLoading = false;
					reject(new Error(`${url} failed to load.`));
				});
			} else {
				// Wait a bit a try again
				requestAnimationFrame(() => {
					return this.loadFile(
						url,
						fileType,
						waitForLoadEvent
					).finally(() => {
						resolve();
					});
				});
			}
		});
	}

	/**
	 * Loads multiple files and returns a promise once complete
	 *
	 * @param {string[]} urls
	 * @returns
	 * @memberof LoadFileService
	 */
	loadFiles = (urls: string[]): Promise<void> => {
		return new Promise((resolve, reject) => {
			urls.forEach(async (url: string) => {
				await this.loadFile(url).catch(() => {
					reject();
				});
			});

			resolve();
		});
	}

	/**
	 * Removes file a tag according to its url
	 *
	 * @param {string} url
	 * @returns
	 * @memberof LoadFileService
	 */
	removeFile = (url: string): Promise<void> => {
		return new Promise((resolve, reject) => {
			this.#loadedFiles.forEach((file, index) => {
				if (
					file.getAttribute("src") === url ||
					file.getAttribute("href") === url
				) {
					file.remove();

					this.#loadedFiles = this.#loadedFiles.splice(index, 1);
					resolve();
				}
			});

			reject(new Error(`Unable to remove file: ${url}`));
		});
	}

	/**
	 * Removes file tags according to their urls in order of appearance in array
	 *
	 * @param {string[]} urls
	 * @returns
	 * @memberof LoadFileService
	 */
	removeFiles = (urls: string[]): Promise<void> => {
		return new Promise((resolve, reject) => {
			urls.forEach(async (url: string) => {
				await this.removeFile(url).catch(() => {
					reject();
				});
			});

			resolve();
		});
	}
}

const loadFileService = new LoadFileService();

export default loadFileService;
