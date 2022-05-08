/*
  eslint-disable
    dot-notation
 */

import {
  defaultParams,
  get,
  getIdentifier,
  isArr,
  isFontFace,
  isObj,
  kebabCase,
  merge,
  toPairs,
  uniq
} from "../index.js"

/**
  Process the `property` when the key is `fontFamily`.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseFontFace (params = defaultParams) {
  const property = params.property

  if (isFontFace(property)) {
    const conditional = get(params, "conditional", {})
    const input = params.value
    const selectors = [["@font-face"]]

    const identifier = /** @type {string} */ (
      getIdentifier(
        /** @type {Params} */ (
          merge(params, { "selectors": undefined }, { selectors })
        )
      )
    )

    if (isObj(input)) {
      // @ts-ignore
      const fontFamily = input["fontFamily"]

      const value = fontFamily || identifier

      // @ts-ignore
      input["fontFamily"] = value

      const font = {
        "block": toPairs(input).map(function (style) {
          return { [kebabCase(style[0])]: style[1] }
        }),
        "emit": false,
        identifier,
        property,
        selectors,
        value
      }

      const rule = {
        "block": [{ "font-family": value }],
        conditional,
        "emit": true,
        identifier,
        property,
        "selectors": [[".".concat(identifier)]],
        value
      }

      return [font, rule]
    } else if (isArr(input)) {
      /** @type {Params[]} */
      const styles = []
      const block = [
        {
          "font-family": uniq(
            input.reduce(
              /**
                Process `value` when `property` is `fontFamily`.

                @typedef {import ("..").PlainObject} PlainObject

                @param {any[]} fonts
                - An array of font object and string styles.

                @param {string | PlainObject} value
                - A font style.

                @returns {any[]}
                  An array of font styles.
               */

              function (fonts, value) {
                if (isObj(value)) {
                  const font = /** @type {Params} */ (
                    parseFontFace({
                      property,
                      value
                    }).shift()
                  )

                  styles.push(font)
                  return fonts.concat(font.value)
                }

                return fonts.concat(value)
              },
              []
            )
          ).join(",")
        }
      ]

      return styles.concat(
        merge(params, { "block": undefined }, { block })
      )
    }
  }

  return [params]
}
