describe('is-io-version', () => {
  let subject;
  beforeEach(() => subject = require('../lib/is-io-version'))
  
  describe('v1', () => {
    it('should report an io version', () => { 
      subject('1.0.0').should.be.true();
    });
  });

  describe('v2', () => {
    it('should report an io version', () => {
      subject('2.0.0').should.be.true();
    });
  });

  describe('v3', () => {
    it('should report an io version', () => {
      subject('3.0.0').should.be.true();
    });
  });

  describe('v0', () => {
    it('should NOT report an io version', () => {
      subject('0.10.41').should.be.false();
    });
  });
    
  describe('v4', () => {
    it('should NOT report an io version', () => {
      subject('4.0.0').should.be.false();
    });
  });

  describe('v10', () => {
    it('should NOT report an io version', () => {
      subject('10.0.0').should.be.false();
    });
  });
});
