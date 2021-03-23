'use strict';
// const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if (
		typeof sampleActivity !== 'string' ||
		sampleActivity === NaN ||
		Number.parseFloat(sampleActivity) < 0 ||
		Number.parseFloat(sampleActivity) > MODERN_ACTIVITY
	) {
		return false;
	} else {
		return Math.ceil(
			Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
				(Math.log(2) / HALF_LIFE_PERIOD)
		);
	}
};
