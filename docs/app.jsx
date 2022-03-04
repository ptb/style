/*
  eslint-disable
    max-lines-per-function,
    react/prop-types
 */

import { css } from "@ptb/style/macro"

import {
  getConditionals,
  getPrefixes,
  getShorthands
} from "../index.js"
import classNames from "./app.css.js"
import { DisplayFile } from "./display-file.jsx"
import { Editor } from "./editor.jsx"
import { Iframe } from "./iframe.jsx"
import { Tablist } from "./tablist.jsx"
import { Tabpanel } from "./tabpanel.jsx"
import { Tabpanels } from "./tabpanels.jsx"
import { TocItem } from "./toc-item.jsx"
import { useTabs } from "./use-tabs.js"
import { useVisualViewport } from "./use-visual-viewport.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `App` component.

  @returns {React.ReactElement}
    React component.
 */

export function App () {
  useVisualViewport()

  /**
    Table of Contents section header.

    @param {object} props
    - Component inputs.

    @param {string} props.children
    - Component content.

    @returns {React.ReactElement}
      React component.
   */

  function Heading ({ children, ... props }) {
    return (
      <h3 className={classNames.heading} {...props}>
        {children}
      </h3>
    )
  }

  const tabs = {
    "Basics": [
      "Introduction",
      "Styles Are JS Objects",
      "Deep Merge Objects",
      "Atomic Classes",
      "Grouped Classes"
    ],
    "Shorthand Keys": [
      "Stored Variables",
      "CSS Properties",
      "Media Queries",
      "Font Face Rules",
      "Keyframes Rules",
      "Vendor Prefixes"
    ],
    /* eslint-disable-next-line sort-keys */
    "Selectors": [
      "Complex Selectors",
      "Nesting Selector",
      "Placeholder Classes"
    ],
    "Values & Variables": ["Smart Integers", "Fallback Array Values"],
    /* eslint-disable-next-line sort-keys */
    "Production Ready": [
      "Zero–Runtime Option",
      "…with Create React App",
      "…with Next.js",
      "…with Tailwind CSS"
    ]
  }

  const { labels, param, selected, setParam, setSelected } = useTabs({
    "group": "toc",
    tabs
  })

  return (
    <div className={classNames.grid}>
      <header className={classNames.head}>
        <label
          aria-label="Menu"
          className={classNames.menu}
          htmlFor="menu"
        />
        <h1 className={classNames.logo}>
          ptb/style
        </h1>
        <a
          className={classNames.github}
          href="https://github.com/ptb/style"
        >
          GitHub
        </a>
      </header>
      <aside className={classNames.side}>
        <Tablist
          classNames={classNames}
          group="toc"
          heading={Heading}
          initial={param}
          menuitem={TocItem}
          orientation="vertical"
          selected={selected}
          setSelected={setSelected}
          tabs={tabs}
          total={labels.length}
          updParams={setParam}
        />
      </aside>
      <input className={classNames.hide} id="menu" type="checkbox" />
      <label
        aria-label="Close menu"
        className={classNames.blur}
        htmlFor="menu"
      />
      <main className={classNames.main}>
        <Tabpanels
          classNames={classNames}
          group="toc"
          labels={labels}
          selected={selected}
        >
          <Tabpanel />
          <Tabpanel>
            <h2>Styles are JavaScript Objects</h2>

            <h3>Can be defined inline…</h3>
            <Editor data-line="5-8" lang="jsx" rows={1}>
              {[
                `import { css } from "@ptb/style"`,
                ``,
                `export default () => (`,
                `  <span`,
                `    className={css({`,
                `      fontFamily: "sans-serif",`,
                `      fontSize: "24px"`,
                `    })}`,
                `  >`,
                `    Buy Now!`,
                `  </span>`,
                `)`
              ].join("\n")}
            </Editor>

            <h3>in variables…</h3>
            <Editor data-line="4-7,10" lang="jsx">
              {[
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
              ].join("\n")}
            </Editor>

            <h3>by importing from other files…</h3>
            <Editor data-line="4-7" lang="js">
              {[
                `import { css } from "@ptb/style"`,
                ``,
                `export default {`,
                `  button: css({`,
                `    fontFamily: "sans-serif",`,
                `    fontSize: "24px"`,
                `  })`,
                `}`
              ].join("\n")}
            </Editor>
            <Editor data-line="1,4" lang="jsx">
              {[
                `import classNames from "./styles.js"`,
                ``,
                `export default () => (`,
                `  <span className={classNames.button}>`,
                `    Buy Now!`,
                `  </span>`,
                `)`
              ].join("\n")}
            </Editor>

            <h3>…or passed as props.</h3>
            <Editor data-line="3,4" lang="jsx">
              {[
                `import { css } from "@ptb/style"`,
                ``,
                `export default ({ styles }) => (`,
                `  <span className={css(styles)}>`,
                `    Buy Now!`,
                `  </span>`,
                `)`
              ].join("\n")}
            </Editor>

            <h3>…or an array of JavaScript Objects</h3>
            <Editor data-line="5-13" lang="jsx">
              {[
                `import { css } from "@ptb/style"`,
                ``,
                `export default () => (`,
                `  <span`,
                `    className={css([`,
                `      {`,
                `        fontFamily: "sans-serif",`,
                `        fontSize: "24px"`,
                `      },`,
                `      {`,
                `        fontSize: "36px"`,
                `      }`,
                `    ])}`,
                `  >`,
                `    Buy Now!`,
                `  </span>`,
                `)`
              ].join("\n")}
            </Editor>
          </Tabpanel>
          <Tabpanel>
            <h2>Deep Merge Objects</h2>
            <p>
              If you pass an array of objects as the first argument to
              the <code className={classNames.code}>css</code>{" "}
              function, the objects will be expanded (as in the case
              of <code className={classNames.code}>bg</code>) then
              deep merged. Only the “surviving” property/value pairs
              are used.
            </p>
            <Iframe
              src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%5B%0A++++++%7B%0A++++++++bg%3A+%22%239c9%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%2C%0A++++++%7B%0A++++++++backgroundColor%3A+%22%23cfc%22%2C%0A++++++++maxWidth%3A+275%2C%0A++++++++overflow%3A+%22hidden%22%2C%0A++++++++whiteSpace%3A+%22nowrap%22%2C%0A++++++++textOverflow%3A+%22ellipsis%22%2C%0A++++++%7D%0A++++%5D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=6%2C9%2C19-20&s=25-27%2C45-47&i=17%2C68#t=3"
              style={{ "height": "80vh" }}
            />
          </Tabpanel>
          <Tabpanel>
            <h2>Atomic Classes</h2>
            <p>
              Each property/value pair creates an atomic class name by
              default. You’ll notice that regardless of the order that
              the rules are listed, they always result in the same
              order in the stylesheet. That means that all of the{" "}
              <code className={classNames.code}>textAlign</code>{" "}
              properties will always be together, which makes it
              possible to audit the styles by just reading.{" "}
              <em>
                This is a live editor, try changing some of the values
                for <code className={classNames.code}>maxWidth</code>{" "}
                or <code className={classNames.code}>fontSize</code>{" "}
                here and see what the effect is immediately.
              </em>{" "}
              Switch to the HTML tab and notice that the class name
              for that property is recalculated based on the value,
              but the two letter prefix that is based on the property
              does not change.
            </p>
            <Iframe
              src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++backgroundColor%3A+%22%239c9%22%2C%0A++++++color%3A+%22%23333%22%2C%0A++++++padding%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+%22200px%22%2C%0A++++++margin%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+%2210px%22%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+%22bold%22%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+%2224px%22%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29#t=1"
              style={{ "height": "80vh" }}
            />
          </Tabpanel>
          <Tabpanel>
            <h2>Grouped Classes</h2>
            <p>
              But if you prefer to have fewer class names attached to
              elements, that is an option, too. Just wrap the styles
              in an object with as the key. Depending on your needs,
              you could choose to group styles together under a single
              class name or individual classes depending on what your
              needs are. If you’re planning on re-using a group of
              styles throughout your project, you’ll want to group
              them with <code className={classNames.code}>&amp;</code>
              . It results in a slightly larger stylesheet, but fewer
              class names in the HTML.
            </p>
            <Iframe
              src="./demo/?e=5%2C18&x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%22%26%22%3A+%7B%0A++++++++backgroundColor%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++padding%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+%22200px%22%2C%0A++++++++margin%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+%2210px%22%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+%22bold%22%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+%2224px%22%2C%0A++++++%7D%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29#t=2"
              style={{ "height": "80vh" }}
            />
          </Tabpanel>
          <Tabpanel>
            <h2>
              Stored Variables Using{" "}
              <code className={classNames.code}>$</code> Prefix
            </h2>
            <Iframe src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%24colors%3A+%7B%0A++++++++borders%3A+%7B%0A++++++++++heavy%3A+%22%23030%22%0A++++++++%7D%2C%0A++++++++buttons%3A+%22%23363%22%2C%0A++++++++text%3A+%7B%0A++++++++++primary%3A+%22%23cfc%22%0A++++++++%7D%0A++++++%7D%2C%0A+++++%24mainFont%3A+%5B%0A+++++++%22Georgia%22%2C%0A+++++++%22Times+New+Roman%22%2C%0A+++++++%22serif%22%0A++++++%5D%2C%0A++++++%24width%3A+%222px%22%2C%0A++++++bg%3A+%22%24colors.buttons%22%2C%0A++++++color%3A+%22%24colors.text.primary%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%22%24width+solid+%24colors.borders.heavy%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22%24mainFont%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-21%2C28%2C30&s=14%2C34%2C38%2C42&i=2-28#t=3" />
          </Tabpanel>
          <Tabpanel>
            <h2>Shorthand Properties</h2>
            <p>
              Supports{" "}
              <a
                className={classNames.link}
                href="https://styled-system.com/api/"
              >
                Styled System
              </a>{" "}
              shorthand properties.
            </p>
            <Iframe
              src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++bg%3A+%22%239c9%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+%22200px%22%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+%2210px%22%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+%22bold%22%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+%2224px%22%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-6%2C9&s=25-27%2C29-31%2C33-35&i=2-35%2C70-86#t=3"
              style={{ "height": "calc(var(--viewport-height) * .35)" }}
            />
            <div
              className={css({
                "display": "grid",
                "gap": 8,
                "gridTemplateColumns": "1fr 1fr",
                "p": 8
              })}
            >
              <div>
                <h3>CSS Properties</h3>
                <DisplayFile
                  src="./src/shared/get-property-id.json"
                  style={{
                    "height": "calc(var(--viewport-height) * .35)"
                  }}
                />
              </div>
              <div>
                <h3>
                  Shorthand{" "}
                  <code className={classNames.code}>$properties</code>
                </h3>
                <DisplayFile
                  style={{
                    "height": "calc(var(--viewport-height) * .35)"
                  }}
                >
                  {JSON.stringify(getShorthands(), null, 2)}
                </DisplayFile>
              </div>
            </div>
          </Tabpanel>
          <Tabpanel>
            <h2>Media Queries</h2>
            <p>
              Media queries can be nested or inverted. This is
              seriously powerful feature. If you’re creating a design
              to switch between light mode and dark mode, you can keep
              the values for each at the “bottom” of the style object
              under the CSS property it affects. This provides the
              flexibility to create a media query at any point without
              enforcing a specific structure.
            </p>
            <Iframe
              src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%22%40media+%28min-width%3A+768px%29%22%3A+%7B%0A++++++++%22%40media+%28-webkit-min-device-pixel-ratio%3A+2%29%22%3A+%7B%0A++++++++++backgroundImage%3A+%22url%28%5C%22data%3Aimage%2Fsvg%2Bxml%2C%253csvg+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27+width%3D%27120%27+height%3D%27120%27%253e%253cpath+d%3D%27M16+111h88c0-32-32-15-32-31C112+8+8+8+48+80c0+16-32-1-32+31Z%27+fill%3D%27none%27+stroke%3D%27black%27+stroke-width%3D%272%27%2F%253e%253c%2Fsvg%253e%5C%22%29%22%2C%0A++++++++++backgroundPosition%3A+%7B%0A++++++++++++%22%40media+%28orientation%3Alandscape%29%22%3A+%2210px+0%22%0A++++++++++%7D%2C%0A++++++++++backgroundRepeat%3A+%22no-repeat%22%2C%0A++++++++++backgroundSize%3A+30%0A++++++++%7D%0A++++++%7D%2C%0A++++++%22%40media+%28prefersColorScheme%3Adark%29%22%3A+%7B%0A++++++++bg%3A+%7B%0A++++++++++%22%40media+%28maxWidth%3A767.98px%29%22%3A+%22%23363%22%2C%0A++++++++++%22%40media+%28minWidth%3A768px%29%22%3A+%22%23633%22%0A++++++++%7D%2C%0A++++++++borderColor%3A+%22%23030%22%2C%0A++++++++color%3A+%22%23eee%22%0A++++++%7D%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5%2C6%2C9%2C15%2C17-18&s=41%2C47%2C61%2C67%2C73&i=179-182%2C201-204%2C223-226%2C245-248%2C268-271%2C290-293%2C312-314%2C333-335#t=3"
              style={{ "height": "calc(var(--viewport-height) * .25)" }}
            />
            <div
              style={{
                "display": "grid",
                "gap": 8,
                "gridTemplateColumns": "1fr 1fr",
                "padding": 8
              }}
            >
              <div>
                <h3>
                  <code className={classNames.code}>$media</code>
                </h3>
                <Editor lang="js" rows={2}>
                  {JSON.stringify(getConditionals(), null, 2)}
                </Editor>
              </div>
              <div>
                <h3>
                  <code className={classNames.code}>$supports</code>
                </h3>
                <Editor lang="js" rows={2}>
                  {JSON.stringify(
                    getConditionals("supports"),
                    null,
                    2
                  )}
                </Editor>
              </div>
            </div>
          </Tabpanel>
          <Tabpanel>
            <h2>
              <code className={classNames.code}>@font-face</code>{" "}
              Rules
            </h2>
            <Iframe src="./demo/?x=createElement%28%22div%22%2C+%7B%7D%2C+%5B%0A++createElement%28%0A++++%22div%22%2C%0A++++%7B%0A++++++className%3A+css%28%7B%0A++++++++fontFamily%3A+%5B%0A++++++++++%7B%0A++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++fontWeight%3A+400%2C%0A++++++++++++src%3A%0A++++++++++++++%22url%28%27..%2Ffonts%2Fsource-sans-pro-400.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++%7D%2C%0A++++++++++%7B%0A++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++fontStyle%3A+%22oblique%22%2C%0A++++++++++++fontWeight%3A+400%2C%0A++++++++++++src%3A%0A++++++++++++++%22url%28%27..%2Ffonts%2Fsource-sans-pro-400i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++%7D%2C%0A++++++++++%7B%0A++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++fontWeight%3A+700%2C%0A++++++++++++src%3A%0A++++++++++++++%22url%28%27..%2Ffonts%2Fsource-sans-pro-700.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++%7D%2C%0A++++++++++%7B%0A++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++fontStyle%3A+%22oblique%22%2C%0A++++++++++++fontWeight%3A+700%2C%0A++++++++++++src%3A%0A++++++++++++++%22url%28%27..%2Ffonts%2Fsource-sans-pro-700i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++%7D%0A++++++++%5D%2C%0A++++++++fontSize%3A+24%2C%0A++++++++fontWeight%3A+700%0A++++++%7D%29%0A++++%7D%2C%0A++++%22Buy+Now%21%22%0A++%29%2C%0A++createElement%28%0A++++%22div%22%2C%0A++++%7B%0A++++++className%3A+css%28%7B%0A++++++++fontFamily%3A+%5B%0A++++++++++%7B%0A++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++fontWeight%3A+400%2C%0A++++++++++++src%3A+%22url%28%27..%2Ffonts%2Fpt-serif-400.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++%7D%2C%0A++++++++++%7B%0A++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++fontStyle%3A+%22italic%22%2C%0A++++++++++++fontWeight%3A+400%2C%0A++++++++++++src%3A+%22url%28%27..%2Ffonts%2Fpt-serif-400i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++%7D%2C%0A++++++++++%7B%0A++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++fontWeight%3A+700%2C%0A++++++++++++src%3A+%22url%28%27..%2Ffonts%2Fpt-serif-700.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++%7D%2C%0A++++++++++%7B%0A++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++fontStyle%3A+%22italic%22%2C%0A++++++++++++fontWeight%3A+700%2C%0A++++++++++++src%3A+%22url%28%27..%2Ffonts%2Fpt-serif-700i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++%7D%0A++++++++%5D%2C%0A++++++++fontSize%3A+24%2C%0A++++++++fontWeight%3A+700%0A++++++%7D%29%0A++++%7D%2C%0A++++%22Buy+Again%21%22%0A++%29%0A%5D%29%0A#t=3" />
          </Tabpanel>
          <Tabpanel>
            <h2>
              <code className={classNames.code}>@keyframes</code>{" "}
              Rules
            </h2>
            <Iframe src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++animationName%3A+%7B%0A++++++++%220%25%22%3A+%7B%0A++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++%7D%2C%0A++++++++%2210%25%2C20%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%28.9%2C.9%2C.9%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++%7D%2C%0A++++++++%2230%25%2C50%25%2C70%25%2C90%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C3deg%29%22%0A++++++++%7D%2C%0A++++++++%2240%25%2C60%25%2C80%25%22%3A+%7B%0A++++++++++transform%3A%0A++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++%7D%2C%0A++++++++to%3A+%7B%0A++++++++++%22transform%22%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++%7D%0A++++++%7D%2C%0A++++++animationDuration%3A+%221s%22%2C%0A++++++animationIterationCount%3A+%22infinite%22%2C%0A++++++bg%3A+%22%239c9%22%2C%0A++++++color%3A+%22%23333%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-24&s=45-47%2C57-77&i=2-58#t=1" />
          </Tabpanel>
          <Tabpanel>
            <h2>
              Stored Variables Using{" "}
              <code className={classNames.code}>$</code> Prefix
            </h2>
            <h3>
              <code className={classNames.code}>$prefixes</code>
            </h3>
            <Editor lang="js" rows={2}>
              {JSON.stringify(getPrefixes(), null, 2)}
            </Editor>
            )
          </Tabpanel>
          <Tabpanel>
            <h2>Complex Selectors</h2>
            <p>
              All selectors are supported. Just be cautioned. This
              could be considered a bad practice. Just because you can
              doesn’t mean you should. You’ll notice that when global
              selectors are used, class names for those styles are not
              emitted to the element just added to the stylesheet.
            </p>
            <Iframe
              src="./demo/?e=5%2C8%2C11%2C15&s=1%2C5%2C9%2C13%2C21%2C25&x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%22%5Baria-selected%3Dtrue%5D%22%3A+%7B%0A++++++++fontWeight%3A+700%0A++++++%7D%2C%0A++++++%22%3Ahover%2C+ul+%3E+%3Alast-child+li%3Anth-child%28odd%29%3Anot%28%3Alast-child%29%22%3A+%7B%0A++++++++textDecoration%3A+%22underline%22%0A++++++%7D%2C%0A++++++%22%3Aroot%22%3A+%7B%0A++++++++%22--primary-color%22%3A+%22%23363%22%2C%0A++++++++%22--sat%22%3A+%225%25%22%0A++++++%7D%2C%0A++++++%22%5Brole%3Dtablist%5D%22%3A+%7B%0A++++++++%22--hue%22%3A+%22120%22%2C%0A++++++++%22--sat%22%3A+%2230%25%22%0A++++++%7D%2C%0A++++++bg%3A+%22var%28--primary-color%29%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29#t=3"
              style={{ "height": "85vh" }}
            />
          </Tabpanel>
          <Tabpanel>
            <h2>Nesting Selector</h2>
            <Iframe src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++%22main%2C%23root%22%3A+%7B%0A++++++++%22%26%3Esection%2Cdiv+%26%22%3A+%7B%0A++++++++++color%3A+%22%23eee%22%0A++++++++%7D%0A++++++%7D%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5%2C6&s=1&i=12-36#t=3" />
          </Tabpanel>
          <Tabpanel>
            <h2>
              Placeholder Classes (
              <code className={classNames.code}>%</code>)
            </h2>
            <Iframe src="./demo/?e=8%2C17&s=1&x=createElement%28%0A++Fragment%2C%0A++%7B%7D%2C%0A++createElement%28%0A++++%22input%22%2C%0A++++%7B%0A++++++className%3A+css%28%7B%0A++++++++%22%25check%22%3A+true%2C%0A++++++%7D%29%2C%0A++++++type%3A+%22checkbox%22%0A++++%7D%0A++%29%2C%0A++createElement%28%0A++++%22span%22%2C%0A++++%7B%0A++++++className%3A+css%28%7B%0A++++++++%22%25check%3Anot%28%3Achecked%29+%2B+%26%22%3A+%7B%0A++++++++++bg%3A+%22%23363%22%0A++++++++%7D%0A++++++%7D%29%0A++++%7D%2C%0A++++%22Buy+Now%21%22%0A++%29%0A%29#t=3" />
          </Tabpanel>
          <Tabpanel>
            <h2>Smart Integers</h2>
            <p>
              Converts integers to{" "}
              <code className={classNames.code}>px</code> values,
              except for those where it wouldn’t be correct. As
              examples,{" "}
              <code className={classNames.code}>lineHeight</code>,{" "}
              <code className={classNames.code}>order</code>, and{" "}
              <code className={classNames.code}>fontWeight</code>.
            </p>
            <Iframe src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++bg%3A+%22%239c9%22%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=8%2C11%2C13%2C15&s=5-7%2C9-11%2C21-23%2C41-43&i=53-69%2C104-120%2C138-154%2C172-188#t=3" />
          </Tabpanel>
          <Tabpanel>
            <h2>Fallback Array Values</h2>
            <p>Fallbacks use arrays.</p>
            <Iframe src="./demo/?x=createElement%28%0A++%22span%22%2C%0A++%7B%0A++++className%3A+css%28%7B%0A++++++bg%3A+%5B%0A++++++++%22%239c9%22%2C%0A++++++++%22rgba%28153%2C204%2C153%2C.8%29%22%2C%0A++++++++%22lch%2877.463%25+31.76+141.167+%2F+80%25%29%22%0A++++++%5D%2C%0A++++++p%3A+%224px+10px%22%2C%0A++++++display%3A+%22block%22%2C%0A++++++maxWidth%3A+200%2C%0A++++++m%3A+%22auto%22%2C%0A++++++textAlign%3A+%22center%22%2C%0A++++++borderRadius%3A+10%2C%0A++++++border%3A+%222px+solid+%23696%22%2C%0A++++++fontWeight%3A+700%2C%0A++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++fontSize%3A+24%2C%0A++++%7D%29%0A++%7D%2C%0A++%22Buy+Now%21%22%0A%29&e=5-9&s=33-37&i=2-28#t=3" />
          </Tabpanel>
          <Tabpanel>
            <h2>
              Setup Not <em>Required</em>
            </h2>
            <p>
              Simply add the library to your project and import it in
              each file where it is used. No container, context, Babel
              configuration, or webpack plugins required.
            </p>
            <p>
              If you wish to utilize the zero-runtime option, there is{" "}
              <em>some</em> setup needed, mostly to pre-render
              components and save the resulting styles to a css file.
            </p>
            <Editor data-line="1,3" lang="bash" rows={2}>
              {`npm install @ptb/style\n# or\nyarn add @ptb/style`}
            </Editor>
            <h2>Zero-Runtime Option</h2>
            <p>Instead of importing from</p>
            <Editor rows={1}>
              {`import { css } from "@ptb/style"`}
            </Editor>
            <p>import the Babel macro instead:</p>
            <Editor rows={1}>
              {`import { css } from "@ptb/style/macro"`}
            </Editor>
          </Tabpanel>
          <Tabpanel>
            <h2>With Create React App</h2>
            <Editor lang="bash" rows={1}>
              {[
                "yarn create react-app my-react-app",
                "cd my-react-app",
                "yarn add @ptb/style",
                "echo '' > src/styles.css"
              ].join("\n")}
            </Editor>
            <h3>
              Add to{" "}
              <code className={classNames.code}>src/App.js</code>
            </h3>
            <Editor lang="jsx" rows={2}>
              {[
                `import { css } from "@ptb/style/macro"`,
                `import "./styles.css"`
              ].join("\n")}
            </Editor>
            <h3>
              Both <code className={classNames.code}>yarn start</code>{" "}
              or <code className={classNames.code}>yarn build</code>{" "}
              should work as expected, including hot reload.
            </h3>
            <Editor lang="bash" rows={1}>
              {["yarn start", "# or", "yarn build"].join("\n")}
            </Editor>
          </Tabpanel>
          <Tabpanel>
            <h2>With Next.js</h2>
            <Editor lang="bash">
              {[
                "yarn create next-app my-next-app",
                "cd my-next-app",
                "yarn add @ptb/style",
                "yarn add babel-plugin-macros",
                "echo '' > styles/styles.css"
              ].join("\n")}
            </Editor>
            <h3>
              Create (or add to){" "}
              <code className={classNames.code}>.babelrc</code>
            </h3>
            <Editor>
              {[
                "{",
                '  "presets": ["next/babel"],',
                '  "plugins": ["babel-plugin-macros"]',
                "}"
              ].join("\n")}
            </Editor>
            <h3>
              Add to{" "}
              <code className={classNames.code}>package.json</code>
            </h3>
            <Editor lang="js" rows={3}>
              {[
                `  "babelMacros": {`,
                `    "@ptb/style": {`,
                `      "output": "styles/styles.css"`,
                `    }`,
                `  }`
              ].join("\n")}
            </Editor>
            ),
            <h3>
              Add to{" "}
              <code className={classNames.code}>pages/_app.js</code>
            </h3>
            <Editor lang="js" rows={1}>
              {`import '../styles/styles.css'`}
            </Editor>
            <h3>
              Create (or add to){" "}
              <code className={classNames.code}>
                pages/_document.js
              </code>
            </h3>
            <Editor lang="jsx" rows={1}>
              {[
                `import { getStyles } from "@ptb/style"`,
                `import Document from "next/document"`,
                `import { Fragment } from "react"`,
                ``,
                `export default class extends Document {`,
                `  static async getInitialProps(ctx) {`,
                `    const initialProps =`,
                `      await Document.getInitialProps(ctx)`,
                ``,
                `    return {`,
                `      ... initialProps,`,
                `      styles: (`,
                `        <Fragment>`,
                `          {initialProps.styles}`,
                `          <style`,
                `            dangerouslySetInnerHTML={{`,
                `              __html: getStyles ()`,
                `            }}`,
                `            data-creator="@ptb/style" />`,
                `        </Fragment>`,
                `      )`,
                `    }`,
                `  }`,
                `}`
              ].join("\n")}
            </Editor>
            <h3>
              In each component file, for example{" "}
              <code className={classNames.code}>pages/index.js</code>
            </h3>
            <Editor lang="js" rows={1}>
              {`import { css } from "@ptb/style/macro"`}
            </Editor>
            <h3>Start Next.js server</h3>
            <Editor lang="bash" rows={1}>
              {["yarn dev"].join("\n")}
            </Editor>
          </Tabpanel>
          <Tabpanel>
            <h2>
              With{" "}
              <a
                className={classNames.link}
                href="https://tailwindcss.com/docs/utility-first"
              >
                Tailwind CSS
              </a>
            </h2>
            <p>
              Using Tailwind with{" "}
              <code className={classNames.code}>@ptb/style</code> is
              possibly simpler than Tailwind on its own! The Babel
              macro{" "}
              <a
                className={classNames.link}
                href="https://github.com/ben-rogerson/twin.macro#readme"
              >
                <code className={classNames.code}>twin.macro</code>
              </a>{" "}
              generates a JavaScript object that is perfect as input
              for the <code className={classNames.code}>css</code>{" "}
              function.
            </p>
            <p>First, add the required packages:</p>
            <Editor lang="bash" rows={1}>
              yarn add babel-plugin-macros tailwindcss twin.macro
            </Editor>
            <p>
              Then, in each component file, import from{" "}
              <code className={classNames.code}>twin.macro</code> and
              call Tailwind CSS classes as a tagged template. At build
              time, the <code className={classNames.code}>tw``</code>{" "}
              expression will be replaced by a JavaScript object
              representing those styles.
            </p>
            <p>
              <strong>Note:</strong> The{" "}
              <code className={classNames.code}>twin.macro</code>{" "}
              import <em>must</em> be listed <em>before</em> the{" "}
              <code className={classNames.code}>@ptb/style</code>{" "}
              import.
            </p>
            <Editor lang="jsx">
              {[
                `import tw from "twin.macro"`,
                `import { css } from "@ptb/style/macro"`,
                ``,
                `export default () => (`,
                `  <span`,
                `    className={css([`,
                "      tw`flex flex-col items-center justify-center h-screen`,",
                `      {`,
                `        fontFamily: "sans-serif",`,
                `        fontSize: "24px"`,
                `      }`,
                `    ])}`,
                `  >`,
                `    Buy Now!`,
                `  </span>`,
                `)`
              ].join("\n")}
            </Editor>
          </Tabpanel>
        </Tabpanels>
      </main>
      <footer className={classNames.foot}>
        <div>
          Made With <abbr title="Love">❤️</abbr> in{" "}
          <abbr title="New Hampshire">NH</abbr>
        </div>
      </footer>
    </div>
  )
}
