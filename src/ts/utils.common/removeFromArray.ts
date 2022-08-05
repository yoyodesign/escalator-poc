/**
 * Removes item from array if it exists
 *
 * @export
 * @param {any[]} array
 * @param {*} item
 * @returns {any[]}
 */
 export default function removeFromArray(array: any[], item: any): any[] {
	// copy array before modifying to ensure it doesn't change
	const origArray = array.slice(0);
	const index = origArray.indexOf(item);
	if (index > -1) {
		origArray.splice(index, 1);
	}
	return origArray;
}
