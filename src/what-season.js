'use strict';
module.exports = function getSeason(date) {
        let error = new Error('wrong type');
        // let date = 'foo';
        // let check = date instanceof Date;
        const seasons = {
            0: 'winter',
            1: 'winter',
            2: 'spring',
            3: 'spring',
            4: 'spring',
            5: 'summer',
            6: 'summer',
            7: 'summer',
            8: 'autumn',
            9: 'autumn',
            10: 'autumn',
            11: 'winter'
        };
        if (date === undefined || date === '') {
            return 'Unable to determine the time of year!';
        } else {
            if (date instanceof Date && !isNaN(date.valueOf())) {
                return seasons[date.getMonth()];
            } else {

            throw error;
            }
            }
};