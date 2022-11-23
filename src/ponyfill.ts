/**
 * @file AggregateError - Ponyfill
 * @module aggregate-error-ponyfill/ponyfill
 */

import AdvanceStringIndex from 'es-abstract/2021/AdvanceStringIndex'
import CreateProperty from 'es-abstract/2021/CreateDataProperty'
import CreatePropertyOrThrow from 'es-abstract/2021/CreateDataPropertyOrThrow'
import GetMethod from 'es-abstract/2021/GetMethod'
import IsArray from 'es-abstract/2021/IsArray'
import IterableToList from 'es-abstract/2021/IterableToList'
import Type from 'es-abstract/2021/Type'
import getIteratorMethod from 'es-abstract/helpers/getIteratorMethod'
import type Options from './options'
import type GetIteratorMethodOptions from './options-get-iterator-method'

/**
 * The `AggregateError` object represents an error when several errors need to
 * be wrapped in a single error.
 *
 * It is thrown when multiple errors need to be reported by an operation, for
 * example by [`Promise.any()`][1] when all promises passed to it reject.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
 *
 * @template T - Aggregated error type
 * @template C - Error cause type
 *
 * @class
 * @extends {Error}
 */
class AggregateError<T = any, C = unknown> extends Error {
  /**
   * Error cause.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error/cause
   *
   * @public
   * @member {C | undefined} cause
   */
  public cause?: C

  /**
   * @public
   * @member {T[]} errors - Array containing aggregated errors
   */
  public errors: T[] = []

  /**
   * @public
   * @override
   * @readonly
   * @member {string} name - Error name
   */
  public override readonly name: string = 'AggregateError'

  /**
   * Creates an error for several errors that need to be wrapped in a single
   * error.
   *
   * @example
   *  new AggregateError([new Error('some error')])
   * @example
   *  new AggregateError([new Error('err1'), new Error('err2')], 'oh no!')
   *
   * @param {Iterable<T>} errors - An iterable of errors
   * @param {string} [message] - Human-readable description of the error
   * @param {Options<C>} [options] - Error options
   * @param {C} [options.cause] - The original cause of the error
   */
  constructor(errors: Iterable<T>, message?: string, options?: Options<C>) {
    super(message)

    /**
     * Iterator method creation options.
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
     * Array containing aggregated errors.
     *
     * @const {T[]} arr
     */
    const arr: T[] = IterableToList(errors, getIteratorMethod(es, errors))

    CreatePropertyOrThrow(this, 'errors', arr)
    CreateProperty(this, 'cause', options?.cause)
  }
}

export default AggregateError
