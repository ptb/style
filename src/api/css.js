/*
  eslint-disable
    jsdoc/check-indentation,
    jsdoc/require-description-complete-sentence
 */

import {
  cache,
  cx,
  getClassName,
  nanoid,
  parse,
  update
} from "../index.js"

/**
  Parse styles, selectors, and shortcuts from an object or array of objects.
  Styles will be de-duplicated, cached, and applied to the active web page.
  Based on the styles input, a hashed string of class name(s) are returned.

  @typedef {import (".").StylesObject} StylesObject

  @param {StylesObject | (StylesObject | undefined)[]} input
  - Plain JavaScript object or array of objects containing CSS styles.

  - An array of objects will be deep merged, left to right with later
    objects overwriting assignments of previous objects.

  - Object keys can be:
    - CSS [standard properties](https://www.w3.org/Style/CSS/all-properties.en.html) in camelCase
    - styled-system [shorthand properties](https://styled-system.com/api)
    - CSS [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (i.e. CSS variables)
    - any combination of [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) including the `&` [nesting selector](https://www.w3.org/TR/css-nesting-1/#nest-selector)
    - [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
    - `$` prefixed variables in camelCase
    - `%` prefixed placeholders in camelCase.

  - Values can be strings, numbers, arrays, or objects.
    - Strings are used as-is with the exception of `$` prefixed camelCase
      variables which are replaced with their specified replacement string.
    - Bare numbers are appended with `px` _except_ those CSS properties which
      accept an integer as a value, e.g. zIndex, opacity, flexGrow, etc. See
      [src/modify/modify-numbers.js](https://github.com/ptb/style/blob/develop/src/modify/modify-numbers.js#L21)
      for specific details.
    - Arrays are used to provide
      [fallback values](https://modernweb.com/using-css-fallback-properties-for-better-cross-browser-compatibility/).
    - Objects can contain media queries or nested styles under the parent
      selector. Objects under `fontFamily` and `animationName` keys can be
      used to create a
      [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
      or
      [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
      at-rules respectively, and return the created `fontFamily` or
      `animationName` automatically.

  @param {string | (string | undefined)[]} [className]
  - Plain class name string or array of class name strings.

  @returns {string}
    A string of generated and input class names each separated by a space.
 */

export function css (input = {}, className = "") {
  const group = nanoid()

  return cx(
    parse({ input }, group, true)
      .map(cache)
      .map(function (style) {
        return update(style, group)
      })
      .map(getClassName)
      .concat(cx(className))
  )
}
