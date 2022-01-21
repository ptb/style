import {
  get,
  getBlockString,
  getMedia,
  getSupportsString,
  isArr,
  isStr,
  merge,
  setStore,
  store
} from "../index.js"

/**
  Checks if selector is cached.

  @typedef {import ("..").AnyFunction} AnyFunction

  @param {string[][]} input
  - The value to test.

  @returns {AnyFunction}
    Returns partially applied function.
 */

function findFn (input) {
  /**
    Checks if selector is cached.

    @param {string[]} selector
    - The value to test.

    @returns {boolean}
      Returns `true` if `selector` is cached, else `false`.
   */

  return function (selector) {
    return isArr(selector) && isArr(input) && isArr(input[0])
      ? selector.join("") === input[0].join("")
      : false
  }
}

/**
  Sort the elements of the `selectors` array.

  @param {string[]} a
  - Array one to compare for alphabetization.

  @param {string[]} b
  - Array two to compare for alphabetization.

  @returns {number}
    The result of the comparison.
 */

function sortFn (a, b) {
  if (isStr(a[0]) && (/^:(root|where)/u).test(a[0])) {
    return 1
  }

  if (isStr(b[0]) && (/^:(root|where)/u).test(b[0])) {
    return -1
  }

  return a.join("").localeCompare(b.join(""))
}

/**
  Get or set cache of common CSS style object using rule as key.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {Params}
    This project's common exchange CSS style object.
 */

export function cache (params) {
  const media = getMedia(get(params, "conditional.media"))
  const input = params.selectors
  const supports = get(params, "conditional.supports")

  let key = getBlockString(params).join("")

  if (isArr(supports) && supports.length) {
    key = "@supports ".concat(
      getSupportsString(supports),
      "{",
      key,
      "}"
    )
  }

  setStore(media)

  if (store.get(media).has(key)) {
    const style = store.get(media).get(key)

    const selectors = style.selectors

    const insertSelector =
      isArr(input) &&
      isArr(selectors) &&
      selectors.findIndex(findFn(input)) < 0

    store.get(media).set(
      key,
      merge(
        params,
        {
          "selectors": null
        },
        {
          "selectors": (insertSelector && isArr(selectors)
            ? selectors.concat(input)
            : selectors || []
          ).sort(sortFn)
        }
      )
    )
  } else {
    store.get(media).set(key, params)
  }

  return store.get(media).get(key)
}
