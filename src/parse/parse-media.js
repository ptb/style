import { isObj, kebabCase, parse } from "../api/index.js"

export function parseMedia (params = {}) {
  const property = params.property
  const value = params.value

  if ((/^@media/u).test (property) && isObj (value)) {
    const media = [params.media, kebabCase (property.slice (6).trim ())]
      .filter (Boolean)
      .join (" and ")

    return parse ({ "input": value, media })
  }

  return params
}
