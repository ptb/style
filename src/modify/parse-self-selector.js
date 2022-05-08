import {
  defaultParams,
  get,
  getMedia,
  getPropertyId,
  isArr,
  isStr,
  setStore,
  store
} from "../index.js"

/**
  Process `selectors` containing `&` but no ancestors.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {string} [group]
  - Unique grouping ID string.

  @param {boolean} [prime]
  - True: Primary loop. False: Recursive loop.

  @returns {Params[]}
    Array of selector strings wrapped in a single array.
 */

export function parseSelfSelector (
  params = defaultParams,
  group = "",
  prime
) {
  const property = params.property
  const selectors = params.selectors

  if (prime && isStr(property) && isArr(selectors)) {
    const media = getMedia(get(params, "conditional.media"))

    setStore(media, group)

    selectors.forEach(function (selector) {
      const i = selector.indexOf("&")

      if (i >= 0) {
        const value = selector.join("")

        const declarations =
          store.get(media).get(group)
            .get(value) || []

        declarations[getPropertyId(property)] = JSON.stringify(
          params.value
        )

        store.get(media).get(group)
          .set(value, declarations)
      }
    })
  }

  return [params]
}
