/**
 * @file AggregateError - GetIteratorMethodOptions
 * @module aggregate-error-ponyfill/GetIteratorMethodOptions
 */

import type getIteratorMethod from 'es-abstract/helpers/getIteratorMethod'

/**
 * Iterator method creation options type.
 *
 * @internal
 *
 * @see {@linkcode getIteratorMethod}
 */
type GetIteratorMethodOptions = Parameters<typeof getIteratorMethod>['0']

export type { GetIteratorMethodOptions as default }
