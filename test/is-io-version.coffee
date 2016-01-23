describe 'is-io-version', ->
  Given -> @subject = require '../lib/is-io-version'
  
  describe 'v3', ->
    Then -> @subject('1.0.0').should.be.true()

  describe 'v2', ->
    Then -> @subject('2.0.0').should.be.true()

  describe 'v3', ->
    Then -> @subject('3.0.0').should.be.true()

  describe 'v0', ->
    Then -> @subject('0.10.41').should.be.false()
    
  describe 'v4', ->
    Then -> @subject('4.0.0').should.be.false()
