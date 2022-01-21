/*
  eslint-disable
    max-lines-per-function
 */

import { Editor } from "../../demo/js/editor/index.js"
import { createElement as h, Fragment } from "../../demo/js/react.js"
import { Tabpanel, Tabs } from "../../demo/js/tabs/index.js"
import {
  getConditionals,
  getPrefixes,
  getShorthands
} from "../../src/index.js"
import { css } from "../../src/style.js"
import { style } from "./app.css.js"
import { File } from "./file.js"
import { Iframe } from "./iframe.js"

export function App () {
  return h("div", { "className": css(style.root) }, [
    h(
      Tabs,
      {
        "as": Fragment,
        "group": "toc",
        "heading": ({ children }) => h("strong", {}, children),
        "isDynamic": true,
        "orientation": "vertical",
        "styles": style,
        "tabs": {
          "Introduction": ["Styling Made Easier"],
          // eslint-disable-next-line sort-keys
          "Basics": [
            "Styles Are JS Objects",
            "Deep Merge Objects",
            "Atomic Classes",
            "Grouped Classes"
          ],
          "Shorthand Keys": [
            h(Fragment, {}, [
              "Stored Variables (",
              h("code", {}, "$"),
              ")"
            ]),
            "CSS Properties",
            "Media Queries",
            h(Fragment, {}, [h("code", {}, "@font-face"), " Rules"]),
            h(Fragment, {}, [h("code", {}, "@keyframes"), " Rules"]),
            "Vendor Prefixes"
          ],
          "Selectors": [
            "Complex Selectors",
            "Nesting Selector",
            h(Fragment, {}, [
              "Placeholder Classes (",
              h("code", {}, "%"),
              ")"
            ])
          ],
          "Values & Variables": [
            "Smart Integers",
            "Fallback Array Values"
          ],
          "Setup Not Required": [
            "Zero-Runtime Option",
            "…with Create React App",
            "…with Next.js",
            "…with Gatsby",
            "…with Remix"
          ],
          "Made With ❤️ in NH": []
        }
      },
      [
        h(Tabpanel, {}, [
          h("h2", {}, "Styling Made Easier"),
          h(
            "p",
            {},
            "Runtime CSS-in-JS or zero-runtime, or both. Eliminate complexity. Maintainable. Theme: why not both? Designed to handle any real world situation."
          ),
          h("h2", {}, "Optimized Output"),
          h("p", {}, [
            "Styles are minimized by default. Styles are ordered consistently by CSS property, which is why class names start with a sortable two character prefix that corresponds with a specific CSS property. Auditing the final output is easy because you'll find all of the same properties grouped together. Finding colors that are not part of your theme becomes simple."
          ])
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Styles are JavaScript Objects"),
          h("h3", {}, "Can be defined inline…"),
          h(
            Editor,
            {
              "data-line": "4",
              "isDynamic": true,
              "lang": "jsx",
              "rows": 1
            },
            [
              `import { css } from "@ptb/style"`,
              ``,
              `export default () => (`,
              `  <span className={css({ fontFamily: "sans-serif", fontSize: "24px" })}>`,
              `    Buy Now!`,
              `  </span>`,
              `)`
            ].join("\n")
          ),
          h("h3", {}, "in variables…"),
          h(
            Editor,
            { "data-line": "4-7,10", "isDynamic": true, "lang": "jsx" },
            [
              `import { css } from "@ptb/style"`,
              ``,
              `export default () => {`,
              `  const styles = {`,
              `    fontFamily: "sans-serif",`,
              `    fontSize: "24px"`,
              `  }`,
              ``,
              `  return (`,
              `    <span className={css(styles)}>`,
              `      Buy Now!`,
              `    </span>`,
              `  )`,
              `}`
            ].join("\n")
          ),
          h("h3", {}, "by importing from other files…"),
          h(
            Editor,
            { "data-line": "2,5", "isDynamic": true, "lang": "jsx" },
            [
              `import { css } from "@ptb/style"`,
              `import { styles } from "./styles.js"`,
              ``,
              `export default () => (`,
              `  <span className={css(styles)}>`,
              `    Buy Now!`,
              `  </span>`,
              `)`
            ].join("\n")
          ),
          h("h3", {}, "…or passed as props."),
          h(
            Editor,
            { "data-line": "3,4", "isDynamic": true, "lang": "jsx" },
            [
              `import { css } from "@ptb/style"`,
              ``,
              `export default ({ styles }) => (`,
              `  <span className={css(styles)}>`,
              `    Buy Now!`,
              `  </span>`,
              `)`
            ].join("\n")
          ),
          h("h2", {}, "…or an array of JavaScript Objects")
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Deep Merge Objects"),
          h(
            "p",
            {},
            'If you pass an array of objects as the first argument to the `css` function, the objects will be expanded (as in the case of `bg`) then deep merged. Only the "surviving" property/value pairs are used.'
          ),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%5B%0A++++++%7B%0A++++++++bg%3A+%22%239c9%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%2C%0A++++++%7B%0A++++++++backgroundColor%3A+%22%23cfc%22%2C%0A++++++++maxWidth%3A+100%2C%0A++++++++overflow%3A+%22hidden%22%2C%0A++++++++whiteSpace%3A+%22nowrap%22%2C%0A++++++++textOverflow%3A+%22ellipsis%22%2C%0A++++++%7D%0A++++%5D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=6%2C9%2C19-20&s=25-27%2C45-47&i=17%2C68#t=2",
            "styles": { "maxHeight": "80vh" }
          })
        ]),

        h(Tabpanel, {}, [
          h("h2", {}, "Atomic Classes"),
          h("p", {}, [
            "Each property/value pair creates an atomic class name by default. You'll notice that regardless of the order that the rules are listed, they always result in the same order in the stylesheet. That means that all of the `textAlign` properties will always be together, which makes it possible to audit the styles by just reading. This is a live editor, try changing some of the values for `maxWidth` or `fontSize` here and see what the effect is immediately. Switch to the HTML tab and notice that the class name for that property is recalculated based on the value, but the two letter prefix that is based on the property does not change."
          ]),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++backgroundColor%3A+%22%239c9%22%2C%0A++++++padding%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+%22200px%22%2C%0A++++++margin%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+%2210px%22%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+%22bold%22%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+%2224px%22%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29#t=0",
            "styles": { "maxHeight": "80vh" }
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Grouped Classes"),
          h(
            "p",
            {},
            "But if you prefer to have fewer class names attached to elements, that is an option, too. Just wrap the styles in an object with `&` as the key. Depending on your needs, you could choose to group styles together under a single class name or individual classes depending on what your needs are. If you're planning on re-using a group of styles throughout your project, you'll want to group them with `&`. It results in a slightly larger stylesheet, but fewer class names in the HTML."
          ),
          h(Iframe, {
            "src":
              "../demo/?e=5%2C17&x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%22%26%22%3A+%7B%0A++++++++backgroundColor%3A+%22%239c9%22%2C%0A++++++++padding%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+%22200px%22%2C%0A++++++++margin%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+%2210px%22%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+%22bold%22%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+%2224px%22%2C%0A++++++%7D%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29#t=1",
            "styles": { "maxHeight": "80vh" }
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, [
            "Stored Variables Using ",
            h(
              "code",
              { "className": css({ "bg": "#eee", "color": "#363" }) },
              "$"
            ),
            " Prefix"
          ]),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%24colors%3A+%7B%0A++++++++borders%3A+%7B%0A++++++++++heavy%3A+%22%23030%22%0A++++++++%7D%2C%0A++++++++buttons%3A+%22%23363%22%2C%0A++++++++text%3A+%7B%0A++++++++++primary%3A+%22%23cfc%22%0A++++++++%7D%0A++++++%7D%2C%0A+++++%24mainFont%3A+%5B%0A+++++++%22Georgia%22%2C%0A+++++++%22Times+New+Roman%22%2C%0A+++++++%22serif%22%0A++++++%5D%2C%0A++++++%24width%3A+%222px%22%2C%0A++++++bg%3A+%22%24colors.buttons%22%2C%0A++++++color%3A+%22%24colors.text.primary%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%22%24width+solid+%24colors.borders.heavy%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22%24mainFont%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-21%2C28%2C30&s=14%2C34%2C38%2C42&i=2-28#t=2"
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Shorthand Properties"),
          h(
            "p",
            {},
            "Supports ",
            h(
              "a",
              { "href": "https://styled-system.com/api/" },
              "Styled System"
            ),
            " shorthand properties."
          ),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++bg%3A+%22%239c9%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+%22200px%22%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+%2210px%22%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+%22bold%22%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+%2224px%22%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-6%2C9&s=25-27%2C29-31%2C33-35&i=2-35%2C70-86#t=2",
            "styles": { "maxHeight": "40vh" }
          }),
          h(
            "div",
            {
              "className": css({
                "display": "grid",
                "gap": 8,
                "gridTemplateColumns": "1fr 1fr",
                "p": 8
              })
            },
            [
              h("div", {}, [
                h("h3", {}, "CSS Properties"),
                h(File, {
                  "data-src": "../src/shared/get-property-id.json",
                  "styles": {
                    "&": {
                      "maxHeight": "40vh"
                    }
                  }
                })
              ]),
              h("div", {}, [
                h("h3", {}, [
                  "Shorthand ",
                  h("code", {}, "$properties")
                ]),
                h(
                  File,
                  { "styles": { "&": { "maxHeight": "40vh" } } },
                  JSON.stringify(getShorthands(), null, 2)
                )
              ])
            ]
          )
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Media Queries"),
          h("p", {}, [
            "Media queries can be nested or inverted. This is seriously powerful feature. If you're creating a design to switch between light mode and dark mode, you can keep the values for each at the 'bottom' of the style object under the CSS property it affects. This provides the flexibility to create a media query at any point without enforcing a specific structure."
          ]),

          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%22%40media+%28min-width%3A+768px%29%22%3A+%7B%0A++++++++%22%40media+%28-webkit-min-device-pixel-ratio%3A+2%29%22%3A+%7B%0A++++++++++backgroundImage%3A+%22url%28%5C%22data%3Aimage%2Fsvg%2Bxml%2C%253csvg+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27+width%3D%27120%27+height%3D%27120%27%253e%253cpath+d%3D%27M16+111h88c0-32-32-15-32-31C112+8+8+8+48+80c0+16-32-1-32+31Z%27+fill%3D%27none%27+stroke%3D%27black%27+stroke-width%3D%272%27%2F%253e%253c%2Fsvg%253e%5C%22%29%22%2C%0A++++++++++backgroundPosition%3A+%7B%0A++++++++++++%22%40media+%28orientation%3Alandscape%29%22%3A+%2210px+0%22%0A++++++++++%7D%2C%0A++++++++++backgroundRepeat%3A+%22no-repeat%22%2C%0A++++++++++backgroundSize%3A+30%0A++++++++%7D%0A++++++%7D%2C%0A++++++%22%40media+%28prefersColorScheme%3Adark%29%22%3A+%7B%0A++++++++bg%3A+%7B%0A++++++++++%22%40media+%28maxWidth%3A767.98px%29%22%3A+%22%23363%22%2C%0A++++++++++%22%40media+%28minWidth%3A768px%29%22%3A+%22%23633%22%0A++++++++%7D%2C%0A++++++++borderColor%3A+%22%23030%22%2C%0A++++++++color%3A+%22%23eee%22%0A++++++%7D%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5%2C6%2C9%2C15%2C17-18&s=41%2C47%2C61%2C67%2C73&i=179-182%2C201-204%2C223-226%2C245-248%2C268-271%2C290-293%2C312-314%2C333-335#t=2",
            "styles": { "maxHeight": "35vh" }
          }),
          h(
            "div",
            {
              "className": css({
                "display": "grid",
                "gap": 8,
                "gridTemplateColumns": "1fr 1fr",
                "p": 8
              })
            },
            [
              h("div", {}, [
                h("h3", {}, h("code", {}, "$media")),
                h(
                  Editor,
                  { "lang": "js", "rows": 2 },
                  JSON.stringify(getConditionals(), null, 2)
                )
              ]),
              h("div", {}, [
                h("h3", {}, h("code", {}, "$supports")),
                h(
                  Editor,
                  { "lang": "js", "rows": 2 },
                  JSON.stringify(getConditionals("supports"), null, 2)
                )
              ])
            ]
          )
        ]),

        h(Tabpanel, {}, [
          h("h2", {}, [h("code", {}, "@font-face"), " Rules"]),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++fontFamily%3A+%5B%0A++++++++%7B%0A++++++++++fontFamily%3A+%22SourceSansPro%22%2C%0A++++++++++fontWeight%3A+200%2C%0A++++++++++src%3A%0A++++++++++++%27url%28%22%2Ffonts%2FSourceSansPro-Light.ttf%22%29+format%28%22truetype%22%29%27%0A++++++++%7D%2C%0A++++++++%7B%0A++++++++++fontFamily%3A+%22SourceSansPro%22%2C%0A++++++++++fontWeight%3A+700%2C%0A++++++++++src%3A%0A++++++++++++%27url%28%22%2Ffonts%2FSourceSansPro-Bold.ttf%22%29+format%28%22truetype%22%29%27%0A++++++++%7D%2C%0A++++++++%22sans-serif%22%0A++++++%5D%2C%0A++++++bg%3A+%22%239c9%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-19&s=13-15%2C45-47%2C49-51&i=2-74#t=2"
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, [h("code", {}, "@keyframes"), " Rules"]),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++animationName%3A+%7B%0A++++++++%220%25%22%3A+%7B%0A++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++%7D%2C%0A++++++++%2210%25%2C20%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%28.9%2C.9%2C.9%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++%7D%2C%0A++++++++%2230%25%2C50%25%2C70%25%2C90%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C3deg%29%22%0A++++++++%7D%2C%0A++++++++%2240%25%2C60%25%2C80%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++%7D%2C%0A++++++++to%3A+%7B%0A++++++++++%22transform%22%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++%7D%0A++++++%7D%2C%0A++++++animationDuration%3A+%221s%22%2C%0A++++++animationIterationCount%3A+%22infinite%22%2C%0A++++++bg%3A+%22%239c9%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-24&s=45-47%2C57-77&i=2-58#t=0"
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, [
            "Stored Variables Using ",
            h(
              "code",
              { "className": css({ "bg": "#eee", "color": "#363" }) },
              "$"
            ),
            " Prefix"
          ]),
          h("h3", {}, h("code", {}, "$prefixes")),
          h(
            Editor,
            { "lang": "js", "rows": 2 },
            JSON.stringify(getPrefixes(), null, 2)
          )
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Complex Selectors"),
          h(
            "p",
            {},
            "All selectors are supported. Just be cautioned. This could be considered a bad practice. Just because you can doesn't mean you should. You'll notice that when global selectors are used, class names for those styles are not emitted to the element just added to the stylesheet."
          ),
          h(Iframe, {
            "src":
              "../demo/?e=5%2C9%2C12%2C15&s=1%2C5%2C13%2C45%2C53&x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%22%5Baria-selected%3Dtrue%5D%22%3A+%7B%0A++++++++color%3A+%22var%28--primary-color%29%22%2C%0A++++++++fontStyle%3A+%22italic%22%0A++++++%7D%2C%0A++++++%22%3Ahover%2Cul%3Eli%3Anth-child%28odd%29%3Anot%28%3Alast-child%29%22%3A+%7B%0A++++++++bg%3A+%22%23ccc%22%0A++++++%7D%2C%0A++++++%22%3Aroot%22%3A+%7B%0A++++++++%22--primary-color%22%3A+%22%23ff3%22%0A++++++%7D%2C%0A++++++%22%5Brole%3Dtablist%5D%22%3A+%7B%0A++++++++%22--primary-color%22%3A+%22%23363%22%0A++++++%7D%2C%0A++++++bg%3A+%22var%28--primary-color%29%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29#t=2",
            "styles": { "maxHeight": "85vh" }
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Nesting Selector"),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%22main%2C%23root%22%3A+%7B%0A++++++++%22%26%3Esection%2Cdiv+%26%22%3A+%7B%0A++++++++++color%3A+%22%23eee%22%0A++++++++%7D%0A++++++%7D%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5%2C6&s=1&i=12-36#t=2"
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, [
            "Placeholder Classes (",
            h("code", {}, "%"),
            ")"
          ]),
          h(Iframe, {
            "src": "../demo/"
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Smart Integers"),
          h(
            "p",
            {},
            `Converts integers to "px" values, except for those where it isn't correct. As examples, lineHeight, order, and fontWeight.`
          ),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++bg%3A+%22%239c9%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=8%2C11%2C13%2C15&s=5-7%2C9-11%2C21-23%2C41-43&i=53-69%2C104-120%2C138-154%2C172-188#t=2"
          })
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "Fallback Array Values"),
          h("p", {}, "Fallbacks use arrays."),
          h(Iframe, {
            "src":
              "../demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++bg%3A+%5B%0A++++++++%22%239c9%22%2C%0A++++++++%22rgba%28153%2C204%2C153%2C.8%29%22%2C%0A++++++++%22lch%2877.463%25+31.76+141.167+%2F+80%25%29%22%0A++++++%5D%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-9&s=33-37&i=2-28#t=2"
          })
        ]),

        h(Tabpanel, {}, [
          h("h2", {}, "Setup Not Required"),
          h("p", {}, [
            "There is no setup required! Simply add the library to your project and import it in each file where it is used. No container, context, Babel configuration, or webpack plugins required. If you wish to utilize the zero-runtime option, there is some setup needed, mostly to render components and save the resulting styles to a css file."
          ]),
          h(
            Editor,
            {
              "data-line": "1,3",
              "isDynamic": true,
              "lang": "bash",
              "rows": 2
            },
            "npm install @ptb/style\n# or\nyarn add @ptb/style"
          ),
          h("h2", {}, "Zero-Runtime Option"),
          h("p", {}, "Instead of importing from "),
          h(Editor, { "rows": 1 }, `import { css } from "@ptb/style"`),
          h("p", {}, "import the Babel macro instead: "),
          h(
            Editor,
            { "rows": 1 },
            `import { css } from "@ptb/style/macro"`
          )
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "With Create React App"),
          h(
            Editor,
            { "lang": "bash", "rows": 1 },
            [
              "yarn create react-app my-react-app",
              "cd my-react-app",
              "yarn add git+https://github.com/ptb/style.git",
              "echo '' > src/styles.css"
            ].join("\n")
          ),
          h("h3", {}, [
            "Add to ",
            h(
              "code",
              { "className": css({ "bg": "#eee", "color": "#363" }) },
              "src/App.js"
            )
          ]),
          h(
            Editor,
            { "lang": "jsx", "rows": 2 },
            [
              `import { css } from "@ptb/style/macro"`,
              `import "./styles.css"`
            ].join("\n")
          ),
          h("h3", {}, [
            "Both ",
            h(
              "code",
              { "className": css({ "bg": "#eee", "color": "#363" }) },
              "yarn start"
            ),
            " or ",
            h(
              "code",
              { "className": css({ "bg": "#eee", "color": "#363" }) },
              "yarn build"
            ),
            " should work as expected, including hot reload."
          ]),
          h(
            Editor,
            { "lang": "bash", "rows": 1 },
            ["yarn start", "# or", "yarn build"].join("\n")
          )
        ]),
        h(Tabpanel, {}, [
          h("h2", {}, "With Next.js"),
          h(
            Editor,
            { "lang": "bash" },
            [
              "yarn create next-app my-next-app",
              "cd my-next-app",
              "yarn add git+https://github.com/ptb/style.git",
              "yarn add babel-plugin-macros",
              "echo '' > styles/styles.css"
            ].join("\n")
          ),
          h(
            "h3",
            {},
            "Create (or add to) ",
            h("code", {}, ".babelrc")
          ),
          h(
            Editor,
            {},
            [
              "{",
              '  "presets": ["next/babel"],',
              '  "plugins": ["babel-plugin-macros"]',
              "}"
            ].join("\n")
          ),
          h("h3", {}, "Add to ", h("code", {}, "package.json")),
          h(
            Editor,
            { "lang": "js", "rows": 3 },
            [
              `  "babelMacros": {`,
              `    "@ptb/style": {`,
              `      "output": "styles/styles.css"`,
              `    }`,
              `  }`
            ].join("\n")
          ),
          h("h3", {}, "Add to ", h("code", {}, "pages/_app.js")),
          h(
            Editor,
            { "lang": "js", "rows": 1 },
            "import '../styles/styles.css'"
          ),
          h(
            "h3",
            {},
            "Create (or add to) ",
            h("code", {}, "pages/_document.js")
          ),
          h(
            Editor,
            { "lang": "jsx", "rows": 1 },
            [
              `import { getStyles } from "@ptb/style"`,
              `import Document from "next/document"`,
              `import { Fragment } from "react"`,
              ``,
              `export default class extends Document {`,
              `  static async getInitialProps(ctx) {`,
              `    const initialProps = await Document.getInitialProps(ctx)`,
              ``,
              `    return {`,
              `      ... initialProps,`,
              `      styles: (`,
              `        <Fragment>`,
              `          {initialProps.styles}`,
              `          <style`,
              `            dangerouslySetInnerHTML={{ __html: getStyles () }}`,
              `            data-creator="@ptb/style" />`,
              `        </Fragment>`,
              `      )`,
              `    }`,
              `  }`,
              `}`
            ].join("\n")
          ),
          h(
            "h3",
            {},
            "In each component file, for example ",
            h("code", {}, "pages/index.js")
          ),
          h(
            Editor,
            { "lang": "js", "rows": 1 },
            'import { css } from "@ptb/style/macro"'
          ),
          h("h3", {}, "Start Next.js server"),
          h(
            Editor,
            { "lang": "bash", "rows": 1 },
            ["yarn dev"].join("\n")
          )
        ]),
        h(Tabpanel, {}, [h("h2", {}, "With Gatsby")]),
        h(Tabpanel, {}, [h("h2", {}, "With Remix")]),
        h(Tabpanel, {}, [
          h(Iframe, {
            "src": "../demo/"
          }),
          "JSDoc and TypeScript"
        ]),
        h(Tabpanel, {}, [
          h(Iframe, {
            "src": "../demo/"
          }),
          "Type Guards"
        ]),
        h(Tabpanel, {}, [
          h(Iframe, {
            "src": "../demo/"
          }),
          "Merge Utilities"
        ])
      ]
    )
  ])
}
