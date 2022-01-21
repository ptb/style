import { isObj, merge, setStore, store } from "../index.js"

/**
  Returns conditional shorthand keys and user provided shorthand variables.

  @typedef {import ("..").PlainObject} PlainObject

  @param {"media" | "supports"} rule
  - Conditional group rule string.

  @param {string} [media]
  - Media query string.

  @returns {PlainObject}
    An object containing shorthand keys and the features they represent.
 */

export function getConditionals (rule = "media", media = "") {
  setStore(media)

  const variable = store.get(media).get("$" + rule)

  const pO = "("
  const maxW = "maxWidth"
  const minW = "minWidth"
  const colon = ":"
  const px = "px"
  const pC = ")"
  const dpr = "WebkitMinDevicePixelRatio"
  const comma = ","
  const minR = "minResolution"
  const dpi = "dpi"
  const orientation = "orientation"
  const landscape = "landscape"
  const portrait = "portrait"
  const pcs = "prefersColorScheme"
  const light = "light"
  const dark = "dark"
  const prm = "prefersReducedMotion"
  const prt = "prefersReducedTransparency"
  const reduce = "reduce"
  const Print = "print"
  const Skreen = "screen"

  return merge(
    rule === "media"
      ? {
        "_": "",
        "Dk": pO + pcs + colon + dark + pC,
        "L": pO + orientation + colon + landscape + pC,
        "Lt": pO + pcs + colon + light + pC,
        "Md": pO + minW + colon + 768 + px + pC,
        "P": pO + orientation + colon + portrait + pC,
        "Pr": Print,
        "Prm": pO + prm + colon + reduce + pC,
        "Prt": pO + prt + colon + reduce + pC,
        "R":
            pO +
            dpr +
            colon +
            2 +
            pC +
            comma +
            pO +
            minR +
            colon +
            192 +
            dpi +
            pC,
        "Sc": Skreen,
        "Sm": pO + maxW + colon + 767.98 + px + pC
      }
      : {},
    isObj(variable) ? variable.value : {}
  )
}
