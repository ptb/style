import { createElement } from "react"

import { getStyles } from "./style.js"

/**
  @typedef {typeof import ("react")} React
*/

/**
  Called after every page Gatsby server renders while building HTML so you
  can set head and body components to be rendered in your `html.js`.

  Gatsby does a two-pass render for HTML. It loops through your pages first
  rendering only the body and then takes the result body HTML string and
  passes it as the `body` prop to your `html.js` to complete the render.

  @param {object} args
  - API callback context.

  @param {(components: React.ReactElement[]) => void} args.setHeadComponents
  - Takes an array of components as its first argument which are added to
  the `headComponents` array which is passed to the `html.js` component.

  @returns {void}
 */

export function onRenderBody ({ setHeadComponents }) {
  setHeadComponents([
    createElement("style", {
      "dangerouslySetInnerHTML": { "__html": getStyles() },
      "data-creator": "@ptb/style"
    })
  ])
}
