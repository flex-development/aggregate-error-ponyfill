/**
 * @file AggregateError - Ponyfill
 * @module aggregate-error-ponyfill/ponyfill
 */

import AdvanceStringIndex from 'es-abstract/2021/AdvanceStringIndex'
import CreatePropertyOrThrow from 'es-abstract/2021/CreateDataPropertyOrThrow'
import GetMethod from 'es-abstract/2021/GetMethod'
import IsArray from 'es-abstract/2021/IsArray'
import IterableToList from 'es-abstract/2021/IterableToList'
import Type from 'es-abstract/2021/Type'
import getIteratorMethod from 'es-abstract/helpers/getIteratorMethod'

/**
 * Iterator method options type.
 *
 * @see {@link getIteratorMethod}
 */
type GetIteratorMethodOptions = Parameters<typeof getIteratorMethod>['0']

/**
 * A single error that represents a group of errors.
 *
 * It is thrown when multiple errors need to be reported by an operation, e.g.
 * by [`Promise.any()`][1] when all promises passed to it reject.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 *
 * @see https://tc39.es/proposal-promise-any#sec-aggregate-error-objects
 *
 * @template T - Aggregated error type
 *
 * @extends {Error}
 */
class AggregateError<T = any> extends Error {
  /**
   * @public
   * @member {T[]} errors - Aggregated errors
   */
  public errors: T[]

  /**
   * @public
   * @override
   * @readonly
   * @member {'AggregateError'} name - Error subclass name
   */
  public override readonly name: 'AggregateError' = 'AggregateError'

  /**
   * Creates a single error representing `errors`.
   *
   * @example
   *  new AggregateError([new Error('some error')])
   *  new AggregateError([new Error('err1'), new Error('err2')], 'oh no!')
   *
   * @param {Iterable<T>} errors - Aggregated errors
   * @param {string} [message] - Human-readable error message
   */
  constructor(errors: Iterable<T>, message?: string) {
    super(message)

    /**
     * Iterator method options.
     *
     * @const {GetIteratorMethodOptions} es
     */
    const es: GetIteratorMethodOptions = {
      AdvanceStringIndex,
      GetMethod,
      IsArray,
      Type
    }

    /**
     * Function that returns an iterator.
     *
     * @const {() => Iterator<T>} method
     */
    const method: () => Iterator<T> = getIteratorMethod(es, errors)

    // create aggregated error list
    this.errors = IterableToList(errors, method)

    // re-assign errors property or throw if errors isn't iterable
    CreatePropertyOrThrow(this, 'errors', IterableToList(this.errors, method))
  }
}

export default AggregateError
