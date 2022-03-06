import {
  AtRule,
  Property,
  StandardPropertiesFallback
} from "csstype"

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
    - `@media all`.
   */

  _?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (prefers-color-scheme: dark)`.
   */

  Dk?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (orientation: landscape)`.
   */

  L?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (prefers-color-scheme: light)`.
   */

  Lt?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (min-width: 768px)`.
   */

  Md?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (orientation: portrait)`.
   */

  P?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media print`.
   */

  Pr?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (prefers-reduced-motion: reduce)`.
   */

  Prm?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (prefers-reduced-transparency: reduce)`.
   */

  Prt?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`.
   */

  R?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media screen`.
   */

  Sc?: string | number | StylesObject;

  /**
    Media query shortcut key equivalent to:
    - `@media (max-width: 767.98px)`.
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

    Syntax**: `[ none | <keyframes-name> ]#`.

    Syntax**: `{ [ from | to | <percentage> ]: { <declaration-list> }}`.

    Initial value**: `none`.

    | Chrome  | Firefox | Safari  |  Edge  |   IE   |
    | :-----: | :-----: | :-----: | :----: | :----: |
    | **43**  | **16**  |  **9**  | **12** | **10** |
    | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

    @see https://developer.mozilla.org/docs/Web/CSS/animation-name
       *
    @see https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
   */

      animationName?:
        | KeyframesObject
        | Property.AnimationName
        | Property.AnimationName[];

  /**
    The **`bg`** shorthand property sets the background color of an element.

    Syntax**: `<color>`.

    Initial value**: `transparent`.

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

    Syntax**: `<line-width> || <line-style> || <color>`.

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

    Syntax**: `<line-width> || <line-style> || <color>`.

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

    Syntax**: `[ <family-name> | <generic-family> ]#`.

    Syntax**: `{
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
    }`.

    Initial value**: depends on user agent.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/font-family
       *
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

    Syntax**: `[ <length> | <percentage> | auto ]{1,4}`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin
   */

      m?: MediaQueryObject | Property.Margin<string | number>;

  /**
    The **`marginHorizontal`** shorthand property sets the margin area on the left and right sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */

      mb?: MediaQueryObject | Property.MarginBottom<string | number>;

  /**
    The **`ml`** shorthand property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */

      ml?: MediaQueryObject | Property.MarginLeft<string | number>;

  /**
    The **`mr`** shorthand property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */

      mr?: MediaQueryObject | Property.MarginRight<string | number>;

  /**
    The **`mt`** shorthand property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **3** |

    @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */

      mt?: MediaQueryObject | Property.MarginTop<string | number>;

  /**
    The **`mx`** shorthand property sets the margin area on the left and right sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage> | auto`.

    Initial value**: `0`.

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

    Syntax**: `[ <length> | <percentage> ]{1,4}`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding
   */

      p?: MediaQueryObject | Property.Padding<string | number>;

  /**
    The **`paddingHorizontal`** shorthand property sets the width of the padding area to the left and right of an element.

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */

      pb?: MediaQueryObject | Property.PaddingBottom<string | number>;

  /**
    The **`pl`** shorthand property sets the width of the padding area to the left of an element.

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */

      pl?: MediaQueryObject | Property.PaddingLeft<string | number>;

  /**
    The **`pr`** shorthand property sets the width of the padding area on the right of an element.

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */

      pr?: MediaQueryObject | Property.PaddingRight<string | number>;

  /**
    The **`pt`** shorthand property sets the height of the padding area on the top of an element.

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

    | Chrome | Firefox | Safari |  Edge  |  IE   |
    | :----: | :-----: | :----: | :----: | :---: |
    | **1**  |  **1**  | **1**  | **12** | **4** |

    @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */

      pt?: MediaQueryObject | Property.PaddingTop<string | number>;

  /**
    The **`px`** shorthand property sets the width of the padding area to the left and right of an element.

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

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

    Syntax**: `<length> | <percentage>`.

    Initial value**: `0`.

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

    Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`.

    Initial value**: `auto`.

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
  Creates a JavaScript object containing keys as identifiers and class
  names as values. If the value is a function, it is assigned to the
  value as is, without executing.

  @param {Record<string, Function | StylesObject | StylesObject[]>} [input]
  - Plain JavaScript object with keys containing CSS styles.

  @returns {Record<string, string | Function>}
  Plain JavaScript object with keys as identifiers and class names or
  functions as values.
 */

export function create(
  input?:
    | Record<string, Function | StylesObject | StylesObject[]>
    | undefined
): Record<string, string | Function>;

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
