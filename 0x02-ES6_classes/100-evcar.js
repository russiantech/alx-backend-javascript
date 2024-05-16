// 100-evcar.js

import Car from './10-car.js';

const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[rangeSymbol] = range;
  }

  get range() {
    return this[rangeSymbol];
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
