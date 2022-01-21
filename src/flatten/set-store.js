import { isStr, store } from "../index.js"

/**
  Ensures `store` has `media` and optional `group` Map objects.

  @param {string} media
  - Media query string.

  @param {string} [group]
  - Unique grouping ID string.

  @returns {void}
 */

export function setStore (media, group) {
  if (isStr(media) && !store.has(media)) {
    store.set(media, new Map())
  }

  if (isStr(group) && !store.get(media).has(group)) {
    store.get(media).set(group, new Map())
  }
}
