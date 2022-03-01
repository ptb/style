> CSS compiler for maintainable, predictable styles with the minimum possible output. Eliminate the cognitive overhead of regular CSS: coming up with class names, composing styles for variants, specificity issues, and style ordering. Supports client-side rendering, server-side rendering, zero-runtime, or a combination.

<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/ptb/style">
    <img alt="@ptb/style Logo" height="240" src="docs/logo.svg" width="240" />
  </a>

  <h3 align="center">@ptb/style</h3>

  <p align="center">
    All the features of CSS with the ease of inline styles.
    <br />
    <a href="https://ptb.github.io/style/docs/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ptb.github.io/style/demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++bg%3A+%22%239c9%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++++animationName%3A+%7B%0A++++++++%220%25%22%3A+%7B%0A++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++%7D%2C%0A++++++++%2210%25%2C20%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%28.9%2C.9%2C.9%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++%7D%2C%0A++++++++%2230%25%2C50%25%2C70%25%2C90%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C3deg%29%22%0A++++++++%7D%2C%0A++++++++%2240%25%2C60%25%2C80%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++%7D%2C%0A++++++++to%3A+%7B%0A++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++%7D%0A++++++%7D%2C%0A++++++animationDuration%3A+%221s%22%2C%0A++++++animationIterationCount%3A+%22infinite%22%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29#t=0">View Demo</a>
    ·
    <a href="https://github.com/ptb/style/issues">Report Bug</a>
    ·
    <a href="https://github.com/ptb/style/discussions">Request Feature</a>
  </p>
</div>

## About The Project

I've been a web developer for over 25 years[*](https://web.archive.org/web/19961220192514/http://agate.net/), and in that time I've used vanilla CSS, Sass, Styletron, Styled Components, and everything in between. I've always wanted a CSS architecture that is _**predictable**_, _**maintainable**_, and that results in the absolute _**minimum possible output**_. I've distilled all of my experience into this tool.

<h3 align="center">This is my way of giving back to the web development community.</h3>

### No More Naming

Class names are generated automatically in a _**consistent**_ and predictable way.  The same input will result in the same output, and is based on the CSS property used and their values; whether rendered at build time, server-side rendered, or at runtime in the browser.

### Easy Variants

Pass an array of objects as input and they will be _**deep merged**_. Start with a base set of styles and then any modifications as a second object. Matching styles will be overridden and won't appear in the output class names or CSS if not used.

### Optimized Output

Styles are cached, _**de-duplicated**_, automatically re-used, and minimized.  If you use `color: red` hundreds of times, it will still only result in one declaration in the CSS (at most per each media query or @supports block).

### Setup Not Required

Ideal for trying _**quick design ideas**_ in Create React App, CodeSandbox, and others without setting up theme providers, wrappers, special components, props, or build configuration. One import and you're ready to go.

When you're ready to deploy to production, add `/macro` to the import path and configure your framework to save the cached styles. Zero-runtime is easy.

### So Many Shortcuts

Using `$`-prefixed variables, set up CSS property abbreviations, media query shortcuts, vendor prefixes, or groups of style snippets anywhere.  Styled System shorthands are built-in and can be extended with your own.  Several media query shortcuts are pre-defined and add custom queries that make sense for your project. Media queries can be used at the top of a group of styles, at the bottom under a CSS property, or nested inside of other media queries.

<p align="right">(<a href="#top">back to top</a>)</p>

## Flexibility

### Dynamic Runtime

At its core, it is a JavaScript function that takes CSS styles stored as JS objects and returns class names that those styles represent.  The core of this library is a single JavaScript function that accepts a JavaScript object containing styles as input, which are parsed, cached, de-duplicated, and applied to the page at runtime responding dynamically as events make changes to the page.

### …or Zero-Runtime
Alternatively, styles can be "compiled away" leaving just class names and a minimized CSS file by using the Babel macro (and one-time setup).

If you need client-side rendering (CSR), server-side rendering (SSR), or static at build time (SSG), it's covered.

### Media Queries

Media queries can be specified at the top of a group of styles, at the bottom under the CSS property itself, or anywhere in between. Media queries can also be nested.

### Any and All Selectors

Use type selectors, class selectors, ID selectors, universal selectors, attribute selectors, state selectors, sibling, child, or descendant selectors, pseudo classes, and pseudo elements. The `&` nesting selector from Sass is also supported. In addition, `%`-prefixed placeholder class names and a special "self-selector" can be used when needed. The self- selector re-uses the `&` character to group a set of styles under a single class name. Atomic or grouped class names: it's your choice.

### Simplicity

Styles are declarable. This tool does one thing: converts style rules applies them to the page.  There is only one function to learn and if you know CSS and JavaScript already, it will look very familiar. It parses styles, selectors, shortcuts, and media queries using a single function. It creates unique class names automatically. Styles are ordered simply and consistently.  Selectors are parsed, de-duplicated, and grouped with identical declarations automatically.

### Decrease Cognitive Overhead

Don't worry about naming things, style order, specificity, compressing output, build tools, plugins, etc. Have I used this before? If I change it here, what else will change? What should I name this? Keeping all those concerns and details in mind is a thing of the past.

### Maintainable
All styles are stored as plain JavaScript objects. Code style preferences can be enforced using ESLint or, if using JSON, with various JSON tools like the included `merge-json` CLI tool.  Works for a single developer or a team. Avoids bikeshedding as much as possible.

<p align="right">(<a href="#top">back to top</a>)</p>

## Customization

### Theme Variables

Store values in an easily accessible `$`-prefixed variable namespace.  Define values for colors, fonts, spacing, and utilize them anywhere in your project. Native CSS custom properties (CSS variables) are also supported. Both `$`-prefixed variables and custom properties can also be scoped to apply defferently in certain media queries if desired.

### @media Shortcuts

Set shortcuts for common media queries using the `$media` key. Define an object with the key you'd like to use and the value as the expanded media query feature (or type). Several media queries are pre-defined by default, but can be extended or overridden if desired. Shortcuts are built-in, but can be extended using your own.

### CSS Property Shortcuts

Set abbreviations for CSS properties using `$properties` key. These are merged with the built-in Styled System shorthands.

### Code Snippets

Keep reusable groups of styles in `$`-prefixed variables and retrieve them using the `$`-prefixed variable name and the value of `true`.

### Vendor Prefixes

Set an array of vendor prefixes for any property using the `$prefixes` key.

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

Add `@ptb/style` to your project:

* npm
  ```sh
  npm install @ptb/style
  ```

* yarn
  ```sh
  yarn add @ptb/style
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

Import the `css` function and use with the `className` prop:

```jsx
import { css } from "@ptb/style"

export function ({ children }) {
  return (
    <div className={css({ })}>
      {children}
    </div>
  )
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

## [Documentation](https://ptb.github.io/style/docs/)

Be sure to check out the [documentation](https://ptb.github.io/style/docs/) where you'll find live examples for all of the features mentioned above.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the Apache License. See [`LICENSE`](LICENSE) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

* Thanks to [Austin Appleby](https://github.com/aappleby) for [MurmurHash3](https://github.com/aappleby/smhasher).
* Thanks to [Gary Court](https://github.com/garycourt) for [murmurhash-js](https://github.com/garycourt/murmurhash-js).
* Thanks to [Andrey Sitnik](https://github.com/ai) for [nanoid](https://github.com/ai/nanoid/blob/main/non-secure/index.js).

<p align="right">(<a href="#top">back to top</a>)</p>
