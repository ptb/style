/*
  eslint-disable
    jsx-a11y/no-noninteractive-element-to-interactive-role,
    react/display-name,
    react/prop-types
 */

import { isFn } from "../index.js"
import { getId } from "./get-id.js"
import { forwardRef } from "./jsx-runtime"

/**
  @typedef {import ("./tabs").ClassNames} ClassNames

  @typedef {typeof import ("react")} React
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

    @param {string} props.label
    - Displayed label text.

    @param {React.ElementType} [props.menuitem]
    - React component to use to wrap each menu item.

    @param {React.KeyboardEventHandler<HTMLLabelElement>} props.onKeyDown
    - When focus is on a `<Tab>` element in a horizontal tab list:
    Left Arrow (Up Arrow on vertical tab list): Moves focus to the
    previous tab. If focus is on the first tab, moves focus to the
    last tab. Right Arrow (Down Arrow on vertical tab list): Moves
    focus to the next tab. If focus is on the last tab element, moves
    focus to the first tab. Space or Enter: Activates the tab. Home:
    Moves focus to the first tab. End: Moves focus to the last tab.

    @param {string} props.selected
    - Currently selected tab position.

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
      label,
      "menuitem": MenuItem,
      onKeyDown,
      selected,
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

    return (
      <Component role="none">
        <label
          aria-controls={`${id}-panel`}
          aria-selected={String(index) === selected}
          className={classNames.tab}
          htmlFor={`${id}-input`}
          id={`${id}-tab`}
          onClick={onClick}
          onKeyDown={onKeyDown}
          ref={ref}
          role="tab"
          tabIndex={String(index) === selected ? 0 : -1}
          {...props}
        >
          {isFn(MenuItem) ? (
            <MenuItem index={index}>{label}</MenuItem>
          ) : (
            label
          )}
        </label>
      </Component>
    )
  }
)
