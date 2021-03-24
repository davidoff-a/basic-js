'use strict';
// const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
/* dateSample('0'); */
module.exports = function dateSample(sampleActivity) {
	let data=0;
	if (
		typeof sampleActivity !== 'string' ||
		isNaN(parseFloat(sampleActivity)) ||
		Number.parseFloat(sampleActivity) <= 0 ||
		Number.parseFloat(sampleActivity) > MODERN_ACTIVITY ||
		!isFinite(sampleActivity)
	) {
		return false;
	} else {
		data = Math.ceil(
				Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
				(Math.log(2) / HALF_LIFE_PERIOD)
		);
	}
	return data;
};
