const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

describe('HapiJS Server', () => {
  beforeEach(() => {
    this.sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    this.sandbox.restore();
  });

  it('should be passed in this example', () => {
    expect(1).to.equal(1);
  });
});
