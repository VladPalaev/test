import * as $ from 'jquery'

function createAnalytics() {
	let count = 0;
	let isDestroy = false;
	const listener = () => count++;

	$(document).on('click', listener)

	return {
		destroy() {
			$(document).off('click', listener);
			isDestroy = true;
			return 'Analytics destroy';
		},

		getClicks() {
			if (isDestroy) {
				return `analytics destroy. Is count ${count}`;
			}

			return count;
		}
	}
}

window.analytics = createAnalytics();