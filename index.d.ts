/**
  Get or set cache of common CSS style object using rule as key.

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {Params}
  This project's common exchange CSS style object.
 */

export function cache(params: Params): Params;

/**
  Get or set cache of common CSS style object using rule as key.
 */

/**
  Return combined cached CSS rulesets as a string.

  @param {string} [mq]
  - Media query string.

  @returns {string}
  Combined cached CSS rulesets as a string.
 */

export function getStyles(mq?: string | undefined): string;

/**
  Tests if executing in a browser environment.

  @returns {boolean}
  Returns `true` if executing in a browser, else `false`.
 */

export function canUseDom(): boolean;

export function getStyleElement(media?: string): HTMLStyleElement;

/**
  Update styles if running in a browser environment and remove
  the temporary self-selector group from the store singleton.

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {string} group
  - Unique grouping ID string.

  @returns {Params}
  This project's common exchange CSS style object.
 */

export function update(
  params: Params | undefined,
  group: string
): Params;

/**
  Update styles if running in a browser environment and remove
  the temporary self-selector group from the store singleton.
 */

/**
  Set the variable `property` in the store.

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {any}
  The stored value for this variable.
 */

export function setVariable(params?: Params): any;

/**
  Set the variable `property` in the store.
 */

/**
  Recursively merges own properties of source objects or arrays into a new
  empty object or array. Array and plain object properties are merged
  recursively. Other objects and value types are overridden by assignment.
  Source objects are applied from left to right. Subsequent sources
  overwrite property assignments of previous sources.

  @param {... PlainObject | any} sources
  - The source objects or arrays.

  @returns {PlainObject | any[]}
  Returns `object` or `array`.
 */

export function merge(... args: any[]): PlainObject | any[];

/**
  Recursively merges own properties of source objects or arrays into a new
  empty object or array. Array and plain object properties are merged
  recursively. Other objects and value types are overridden by assignment.
  Source objects are applied from left to right. Subsequent sources
  overwrite property assignments of previous sources.
 */

/**
  Sorts `input` by object key.

  @param {any} input
  - The object to sort by key.

  @returns {any}
  Returns a new object sorted by key.
 */

export function sortJSON(input: any): any;

/**
  Process raw styles into this project's common exchange CSS style objects.

  @param {PlainObject} params
  - This project's common exchange CSS style object.

  @param {string} [group]
  - Unique grouping ID string.

  @param {boolean} [prime]
  - True: Primary loop. False: Recursive loop.

  @returns {Params[]}
  An array of this project's common exchange CSS style objects.
 */

export function parse(
  params?: PlainObject,
  group?: string | undefined,
  prime?: boolean | undefined
): Params[];

/**
  Process raw styles into this project's common exchange CSS style objects.
 */

/**
  Process raw styles into this project's common exchange CSS style objects.
 */

export const store: Map<any, any>

/**
  Checks if `value` is classified as an `Array` object.

  @param {any} value
  - The value to check.

  @returns {value is any[]}
  Returns `true` if `value` is an array, else `false`.
 */

export function isArr(value: any): value is any[];

/**
  Checks if `value` is classified as an `Array` object.

  @param {any} value
  - The value to check.

  @returns {value is boolean}
  Returns `true` if `value` is an array, else `false`.
 */

export function isBool(value: any): value is boolean;

/**
  Checks if `value` is classified as a `Function` object.

  @param {any} value
  - The value to check.

  @returns {value is AnyFunction}
  Returns `true` if `value` is a function, else `false`.
 */

export function isFn(value: any): value is AnyFunction;

/**
  Checks if `value` is a valid JSON object.

  @param {any} value
  - The value to check.

  @returns {boolean}
  Returns `true` if `value` is a valid JSON object, else `false`.
 */

export function isJSON(value: any): boolean;

/**
  Checks if `value` is `null`.

  @param {any} value
  - The value to check.

  @returns {value is null}
  Returns `true` if `value` is `null`, else `false`.
 */

export function isNull(value: any): value is null;

/**
  Checks if `value` is classified as a `Number` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is number}
  Returns `true` if `value` is a number, else `false`.
 */

export function isNum(value: any): value is number;

/**
  Checks if `value` is the language type of `Object`.

  @param {any} value
  - The value to check.

  @returns {value is PlainObject}
  Returns `true` if `value` is an object, else `false`.
 */

export function isObj(value: any): value is PlainObject;

/**
  Checks if `value` is classified as a `String` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is string}
  Returns `true` if `value` is a string, else `false`.
 */

export function isStr(value: any): value is string;

/**
  Checks if `value` is classified as a `Symbol` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is symbol}
  Returns `true` if `value` is a symbol, else `false`.
 */

export function isSym(value: any): value is symbol;

/**
  Checks if `value` is `undefined`.

  @param {any} [value]
  - The value to check.

  @returns {value is undefined}
  Returns `true` if `value` is `undefined`, else `false`.
 */

export function isUndef(value?: any): value is undefined;

/**
  Converts `string` to camel case.

  @param {string} [value]
  - The string to convert.

  @returns {string}
  The camel cased string.
 */

export function camelCase(value?: string | undefined): string;

/**
  Creates a debounced function that delays invoking `fn` until after `wait`
  milliseconds have elapsed since the last time the debounced function was
  invoked. The `fn` is invoked with the last arguments provided to the
  debounced function. Subsequent calls to the debounced function return the
  result of the last `fn` invocation.

  @param {Function} fn
  - The function to debounce.

  @param {number} wait
  - The number of milliseconds to delay.

  @returns {Function}
  The new debounced function.
 */

export function debounce(fn: Function, wait?: number): Function;

/**
  Gets the value at path of object. If the resolved value is undefined,
  the defaultValue is returned in its place.

  @param {object} object
  - The object to query.

  @param {string | string[]} path
  - The path of the property to get.

  @param {any} [defaultValue]
  - The value returned for undefined resolved values.

  @returns {any}
  Returns the resolved value.
 */

export function get(
  object: object,
  path: string | string[],
  defaultValue?: any
): any;

/**
  Converts `string` to kebab case.

  @param {string} [value]
  - The string to convert.

  @returns {string}
  The kebab cased string.
 */

export function kebabCase(value?: string | undefined): string;

/**
  Converts `string` to unique hash identifier string.
  JS Implementation of MurmurHash3 (r136) (as of May 20, 2011).

  @param {string} string
  - The string on convert.

  @param {number} seed
  - Positive integer only.

  @returns {string}
  The string hash identifier.

  @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>

  @see https://github.com/aappleby/smhasher

  @author <a href="mailto:gary.court@gmail.com">Gary Court</a>

  @see https://github.com/garycourt/murmurhash-js

  @copyright 2011 Gary Court

  @license MIT
 */

export function murmurHash(string?: string, seed?: number): string;

/**
  Generate URL-friendly unique ID. This method uses the non-secure
  predictable random generator with bigger collision probability.

  @returns {string}
  A random 21 character string.

  @author <a href="mailto:andrey@sitnik.ru">Andrey Sitnik</a>

  @see https://github.com/ai/nanoid/blob/main/non-secure/index.js

  @copyright 2017 Andrey Sitnik

  @license MIT
 */

export function nanoid(): string;

/**
  Creates an array of own enumerable string keyed-value pairs for `object`.

  @param {PlainObject} [value]
  - The object to query.

  @returns {[string, any][]}
  Returns the key-value pairs.
 */

export function toPairs(
  value?: PlainObject | undefined
): [string, any][];

/**
  Creates a duplicate-free copy of an array of strings.

  @param {string[]} [value]
  - The array to inspect.

  @returns {string[]}
  Returns the new duplicate free array.
 */

export function uniq(value?: string[] | undefined): string[];

export type AnyFunction = (arg0: any[]) => any;

export type Conditional = {
  /**
    - Array of media query strings composed of an optional _media type_ and
    any number of _media feature_ expressions. Excludes the actual `@media`
    prefix.
   */

  media?: string[] | null | undefined;

  /**
    - Array of feature query strings composed of declarations of support for
    one or more specific CSS features. Excludes the actual `@supports` prefix.
   */

  supports?: string[] | null | undefined;
};

export type PlainObject = Record<string | number | symbol, any>;

/**
  - This project's common exchange CSS style object.
 */

export type Params = {
  /**
    - Array of objects containing CSS declarations.
   */

  block?: PlainObject[] | null | undefined;

  /**
    - `media`: Array of media query strings composed of an optional _media
    type_ and any number of _media feature_ expressions. Excludes the actual
    `@media` prefix.
   *
    - `supports`: Array of feature query strings composed of declarations of
    support for one or more specific CSS features. Excludes the actual
    `@supports` prefix.
   */

  conditional?: Conditional | null | undefined;

  /**
    - Indicator if the class name should be returned from the `css` function.
   */

  emit?: boolean | null | undefined;

  /**
    - String uniquely identifying each CSS ruleset.
   *
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
   *
    - Remaining four characters are a hash created by the MurmurHash3
    algorithm taking into account any media queries, selectors, pseudo
    classes, pseudo elements, standard CSS property feature, and values.
   */

  identifier?: string | null | undefined;

  /**
    - Plain JavaScript object or array of objects containing CSS styles.
   */

  input?: PlainObject | PlainObject[] | null | undefined;

  /**
    - Camel case property name that identifies a stylistic feature to change.
   */

  property?: string | null | undefined;

  /**
    - Array of arrays of individual selector string components.
   */

  selectors?: string[][] | null | undefined;

  /**
    - Valid CSS property values, or intermediate object, array, or integers
    that can be processed by this library to create valid CSS declarations.
   */

  value?:
    | string
    | number
    | boolean
    | any[]
    | PlainObject
    | null
    | undefined;
};
