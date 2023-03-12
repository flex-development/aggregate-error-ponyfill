/**
 * @file AggregateError - Options
 * @module aggregate-error-ponyfill/Options
 */

/**
 * `AggregateError` options.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError#parameters
 *
 * @template Cause - Error cause type
 */
interface Options<Cause = unknown> {
  /**
   * The specific cause of the error.
   *
   * When catching and re-throwing an error with a more-specific or useful error
   * message, this property can be used to pass the original error.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error/cause
   */
  cause?: Cause | undefined
}

export type { Options as default }
