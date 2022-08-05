import removeFromArray from "../utils.common/removeFromArray";

export interface research {
	isValid: boolean;
	isEventArray?: boolean;
	isCallbackArray?: boolean;
	eventArray?: string[];
	callbackArray?: any[];
}

export interface eventGroup {
	element: any;
	event: string;
	callback: any;
	bindedCallback?: any;
}

export interface removeArguments {
	event?: string | string[];
	callback?: any | any[];
	element?: any;
}

const SERVICE_NAME = "EventService";

export default class EventService {
	#paused: boolean;
	#eventGroups: eventGroup[];

	constructor() {
		this.#paused = false;
		this.#eventGroups = [];
	}

	add = (
		event: string | string[],
		callback: any | any[],
		that?: any,
		element?: any
	): void => {
		if (this.#paused) {
			this.playAll();
		}

		const inputResearch = this.#isValid(element, event, callback);

		if (inputResearch.isValid) {
			if (inputResearch.isEventArray) {
				if (inputResearch.isCallbackArray
					&& inputResearch.callbackArray
					&& inputResearch.eventArray) {
					const oneCallback =
						inputResearch.callbackArray.length === 1;

					for (
						let i = 0;
						i < inputResearch.eventArray.length;
						i++
					) {
						if (oneCallback) {
							this.#createEventListener(
								element,
								inputResearch.eventArray[i],
								inputResearch.callbackArray[0],
								that
							);
						} else {
							this.#createEventListener(
								element,
								inputResearch.eventArray[i],
								inputResearch.callbackArray[i],
								that
							);
						}
					}
				}
			} else {
				this.#createEventListener(
					element,
					event as string,
					callback as any,
					that
				);
			}
		}
	}

	pauseAll = (): void => {
		this.#paused = true;
		this.#removeEvents(this.#eventGroups, false);
	};

	pausePlayAll = (): void => {
		this.#paused ? this.playAll() : this.pauseAll();
		this.#paused = !this.#paused;
	};

	playAll = (): void => {
		this.#paused = false;
		this.#eventGroups.forEach((eventGroup) =>
			this.#addListenerFromEventGroup(eventGroup)
		);
	};

	remove = (removeArguments: removeArguments): void => {
		if (removeArguments) {
			const event = removeArguments.event;
			const callback = removeArguments.callback;
			const element = removeArguments.element
				? removeArguments.element
				: document;
			const noEvent = !event || event === "" || event === [];
			const noCallback =
				!callback || callback === "" || callback === [];
			const removeGroups: eventGroup[] = [];

			this.#eventGroups.forEach((eventGroup) => {
				if (eventGroup.element === element) {
					const isEventArray = !(typeof event === "string");
					const isCallbackArray = !(
						typeof callback === "function"
					);
					let eventArray;
					let callbackArray;

					if (isEventArray) {
						eventArray = event as string[];
					}
					if (isCallbackArray) {
						callbackArray = callback as any[];
					}

					if (
						(noEvent && noCallback) ||
						(noCallback &&
							isEventArray &&
							eventArray.indexOf(eventGroup.event) >= 0) ||
						(noCallback && event === eventGroup.event) ||
						(noEvent &&
							isCallbackArray &&
							callbackArray.indexOf(eventGroup.callback) >=
								0) ||
						(noEvent && callback === eventGroup.callback) ||
						(isEventArray &&
							isCallbackArray &&
							eventArray.indexOf(eventGroup.event) >= 0 &&
							callbackArray.indexOf(eventGroup.callback) >=
								0) ||
						(isEventArray &&
							eventArray.indexOf(eventGroup.event) >= 0 &&
							callback === eventGroup.callback) ||
						(isCallbackArray &&
							event === eventGroup.event &&
							callbackArray.indexOf(eventGroup.callback) >=
								0) ||
						(event === eventGroup.event &&
							callback === eventGroup.callback)
					) {
						removeGroups.push(eventGroup);
					}
				}
			});

			this.#removeEvents(removeGroups);
		} else {
			this.#logger(4);
		}
	};

	removeAll = (): void => {
		this.#removeEvents(this.#eventGroups);
	};

	#removeEvents = (
		removeGroups: eventGroup[],
		removeFromStorage = true
	): void => {
		while (removeGroups.length > 0) {
			removeGroups[0].element.removeEventListener(
				removeGroups[0].event,
				removeGroups[0].bindedCallback
					? removeGroups[0].bindedCallback
					: removeGroups[0].callback
			);

			if (removeFromStorage) {
				this.#eventGroups = removeFromArray(this.#eventGroups, removeGroups[0]);
			}

			removeGroups = removeFromArray(removeGroups, removeGroups[0]);
		}
	}

	#createEventListener = (
		element: any,
		event: string,
		callback: any,
		that: any = null
	): void => {
		const newEventGroup: eventGroup = {
			element: element,
			event: event,
			callback: callback,
		};

		if (that) {
			newEventGroup.bindedCallback = callback.bind(that);
		}

		this.#addListenerFromEventGroup(newEventGroup);
		this.#eventGroups.push(newEventGroup);
	}

	#addListenerFromEventGroup = (newEventGroup: eventGroup): void => {
		newEventGroup.element.addEventListener(
			newEventGroup.event,
			newEventGroup.bindedCallback
				? newEventGroup.bindedCallback
				: newEventGroup.callback
		);
	}

	#isValid = (
		element: any,
		event: string | string[],
		callback: any | any[]
	): research => {
		const returnVal: research = { isValid: false };

		if (
			!element ||
			!event ||
			event === "" ||
			event === [] ||
			!callback ||
			callback === []
		) {
			this.#logger(0);
		} else {
			returnVal.isEventArray = !(typeof event === "string");
			returnVal.isCallbackArray = !(typeof callback === "function");

			switch (
				+returnVal.isEventArray +
				+returnVal.isCallbackArray * 2
			) {
				case 0: {
					returnVal.isValid = true;
					break;
				}
				case 1: {
					this.#logger(1);
					break;
				}
				case 2: {
					returnVal.isValid = true;
					break;
				}
				case 3: {
					const eventArray = event as string[];
					const callbackArray = callback as any[];

					if (
						eventArray.length !== 1 &&
						callbackArray.length !== 1 &&
						eventArray.length !== callbackArray.length
					) {
						this.#logger(2);
						break;
					}

					returnVal.isValid = true;
					returnVal.eventArray = eventArray;
					returnVal.callbackArray = callbackArray;
					break;
				}
				default: {
					this.#logger(3);
					break;
				}
			}
		}

		return returnVal;
	}

	#logger = (errorType: number): void => {
		let errorMsg: string;

		switch (errorType) {
			case 0: {
				errorMsg =
					"Please make sure the element and all events / callbacks have values set.";
				break;
			}
			case 1: {
				errorMsg =
					"Cannot assign a single event to multiple callbacks, please collect all callbacks into a single function.";
				break;
			}
			case 2: {
				errorMsg =
					"Please ensure both lists contain either 1 or equal items to the other.";
				break;
			}
			case 3: {
				errorMsg =
					"Unknown error with variable types, please check your input types and try again.";
				break;
			}
			case 4: {
				errorMsg =
					"Please enter remove arguments or use 'removeAll' to remove all event listeners.";
				break;
			}
			default: {
				errorMsg = "Unknown error, please check code.";
				break;
			}
		}

		console.warn(`${SERVICE_NAME}: ${errorMsg}`);
	}
}
