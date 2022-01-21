import {
  canUseDom,
  defaultParams,
  get,
  getMedia,
  store,
  updateStyles
} from "../index.js"

/**
  Update styles if running in a browser environment and remove
  the temporary self-selector group from the store singleton.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {string} group
  - Unique grouping ID string.

  @returns {Params}
    This project's common exchange CSS style object.
 */

export function update (params = defaultParams, group) {
  const media = getMedia(get(params, "conditional.media"))

  if (store.has(media) && store.get(media).has(group)) {
    store.get(media).delete(group)
  }

  if (canUseDom()) {
    updateStyles()
  }

  return params
}
