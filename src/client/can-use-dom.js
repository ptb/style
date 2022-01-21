/**
  Tests if executing in a browser environment.

  @returns {boolean}
    Returns `true` if executing in a browser, else `false`.
 */

export function canUseDom () {
  return Boolean(
    typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
  )
}
