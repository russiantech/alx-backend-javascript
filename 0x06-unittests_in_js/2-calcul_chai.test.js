//const chai = require('chai');
//const expect = chai.expect;
//const calculateNumber = require('./2-calcul_chai')

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    it('should return the sum of numbers rounded off', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return the difference of numbers rounded off', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return the division of numbers rounded off', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if rounded b is 0', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
