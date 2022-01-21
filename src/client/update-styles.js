/*
  eslint-disable
    @typescript-eslint/no-unused-vars,
    no-unused-vars
*/

import {

  // @ts-ignore
  debounce,
  getStyleElement,
  getStyles
} from "../index.js"

/**
  Updates `<style data-creator="@ptb/style" />` element content.

  @returns {void}
 */

export function updateStyles () {
  getStyleElement().innerHTML = getStyles()
} /* updateStyles */
