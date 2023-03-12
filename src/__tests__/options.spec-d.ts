/**
 * @file Type Tests - Options
 * @module aggregate-error-ponyfill/tests/unit-d/Options
 */

import type { KeysRequired } from '@flex-development/tutils'
import type TestSubject from '../options'

describe('unit-d:Options', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
  })

  it('should match [cause?: Cause | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('cause')
      .toEqualTypeOf<unknown | undefined>()
  })
})
