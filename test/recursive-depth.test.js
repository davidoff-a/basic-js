const assert = require('assert');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

Object.freeze(assert);

const calculateDepth = require('../src/recursive-depth.js');

const createFlatArr = (length) => Array.from({length}, () => Math.floor(Math.random() * length));


describe('Recursive depth', () => {
    //Presence requirement
    describe('variable presence', () => {
        it('function calculateDepth exists', () => {
            expect(calculateDepth).to.exist;
        });
    });

    //Functional requirements
    describe('functional requirements', () => {
        it('returns correct depth of flat arrays', () => {
            for (let i = 1; i < 100; i++) {
                const flatArr = createFlatArr(i);
                assert.equal(calculateDepth(flatArr), 1);
            }
        });
        it('returns correct depth of nested arrays', () => {
            assert.equal(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
            assert.equal(calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2);
            assert.equal(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 5);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 15);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 25);
            assert.equal(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 31);
        });
    });
});
