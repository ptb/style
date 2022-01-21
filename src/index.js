/**
  @typedef {function (any[]): any} AnyFunction

  @typedef {object} Conditional

  @property {string[] | null} [media]
  - Array of media query strings composed of an optional _media type_ and
  any number of _media feature_ expressions. Excludes the actual `@media`
  prefix.

  @property {string[] | null} [supports]
  - Array of feature query strings composed of declarations of support for
  one or more specific CSS features. Excludes the actual `@supports` prefix.

  @typedef {Record<string | number | symbol, any>} PlainObject

  @typedef {object} Params
  - This project's common exchange CSS style object.

  @property {PlainObject[] | null} [block]
  - Array of objects containing CSS declarations.

  @property {Conditional | null} [conditional]
  - `media`: Array of media query strings composed of an optional _media
  type_ and any number of _media feature_ expressions. Excludes the actual
  `@media` prefix.

  - `supports`: Array of feature query strings composed of declarations of
  support for one or more specific CSS features. Excludes the actual
  `@supports` prefix.

  @property {boolean | null} [emit]
  - Indicator if the class name should be returned from the `css` function.

  @property {string | null} [identifier]
  - String uniquely identifying each CSS ruleset.

  - The initial two characters are shared by all other declarations that
  share the same standard CSS property feature. A consistent CSS property
  ordering is ensured using a specified order of all current properties
  listed on https://www.w3.org/Style/CSS/all-properties.en.html.
  Properties are roughly ordered by CSS specification, from most basic or
  general changes, like CSS custom properties or right-to-left, to more
  aesthetic properties, like animations or scroll behavior. Within each
  specification group, shorthand properties are ordered first, for example
  `margin` is before `marginTop`, so it is possible to override shorthand
  declarations with a more specific property. With this custom sort order
  a simple alphabetical sort by `identifier` is enough to ensure that each
  CSS declaration is applied in a consistent and predictable order.

  - Remaining four characters are a hash created by the MurmurHash3
  algorithm taking into account any media queries, selectors, pseudo
  classes, pseudo elements, standard CSS property feature, and values.

  @property {PlainObject | PlainObject[] | null} [input]
  - Plain JavaScript object or array of objects containing CSS styles.

  @property {string | null} [property]
  - Camel case property name that identifies a stylistic feature to change.

  @property {string[][] | null} [selectors]
  - Array of arrays of individual selector string components.

  @property {string | number | boolean | any[] | PlainObject | null} [value]
  - Valid CSS property values, or intermediate object, array, or integers
  that can be processed by this library to create valid CSS declarations.
 */

export { flattenInput } from "./flatten/flatten-input.js"
export { getVariables } from "./flatten/get-variables.js"
export { isVariable } from "./flatten/is-variable.js"
export { replaceVariables } from "./flatten/replace-variables.js"
export { setStore } from "./flatten/set-store.js"
export { setVariable } from "./flatten/set-variable.js"

export { assignProp } from "./merge/assign-prop.js"
export { canMerge } from "./merge/can-merge.js"
export { cloneObj } from "./merge/clone-obj.js"
export { emptyObj } from "./merge/empty-obj.js"
export { merge } from "./merge/merge.js"
export { mergeArr } from "./merge/merge-arr.js"
export { mergeArrOfObj } from "./merge/merge-arr-of-obj.js"
export { mergeObj } from "./merge/merge-obj.js"
export { sortJSON } from "./merge/sort-json.js"

export { defaultParams } from "./shared/default-params.js"
export { getMedia } from "./shared/get-media.js"
export { store } from "./shared/store.js"

export { getType } from "./typeof/get-type.js"
export { isArr } from "./typeof/is-arr.js"
export { isBool } from "./typeof/is-bool.js"
export { isFn } from "./typeof/is-fn.js"
export { isJSON } from "./typeof/is-json.js"
export { isNull } from "./typeof/is-null.js"
export { isNum } from "./typeof/is-num.js"
export { isObj } from "./typeof/is-obj.js"
export { isStr } from "./typeof/is-str.js"
export { isSym } from "./typeof/is-sym.js"
export { isUndef } from "./typeof/is-undef.js"

export { camelCase } from "./utils/camel-case.js"
export { debounce } from "./utils/debounce.js"
export { get } from "./utils/get.js"
export { kebabCase } from "./utils/kebab-case.js"
export { murmurHash } from "./utils/murmur-hash.js"
export { nanoid } from "./utils/nanoid.js"
export { toPairs } from "./utils/to-pairs.js"
export { uniq } from "./utils/uniq.js"
