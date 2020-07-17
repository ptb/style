/**
 * @param {string[]} array
 * - An array of strings.
 * @param {string} input
 * - The string used to find the index in alphabetical sort order.
 * 
 * @returns {number}
 *   The index of the array to insert the string in alphabetical sort order.
 */

export function getIndex (array = [], input = "") {
  const count = array.length

  if (count === 0) {
    return 0
  }

  if (input.localeCompare (array[count - 1]) >= 0) {
    return count
  }

  /**
   * 
   * @param {number} a
   * - Array index for position one.
   * @param {number} b 
   * - Array index for position two.
   *
   * @returns {number}
   *   The index of the midpoint between position one and two.
   */

  function getMidpoint (a, b) {
    return Math.floor ((b - a) / 2) + a
  }

  let start = 0
  let end = count - 1
  let index = getMidpoint (start, end)

  while (start < end) {
    const compare = input.localeCompare (array[index])

    if (compare === 0) {
      break
    } else if (compare < 0) {
      end = index
    } else {
      start = index + 1
    }

    index = getMidpoint (start, end)
  }

  return index
}
