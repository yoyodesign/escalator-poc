export function runCallbacks(callbackArray: (() => any)[], event: Event | null): void {
	const callbacks = callbackArray.slice();
	callbacks.forEach(function (callback: (event: Event | null) => void) {
		callback(event);
	});
}
