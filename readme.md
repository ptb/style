# @ptb/style [![coverage](https://img.shields.io/coveralls/github/ptb/style?color=696)](https://coveralls.io/github/ptb/style) [![license](https://img.shields.io/npm/l/@ptb/style?color=696)](https://choosealicense.com/licenses/apache-2.0/) [![version](https://img.shields.io/npm/v/@ptb/style?color=696&label=version)](https://www.npmjs.com/package/@ptb/style) [![size](https://img.shields.io/bundlephobia/minzip/@ptb/style?color=696&label=gzip+size)](https://bundlephobia.com/package/@ptb/style)

<img align="right" alt="" height="180" src="docs/logo.svg" width="180" />

### CSS compiler with a powerful, intuitive API that makes authoring CSS faster and easier.

- [**Demonstration**][demo] 👈🏻
- [Documentation][docs]
- [Report Bugs][bugs]
- [Request Feature][talk]

## Perfect CSS Architecture

Let’s imagine the perfect styling system. Styling should be easy, predictable, and maintainable. All the features of CSS should be usable: media queries, any & all selectors, animations, and custom properties. Modifying styles should be effortless and without side effects. It should be simple enough for a novice developer and powerful enough for the needs of an experienced team. Re-using styles should be uncomplicated or better yet, automatic. Minimized CSS output should be automatically (or easily) added to our workflow and compatible with all our current tools, whatever they may be.

## Do One Thing and Do It Well

The core of `@ptb/style` is a single function named `css`, that parses JavaScript objects containing CSS styles, applies them to the current web page, and returns the class names.

Declare the styles you want and that’s it.

### Stop Naming Things

- The point of CSS is not about naming things; it’s about style and design.
- Skip naming and remembering class names and let the computer do it for you.
- And it’s your choice if you’d like atomic class names or grouped class names.
- Names are generated automatically and consistently based on styles input.

### Production Ready

- Zero-runtime overhead or dynamic runtime or a mix of both, automatically.
- Universal tool for rendering at build-time, server-side, or on the client.
- TypeScript definitions are extracted and built from JSDoc (same as webpack).
- Single 9 kB (gzip) ES6 file with no dependencies and 99% test coverage.

### Developer Experience

- Primary `css` function accepts styles, selectors, media queries, and shortcuts.
- Styles are cached, de-duplicated, merged, and applied in a consistent order.
- An array of objects will be deep merged to easily override styles via props.
- Media queries can be at the top, at the bottom under the CSS property, or nested.
- Specify abbreviations for media queries or CSS properties to use in their place.
- Define snippets using `$`-prefixed names and re-use them anywhere else.
- Prototype and vet ideas quickly using CRA, CodeSandbox, or others with no setup.
- CSS is optimized from development and changes to deployment and maintenance.

## Installation

Add `@ptb/style` to your project:

```sh
npm install @ptb/style   # or:  yarn add @ptb/style
```

## Usage

Import the `css` function and use with the `className` prop:

```jsx
import { css } from "@ptb/style"

export default function ({ children }) {
  return (
    <div
      className={css({
        display: "flex",
        textAlign: "center"
      })}
    >
      {children}
    </div>
  )
}
```

## Documentation

Check out the [demo][demo] and the [documentation][docs] for live examples.

## License

Distributed under the Apache License. See [`LICENSE`](LICENSE) for more information.

## Acknowledgments

- Thanks to [Austin Appleby](https://github.com/aappleby) for [MurmurHash3](https://github.com/aappleby/smhasher).
- Thanks to [Gary Court](https://github.com/garycourt) for [murmurhash-js](https://github.com/garycourt/murmurhash-js).
- Thanks to [Andrey Sitnik](https://github.com/ai) for [nanoid](https://github.com/ai/nanoid/blob/main/non-secure/index.js).

[docs]: https://ptb.dev/style/#toc=1
[bugs]: https://github.com/ptb/style/issues
[talk]: https://github.com/ptb/style/discussions

[demo]: https://ptb.dev/style/demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++bg%3A+%22%239c9%22%2C%0A++++++color%3A+%22%23333%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++++animationName%3A+%7B%0A++++++++%220%25%22%3A+%7B%0A++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++%7D%2C%0A++++++++%2210%25%2C20%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%28.9%2C.9%2C.9%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++%7D%2C%0A++++++++%2230%25%2C50%25%2C70%25%2C90%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C3deg%29%22%0A++++++++%7D%2C%0A++++++++%2240%25%2C60%25%2C80%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++%7D%2C%0A++++++++to%3A+%7B%0A++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++%7D%0A++++++%7D%2C%0A++++++animationDuration%3A+%221s%22%2C%0A++++++animationIterationCount%3A+%22infinite%22%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29#t=1
