/**
  Creates a debounced function that delays invoking `fn` until after `wait`
  milliseconds have elapsed since the last time the debounced function was
  invoked. The `fn` is invoked with the last arguments provided to the
  debounced function. Subsequent calls to the debounced function return the
  result of the last `fn` invocation.

  @param {Function} fn
  - The function to debounce.

  @param {number} wait
  - The number of milliseconds to delay.

  @returns {Function}
    The new debounced function.
 */

export function debounce (fn, wait = 20) {
  /** @type {number | undefined} */
  let timeout

  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}
