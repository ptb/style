import { merge } from "../utils/merge.js"
import { toPairs } from "../utils/to-pairs.js"
import { parseIdentifier } from "./parse-identifier.js"

export function parseFontFace (params = {}) {
  const property = params.property
  const value = params.value

  if (property === "fontFamily" && typeof value === "object") {
    const media = params.media || ""

    const tmp = parseIdentifier (
      merge (params, { "selectors": [["@font-face"]] })
    )

    const fontFamily = value.fontFamily || tmp.identifier

    return [
      merge (tmp, {
        "block": toPairs (value)
          .reduce (function (styles, style) {
            return styles.concat ({
              [style[0]]: style[1]
            })
          }, [])
          .concat ({
            "font-family": fontFamily
          }),
        "emit": false,
        "media": ""
      }),
      merge (
        tmp,
        {
          "selectors": null
        },
        {
          "block": [{ "font-family": fontFamily }],
          "emit": true,
          "media": media,
          "selectors": [[".".concat (tmp.identifier)]]
        }
      )
    ]
  }

  return params
}
