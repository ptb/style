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

export { cn } from "./api/cn.js"
export { create } from "./api/create.js"
export { css } from "./api/css.js"

export { cache } from "./build/cache.js"
export { getBlockString } from "./build/get-block-string.js"
export { getClassName } from "./build/get-class-name.js"
export { getRules } from "./build/get-rules.js"
export { getSelectorsString } from "./build/get-selectors-string.js"
export { getStyle } from "./build/get-style.js"
export { getStyles } from "./build/get-styles.js"
export { getSupportsString } from "./build/get-supports-string.js"

export { canUseDom } from "./client/can-use-dom.js"
export { getStyleElement } from "./client/get-style-element.js"
export { update } from "./client/update.js"
export { updateStyles } from "./client/update-styles.js"

export { flattenInput } from "./flatten/flatten-input.js"
export { getShorthand } from "./flatten/get-shorthand.js"
export { getShorthands } from "./flatten/get-shorthands.js"
export { getVariables } from "./flatten/get-variables.js"
export { isShorthand } from "./flatten/is-shorthand.js"
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

export { getPrefixes } from "./modify/get-prefixes.js"
export { isFontFace } from "./modify/is-font-face.js"
export { isProperty } from "./modify/is-property.js"
export { modifyNumbers } from "./modify/modify-numbers.js"
export { parseFallbacks } from "./modify/parse-fallbacks.js"
export { parseFontFace } from "./modify/parse-font-face.js"
export { parseKeyframes } from "./modify/parse-keyframes.js"
export { parseProperties } from "./modify/parse-properties.js"
export { parseSelfSelector } from "./modify/parse-self-selector.js"

export { getAncestors } from "./parse/get-ancestors.js"
export { getConditionals } from "./parse/get-conditionals.js"
export { getPlaceholders } from "./parse/get-placeholders.js"
export { getSelectors } from "./parse/get-selectors.js"
export { isConditional } from "./parse/is-conditional.js"
export { isPlaceholder } from "./parse/is-placeholder.js"
export { isSelector } from "./parse/is-selector.js"
export { isTypeSelector } from "./parse/is-type-selector.js"
export { parse } from "./parse/parse.js"
export { parseConditional } from "./parse/parse-conditional.js"
export { parseInput } from "./parse/parse-input.js"
export { parsePlaceholder } from "./parse/parse-placeholder.js"
export { parseSelectors } from "./parse/parse-selectors.js"
export { parseTypeSelector } from "./parse/parse-type-selector.js"

export { defaultParams } from "./shared/default-params.js"
export { getIdentifier } from "./shared/get-identifier.js"
export { getMedia } from "./shared/get-media.js"
export { getPropertyId } from "./shared/get-property-id.js"
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
