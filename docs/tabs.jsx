/*
  eslint-disable
    react/prop-types
 */

import { Tab } from "./tab.jsx"
import { Tablist } from "./tablist.jsx"
import { Tabpanel } from "./tabpanel.jsx"
import { Tabpanels } from "./tabpanels.jsx"
import { useTabs } from "./use-tabs.js"

/**
  @typedef {typeof import ("react")} React
 
  @typedef {import ("@ptb/style").StylesObject} StylesObject
 */

/**
  @typedef {object} ClassNames
  - Plain JavaScript object containing CSS class names.

  @property {string} [radio]
  - Class names for `<input type="radio">` components.

  @property {string} [sublist]
  - Class names for sub-`<Tablist>` component.

  @property {string} [tab]
  - Class names for `<Tab>` components.

  @property {string} [tabs]
  - Class names for `<Tabs>` component.

  @property {string} [tablist]
  - Class names for `<Tablist>` component.

  @property {string} [tabpanel]
  - Class names for `<Tabpanel>` components.
 */

/**
  Tabs widget component that implements the WAI-ARIA tabs design pattern.

  Tabs are a set of layered sections of content, known as tab panels, that
  display one panel of content at a time. Each tab panel has an associated
  tab element, that when activated, displays the panel. The list of tab
  elements is arranged along one edge of the currently displayed panel,
  most commonly the top edge.

  @see https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel

  @param {object} props
  - Component inputs.

  @param {keyof JSX.IntrinsicElements | React.ElementType} [props.as]
  - Render a different HTML tag or custom component.

  @param {React.ReactElement | React.ReactElement[]} props.children
  - `<Tabpanel>`s between the opening and closing tags of the component.

  @param {ClassNames} [props.classNames]
  - Plain JavaScript object containing CSS class names.

  @param {string} props.group
  - The radio `group` is defined by giving each of radio buttons in
  the `group` the same name. Also used to define the value that labels
  the `tablist` element.

  @param {React.ElementType} [props.heading]
  - React component to use for heading sections when `tabs` is
  an object. The keys of the object will be inserted as children
  of `heading` component and the values will be used as `<Tab>`s.

  @param {React.ElementType} [props.menuitem]
  - React component to use to wrap each menu item.

  @param {"horizontal" | "vertical"} [props.orientation]
  - If the tablist element is vertically oriented, it has the property
  `orientation` set to `vertical`. The default value of `orientation`
  for a tablist element is `horizontal`.

  @param {string[] | Record<string, string[]>} props.tabs
  - An array of strings or an object with arrays of strings as values
  identifying each element in the tab list that serves as a label for
  each of the tab panels and can be activated to display that panel.

  @returns {React.ReactElement}
    React component.
 */

export function Tabs ({
  "as": Component = "aside",
  children,
  classNames = {},
  group = "t",
  heading,
  menuitem,
  orientation = "horizontal",
  tabs = [],
  ... props
}) {
  const { labels, "param": initial, selected, setParam, setSelected } =
    useTabs({
      group,
      tabs
    })

  return (
    <Component
      className={classNames.tabs}
      {...props}
    >
      <Tablist
        classNames={classNames}
        group={group}
        heading={heading}
        initial={initial}
        menuitem={menuitem}
        orientation={orientation}
        selected={selected}
        setSelected={setSelected}
        tabs={tabs}
        total={labels.length}
        updParams={setParam}
      />
      <Tabpanels
        classNames={classNames}
        group={group}
        labels={labels}
        selected={selected}
      >
        {children}
      </Tabpanels>
    </Component>
  )
}

export { Tab, Tablist, Tabpanel, Tabpanels, useTabs }
