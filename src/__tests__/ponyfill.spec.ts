/**
 * @file Unit Tests - ponyfill
 * @module aggregate-error-ponyfill/tests/unit/ponyfill
 */

import TestSubject from '../ponyfill'

describe('unit:ponyfill', () => {
  it('should create spec-compliant AggregateError', () => {
    // Arrange
    const errors = [new SyntaxError(faker.lorem.sentence()), { code: 400 }]
    const message = faker.lorem.sentence()

    // Act
    const result = new TestSubject(errors, message)

    // Expect
    expect(result).to.be.an.instanceof(Error)
    expect(result.errors).to.deep.equal(errors)
    expect(result.message).to.equal(message)
    expect(result.name).to.equal('AggregateError')
  })

  it('should throw if aggregated errors are not iterable', () => {
    expect(() => new TestSubject(null as unknown as null[])).to.throw(TypeError)
  })
})
