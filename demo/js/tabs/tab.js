import { css } from "../../../src/style.js"
import { createElement as h, forwardRef } from "../react.js"
import { getId } from "./get-id.js"

/**
  @typedef {typeof import ("react")} React

  @typedef {import (".").ClassNames} ClassNames

  @typedef {import (".").Styles} Styles
 */

/**
  Tab widget component that implements a grouping label providing a
  mechanism for selecting the tab content that is to be rendered to
  the user.

  @see https://www.w3.org/TR/wai-aria-1.2/#tab
  */

export const Tab = forwardRef(
  /**
    Tab widget component that implements a grouping label providing a
    mechanism for selecting the tab content that is to be rendered to
    the user.

    @see https://www.w3.org/TR/wai-aria-1.2/#tab

    @param {object} props
    - Component inputs.

    @param {keyof JSX.IntrinsicElements | React.ElementType} [props.as]
    - Render a different HTML tag or custom component.

    @param {ClassNames} [props.classNames]
    - Plain class name string.

    @param {(index: number) => void} props.handleClick
    - Respond to mouse events.

    @param {number} props.index
    - `<Tab>` position in render order.

    @param {boolean} [props.isDynamic]
    - If `true`, then use dynamic `css` function.
    - If `false`, then use static class name strings.

    @param {string} props.label
    - Displayed label text.

    @param {React.KeyboardEventHandler<HTMLLabelElement>} props.onKeyDown
    - When focus is on a `<Tab>` element in a horizontal tab list:
    Left Arrow (Up Arrow on vertical tab list): Moves focus to the
    previous tab. If focus is on the first tab, moves focus to the
    last tab. Right Arrow (Down Arrow on vertical tab list): Moves
    focus to the next tab. If focus is on the last tab element, moves
    focus to the first tab. Space or Enter: Activates the tab. Home:
    Moves focus to the first tab. End: Moves focus to the last tab.

    @param {number} props.selected
    - Currently selected tab position.

    @param {Styles} [props.styles]
    - Plain JavaScript object or array of objects containing CSS styles.

    @param {React.ForwardedRef<HTMLLabelElement>} ref
    - Used to set focus on the specified `<Tab>`.

    @returns {React.ReactElement}
      React component.
  */

  function Tab (
    {
      "as": Component = "li",
      classNames = {},
      handleClick,
      index,
      isDynamic,
      label,
      onKeyDown,
      selected,
      styles = {},
      ... props
    },
    ref
  ) {
    const id = getId(label)

    /**
      Respond to pointer events.

      @returns {void}
     */

    function onClick () {
      handleClick(index)
    }

    return h(
      Component,
      { "role": "none" },
      h(
        "label",
        {
          "aria-controls": `${id}-panel`,
          "aria-selected": index === selected,
          "className": isDynamic ? css(styles.tab) : classNames.tab,
          "htmlFor": `${id}-input`,
          "id": `${id}-tab`,
          onClick,
          onKeyDown,
          ref,
          "role": "tab",
          "tabIndex": index === selected ? 0 : -1,
          ... props
        },
        label
      )
    )
  }
)
