/**
  Checks if `value` is classified as an `Array` object.

  @param {any} value
  - The value to check.

  @returns {value is any[]}
  Returns `true` if `value` is an array, else `false`.
 */

export function isArr(value: any): value is any[];

/**
  Checks if `value` is classified as an `Array` object.

  @param {any} value
  - The value to check.

  @returns {value is boolean}
  Returns `true` if `value` is an array, else `false`.
 */

export function isBool(value: any): value is boolean;

/**
  Checks if `value` is classified as a `Function` object.

  @param {any} value
  - The value to check.

  @returns {value is AnyFunction}
  Returns `true` if `value` is a function, else `false`.
 */

export function isFn(value: any): value is AnyFunction;

export type AnyFunction = (arg0: any[]) => any;
