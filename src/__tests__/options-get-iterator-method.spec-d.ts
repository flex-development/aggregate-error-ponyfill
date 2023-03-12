/**
 * @file Type Tests - GetIteratorMethodOptions
 * @module aggregate-error-ponyfill/tests/unit-d/GetIteratorMethodOptions
 */

import type getIteratorMethod from 'es-abstract/helpers/getIteratorMethod'
import type TestSubject from '../options-get-iterator-method'

describe('unit-d:GetIteratorMethodOptions', () => {
  it('should equal Parameters<typeof getIteratorMethod>["0"]', () => {
    // Arrange
    type Expected = Parameters<typeof getIteratorMethod>['0']

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expected>
  })
})
