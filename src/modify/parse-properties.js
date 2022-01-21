/*
  eslint-disable
    max-lines-per-function
 */

import {
  defaultParams,
  get,
  getIdentifier,
  getMedia,
  isArr,
  isPlaceholder,
  isProperty,
  isStr,
  isUndef,
  kebabCase,
  merge,
  store
} from "../index.js"

/**
  Create `identifier` from `media`, `selectors`, and `value`.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {string} [group]
  - Unique grouping ID string.

  @param {boolean} [prime]
  - True: Primary loop. False: Recursive loop.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseProperties (
  params = defaultParams,
  group = "",
  prime
) {
  const property = /** @type {string} */ (params.property)

  if (prime && !isPlaceholder(property)) {
    if (!isProperty(property)) {
      console.info(
        [
          "The key '",
          property,
          "' is unknown. This could be a typo or a property that is ",
          "novel, vendor-specific, or non-standard."
        ].join("")
      )
    }

    let emit = params.emit
    const media = getMedia(get(params, "conditional.media"))
    const value = params.value

    let identifier = /** @type {string} */ (isUndef(params.identifier)
      ? getIdentifier(params)
      : params.identifier)

    let selectors = params.selectors || []

    selectors = selectors.length
      ? selectors.map(
        /**
          Prepend `identifier` to `selectors` with pseudo-classes.

          @param {string[]} selector
          - Array of selector strings.

          @returns {string[]}
            Array of selector strings.
         */

        function (selector) {
          return isStr(identifier) &&
              isStr(selector[0]) &&
              (/^:(?!root|where)/u).test(selector[0])
            ? [".".concat(identifier)].concat(selector)
            : selector
        }
      )
      : selectors.concat([[".".concat(identifier)]])

    if (
      isArr(selectors) &&
      store.has(media) &&
      store.get(media).has(group)
    ) {
      /** @type {string[]} */
      let identifiers = []

      const needsNewId = Boolean(
        selectors.filter(function (selector) {
          return selector.indexOf("&") >= 0
        }).length
      )

      selectors = selectors.map(function (selector) {
        const i = selector.indexOf("&")

        /** @type {string[]} */
        const results = []

        if (i >= 0) {
          const key = selector.join("")

          const declarations = store
            .get(media)
            .get(group)
            .get(key)

          identifier = /** @type {string} */ (getIdentifier({
            "conditional": params.conditional,
            "property": "&",
            "selectors": [selector],
            "value": declarations.filter(Boolean).join(";")
          }))

          identifiers = identifiers.concat(identifier)

          emit = true

          return results.concat(
            selector.slice(0, i),
            ".".concat(identifier),
            selector.slice(i + 1)
          )
        }

        return selector
      })

      if (needsNewId) {
        identifier = identifiers.filter(Boolean).join(" ")
      }
    }

    const block = params.block || [{ [kebabCase(property)]: value }]

    return [
      /** @type {Params} */ (merge(
        params,
        { "block": undefined, "selectors": undefined },
        { block, emit, identifier, selectors }
      ))
    ]
  }

  return [params]
}
