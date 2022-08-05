/**
 * Sets a cookie value.
 *
 * @param {string} name
 * @param {string} value
 * @param {number} exdays
 */
export function SetCookie(name: string, value: string, exdays: number): void {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	const expires = "expires=" + d.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

/**
 * Gets a cookie value.
 *
 * @param {string} name
 */
export function GetCookie(name: string): string {
	const finalName = name + "=";
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(finalName) == 0) {
			return c.substring(finalName.length, c.length);
		}
	}
	return "";
}
