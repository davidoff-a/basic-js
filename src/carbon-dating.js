'use strict';
// const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	// const sampleActivity = '1';

	if (typeof data === String && data !== '') {
		if (Number(data) && Number(data) > 0) {
			return (
				Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
			);
		}
		return false;
	} else {
		return false;
	}
};
	




  


// };
