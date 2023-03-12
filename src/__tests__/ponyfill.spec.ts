/**
 * @file Unit Tests - AggregateError
 * @module aggregate-error-ponyfill/tests/unit/AggregateError
 */

import TestSubject from '../ponyfill'

describe('unit:AggregateError', () => {
  it('should create spec-compliant AggregateError', () => {
    // Arrange
    const cause = new Error('The server responded with a 500 status')
    const symptom = new Error('The message failed to send')
    const errors = [symptom, cause]

    // Act
    const result = new TestSubject(errors, symptom.message, { cause })

    // Expect
    expect(result).to.be.an.instanceof(Error)
    expect(result.errors).to.deep.equal(errors)
    expect(result.message).to.equal(symptom.message)
    expect(result.name).to.equal('AggregateError')
  })

  it('should throw if aggregated errors are not iterable', () => {
    expect(() => new TestSubject(null as unknown as null[])).to.throw(TypeError)
  })
})
