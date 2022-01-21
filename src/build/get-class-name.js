import { defaultParams } from "../index.js"

/**
  Returns an `identifier` string if `emit` is true.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {string | null | undefined}
    The `identifier` as a string.
 */

export function getClassName (params = defaultParams) {
  const emit = params.emit
  const identifier = params.identifier

  return emit ? identifier : null
}
