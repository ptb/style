import { getRules, store } from "../index.js"

/**
  Return combined cached CSS rulesets as a string.

  @param {string} [mq]
  - Media query string.

  @returns {string}
    Combined cached CSS rulesets as a string.
 */

export function getStyles (mq) {
  /** @type {string[]} */
  let results = []

  if (mq) {
    results = results.concat(getRules(store.get(mq)))
  } else {
    new Map([... store.entries()].sort()).forEach(function (
      rules,
      media
    ) {
      results = results.concat(getRules(rules, media))
    })
  }

  return results
    .filter(Boolean)
    .sort()
    .join("")
}
