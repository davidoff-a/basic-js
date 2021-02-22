'use strict';

module.exports = function createDreamTeam(members) {
    let arr = [];
    if (members === '' || members === undefined || !Array.isArray(members)) {
      return false;
    } else {
      members.map((item) => {
            if (typeof (item) === 'string') {
              arr.push(item.trim()[0].toUpperCase());
              arr.sort();

            } else {
              return false;
            }
        
        });
        }
        return arr.join('');
};
