import {
  AtRule,
  Property,
  StandardPropertiesFallback
} from "csstype"

/**
  @typedef {string | boolean | undefined | null} Value

  @typedef {Record<string, any>} Mapping

  @typedef {ArgumentArray | Mapping | Value} Argument

  @typedef {Array<Argument>} ArgumentArray
 */

/**
  Conditionally joins class names.

  @param {ArgumentArray} arguments
  - The values to join.

  @returns {string}
  Returns a string of class names each separated by a space.
 */

export function cn(... args: any[]): string;

/**
  Creates a JavaScript object containing keys as identifiers and class
  names as values. If the value is a function, it is assigned to the
  value as is, without executing.

  @param {PlainObject} params
  - Plain JavaScript object with keys containing CSS styles.

  @returns {PlainObject}
  Plain JavaScript object with keys as identifiers and class names or
  functions as values.
 */

export function create(params?: PlainObject): PlainObject;

/**
  Creates a JavaScript object containing keys as identifiers and class
  names as values. If the value is a function, it is assigned to the
  value as is, without executing.
 */

export type Percentage = `${number}%`;

export type KeyframesObject = {
  /**
    The selector is used to specify the percentage along the
    duration of the animation that the keyframe represents.
   */

  [x: Percentage]: StylesObject | undefined;

  /**
    - The keyword `from` is equivalent to the value `0%`.
   */

  from?: StylesObject;

  /**
    - The keyword `to` is equivalent to the value `100%`.
   */

  to?: StylesObject;
};

export type MediaQueryString = `@media ${string}`;

export type MediaQueryObject = {
  [x: MediaQueryString]: string | number | StylesObject | undefined;

  /**
    Media query shortcut key equivalent to styles that are not
    wrapped in a media query block. Use with other media query
    shortcut keys to apply styles in default circumstances.
  
    Media query shortcut key _roughly_ equivalent to:
    - `@media all`
   */

  _?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (prefers-color-scheme: dark)`
   */

  Dk?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (orientation: landscape)`
   */

  L?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (prefers-color-scheme: light)`
   */

  Lt?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (min-width: 768px)`
   */

  Md?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (orientation: portrait)`
   */

  P?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media print`
   */

  Pr?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (prefers-reduced-motion: reduce)`
   */

  Prm?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (prefers-reduced-transparency: reduce)`
   */

  Prt?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`
   */

  R?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media screen`
   */

  Sc?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (max-width: 767.98px)`
   */

  Sm?: string | number | StylesObject;
};

export type Placeholder = `%${string}`;

export type Variable = `$${string}`;

export type StylesObject =
  | StandardPropertiesFallback<MediaQueryObject | string | number>
  | MediaQueryObject
  | {
  /**
    This index signature enables using any CSS selector as a key.
    Regex-validated string types are not available in TypeScript.

    @see https://github.com/microsoft/TypeScript/issues/41160

    But if they were, the CSS selector regex could be found in
    [src/parse/get-selectors.js](https://github.com/ptb/style/blob/develop/src/parse/get-selectors.js#L17-L42).
   */

      [key: string]:
        | string
        | string[]
        | number
        | StylesObject
        | StylesObject[]
        | undefined;
      [key: Placeholder]:
        | boolean
        | string
        | string[]
        | number
        | StylesObject
        | StylesObject[]
        | undefined;
      [key: Variable]:
        | boolean
        | string
        | string[]
        | number
        | StylesObject
        | StylesObject[]
        | undefined;

  /**
    When used as the top-most key in a styles object, the rules nested
    beneath will be grouped and return as few class names as possible.
   */

      "&"?: StylesObject;

  /**
    The **`animationName`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

    **Syntax**: `[ none | <keyframes-name> ]#`

    **Syntax**: `{ [ from | to | <percentage> ]: { <declaration-list> }}`

    **Initial value**: `none`

    | Chrome  | Firefox | Safari  |  Edge  |   IE   |
    | :-----: | :-----: | :-----: | :----: | :----: |
    | **43**  | **16**  |  **9**  | **12** | **10** |
    | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

    @see https://developer.mozilla.org/docs/Web/CSS/animation-name
    @see https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
   */

      animationName?:
        | KeyframesObject
        | Property.AnimationName
        | Property.AnimationName[];

  /**
    The **`bg`** shorthand property sets the background color of an element.

    **Syntax**: `<color>`

    **Initial value**: `transparent`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */

      bg?:
        | MediaQueryObject
        | Property.BackgroundColor
        | Property.BackgroundColor[];

  /**
    The **`borderX`** shorthand property sets all the properties of an element's left and right borders.

    **Syntax**: `<line-width> || <line-style> || <color>`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/border-left
    @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */

      borderX?:
        | MediaQueryObject
        | (Property.BorderLeft<string | number> &
            Property.BorderRight<string | number>);

  /**
    The **`borderY`** shorthand property sets all the properties of an element's top and bottom borders.

    **Syntax**: `<line-width> || <line-style> || <color>`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/border-top
    @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */

      borderY?:
        | MediaQueryObject
        | (Property.BorderBottom<string | number> &
            Property.BorderTop<string | number>);

  /**
    The **`fontFamily`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

    **Syntax**: `[ <family-name> | <generic-family> ]#`

    **Syntax**: `{
    [ font-family: <family-name>; ] ||
    [ src: <src>; ] ||
    [ unicode-range: <unicode-range>; ] ||
    [ font-variant: <font-variant>; ] ||
    [ font-feature-settings: <font-feature-settings>; ] ||
    [ font-variation-settings: <font-variation-settings>; ] ||
    [ font-stretch: <font-stretch>; ] ||
    [ font-weight: <font-weight>; ] ||
    [ font-style: <font-style>; ] ||
    [ size-adjust: <size-adjust>; ] ||
    [ ascent-override: <ascent-override>; ] ||
    [ descent-override: <descent-override>; ] ||
    [ line-gap-override: <line-gap-override>; ]
    }`

    **Initial value**: depends on user agent

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/font-family
    @see https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
   */

      fontFamily?:
        | Property.FontFamily
        | Property.FontFamily[]
        | AtRule.FontFace<string | number>
        | Array<
            AtRule.FontFace<string | number> | Property.FontFamily
          >;

  /**
    The **`m`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

    **Syntax**: `[ <length> | <percentage> | auto ]{1,4}`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin
   */

      m?: MediaQueryObject | Property.Margin<string | number>;

  /**
    The **`marginHorizontal`** shorthand property sets the margin area on the left and right sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-left
    @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */

      marginHorizontal?:
        | MediaQueryObject
        | (Property.MarginLeft<string | number> &
            Property.MarginRight<string | number>);

  /**
    The **`marginVertical`** shorthand property sets the margin area on the top and bottom sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-top
    @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */

      marginVertical?:
        | MediaQueryObject
        | (Property.MarginBottom<string | number> &
            Property.MarginTop<string | number>);

  /**
    The **`marginX`** shorthand property sets the margin area on the left and right sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-left
    @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */

      marginX?:
        | MediaQueryObject
        | (Property.MarginLeft<string | number> &
            Property.MarginRight<string | number>);

  /**
    The **`marginY`** shorthand property sets the margin area on the top and bottom sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-top
    @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */

      marginY?:
        | MediaQueryObject
        | (Property.MarginBottom<string | number> &
            Property.MarginTop<string | number>);

  /**
    The **`mb`** shorthand property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */

      mb?: MediaQueryObject | Property.MarginBottom<string | number>;

  /**
    The **`ml`** shorthand property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */

      ml?: MediaQueryObject | Property.MarginLeft<string | number>;

  /**
    The **`mr`** shorthand property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */

      mr?: MediaQueryObject | Property.MarginRight<string | number>;

  /**
    The **`mt`** shorthand property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */

      mt?: MediaQueryObject | Property.MarginTop<string | number>;

  /**
    The **`mx`** shorthand property sets the margin area on the left and right sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-left
    @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */

      mx?:
        | MediaQueryObject
        | (Property.MarginLeft<string | number> &
            Property.MarginRight<string | number>);

  /**
    The **`my`** shorthand property sets the margin area on the top and bottom sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    **Syntax**: `<length> | <percentage> | auto`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-top
    @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */

      my?:
        | MediaQueryObject
        | (Property.MarginBottom<string | number> &
            Property.MarginTop<string | number>);

  /**
    The **`p`** shorthand property sets the padding area on all four sides of an element at once.

    **Syntax**: `[ <length> | <percentage> ]{1,4}`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding
   */

      p?: MediaQueryObject | Property.Padding<string | number>;

  /**
    The **`paddingHorizontal`** shorthand property sets the width of the padding area to the left and right of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-left
    @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */

      paddingHorizontal?:
        | MediaQueryObject
        | (Property.PaddingLeft<string | number> &
            Property.PaddingRight<string | number>);

  /**
    The **`paddingVertical`** shorthand property sets the height of the padding area on the top and bottom of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-top
    @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */

      paddingVertical?:
        | MediaQueryObject
        | (Property.PaddingBottom<string | number> &
            Property.PaddingTop<string | number>);

  /**
    The **`paddingX`** shorthand property sets the width of the padding area to the left and right of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-left
    @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */

      paddingX?:
        | MediaQueryObject
        | (Property.PaddingLeft<string | number> &
            Property.PaddingRight<string | number>);

  /**
    The **`paddingY`** shorthand property sets the height of the padding area on the top and bottom of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-top
    @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */

      paddingY?:
        | MediaQueryObject
        | (Property.PaddingBottom<string | number> &
            Property.PaddingTop<string | number>);

  /**
    The **`pb`** shorthand property sets the height of the padding area on the bottom of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */

      pb?: MediaQueryObject | Property.PaddingBottom<string | number>;

  /**
    The **`pl`** shorthand property sets the width of the padding area to the left of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */

      pl?: MediaQueryObject | Property.PaddingLeft<string | number>;

  /**
    The **`pr`** shorthand property sets the width of the padding area on the right of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */

      pr?: MediaQueryObject | Property.PaddingRight<string | number>;

  /**
    The **`pt`** shorthand property sets the height of the padding area on the top of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */

      pt?: MediaQueryObject | Property.PaddingTop<string | number>;

  /**
    The **`px`** shorthand property sets the width of the padding area to the left and right of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-left
    @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */

      px?:
        | MediaQueryObject
        | (Property.PaddingLeft<string | number> &
            Property.PaddingRight<string | number>);

  /**
    The **`py`** shorthand property sets the height of the padding area on the top and bottom of an element.

    **Syntax**: `<length> | <percentage>`

    **Initial value**: `0`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-top
    @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */

      py?:
        | MediaQueryObject
        | (Property.PaddingBottom<string | number> &
            Property.PaddingTop<string | number>);

  /**
    The **`size`** shorthand property sets an element's height and width. By default, it sets the height and width of the content area, but if `box-sizing` is set to `border-box`, it sets the height and width of the border area.

    **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

    **Initial value**: `auto`

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/height
    @see https://developer.mozilla.org/docs/Web/CSS/width
   */

      size?:
        | MediaQueryObject
        | (Property.Height<string | number> &
            Property.Width<string | number>);
    };

/**
  Parse styles, selectors, and shortcuts from an object or array of objects.
  Styles will be de-duplicated, cached, and applied to the active web page.
  Based on the styles input, a hashed string of class name(s) are returned.

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

export function css(
  input?: StylesObject | (StylesObject | undefined)[],
  className?: string | (string | undefined)[] | undefined
): string;

/**
  Parse styles, selectors, and shortcuts from an object or array of objects.
  Styles will be de-duplicated, cached, and applied to the active web page.
  Based on the styles input, a hashed string of class name(s) are returned.
 */

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
  Returns styled-system shorthand properties and user provided `$properties`.

  @returns {PlainObject}
  An object containing shorthand keys and the properties they represent.
 */

export function getShorthands(): PlainObject;

/**
  Returns styled-system shorthand properties and user provided `$properties`.
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
  Returns default prefix strings and user provided prefixes.

  @param {string} [media]
  - Media query string.

  @returns {PlainObject}
  An object containing prefix strings.
 */

export function getPrefixes(media?: string | undefined): PlainObject;

/**
  Returns default prefix strings and user provided prefixes.
 */

/**
  Returns conditional shorthand keys and user provided shorthand variables.

  @param {"media" | "supports"} rule
  - Conditional group rule string.

  @param {string} [media]
  - Media query string.

  @returns {PlainObject}
  An object containing shorthand keys and the features they represent.
 */

export function getConditionals(
  rule?: "media" | "supports",
  media?: string | undefined
): PlainObject;

/**
  Returns conditional shorthand keys and user provided shorthand variables.
 */

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
