/**
 * @file Type Tests - AggregateError
 * @module aggregate-error-ponyfill/tests/unit-d/AggregateError
 */

import type TestSubject from '../ponyfill'

describe('unit-d:AggregateError', () => {
  it('should extend Error', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Error>()
  })

  it('should match [cause?: Cause | undefined]', () => {
    expectTypeOf<TestSubject<any, string>>()
      .toHaveProperty('cause')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [errors: T[]]', () => {
    expectTypeOf<TestSubject<Error | string>>()
      .toHaveProperty('errors')
      .toEqualTypeOf<(Error | string)[]>()
  })
})
