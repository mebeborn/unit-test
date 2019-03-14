/* eslint-disable no-undef */
const tasks = require('../tasks.js');

describe("create arrays", () => {
    it("return array", () => {
        expect(tasks.getArray(3)).toEqual([1, 2, 3]);
    });
});

describe('squer numbers', () => {
    it('return array numbers', () => {
        expect(tasks.naturalNumbers(20)).toEqual([2, 4])
    });
    it('return not object', () => {
        expect(tasks.naturalNumbers(20)).not.toEqual({})
    });
    it('return not number', () => {
        expect(tasks.naturalNumbers(20)).not.toEqual(Number)
    });
    it('return not stirng', () => {
        expect(tasks.naturalNumbers(20)).not.toEqual(String)
    });
});

describe("Pythagorean triples", () => {
    it("Expect 1", () => {
        expect(tasks.PythagoreanTriple(6)).toEqual([[3,4,5]]);
    });
});
