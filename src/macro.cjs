/*
  eslint-disable
    @typescript-eslint/no-empty-function,
    @typescript-eslint/no-var-requires,
    func-style,
    no-empty-function
 */

const { writeFileSync } = require("fs")
const { join } = require("path")

const { createMacro } = require("babel-plugin-macros")

const { css, getStyles } = require("./style.cjs")

let processExitHook = function () {}

process.on("exit", function () {
  processExitHook()
})

/**
  @typedef {
    import ("babel-plugin-macros").MacroParams &
    Record<"source", string>
  } MacroParams
 */

/**
  Replace calls to `create` or `css` with resulting class name strings.

  @param {MacroParams} args
  - `babel-plugin-macros` arguments.

  @returns {{ "keepImports": boolean }}
    Keep import statement that has been modified.
 */

function macro ({ babel, config = {}, references, source, state }) {
  const t = babel.types
  const output = config.output || join("src", "styles.css")
  const { cwd, file } = state
  const filepath = join(cwd, output)

  const path = file.scope.path.get("body").find(function (p) {
    return p.isImportDeclaration() && p.node.source.value === source
  })

  if (path && (/[./]macro/u).test(source)) {
    const src = path.get("source")

    if (!Array.isArray(src)) {
      src.replaceWith(
        t.stringLiteral(source.replace(/[./]macro.*/u, ""))
      )
    }
  }

  Object.keys(references).forEach(function (refs) {
    const ref = references[refs]

    if (typeof ref !== "undefined") {
      ref.forEach(function ({ parentPath }) {
        if (parentPath && t.isCallExpression(parentPath.node)) {
          const arg1 = parentPath.get("arguments")
          let args

          if (Array.isArray(arg1)) {
            const arg2 = arg1.map(function (arg) {
              return arg.evaluate()
            })

            if (
              arg2.every(function (arg) {
                return arg.confident
              })
            ) {
              args = arg2.map(function (arg) {
                return arg.value
              })

              parentPath.replaceWith(t.stringLiteral(css(... args)))
            }
          }
        }
      })
    }
  })

  writeFileSync(filepath, getStyles())

  processExitHook = function () {
    writeFileSync(filepath, getStyles())
  }

  return {
    "keepImports": true
  }
}

module.exports = createMacro(
  function (... input) {
    if (
      Object.prototype.hasOwnProperty.call(
        input[0],
        "isBabelMacrosCall"
      )
    ) {
      // @ts-ignore
      return macro(... input)
    }

    return css(... input)
  },
  {
    "configName": "@ptb/style"
  }
)
