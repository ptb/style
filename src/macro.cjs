/*
  eslint-disable
    @typescript-eslint/no-empty-function,
    @typescript-eslint/no-var-requires,
    func-style,
    no-empty-function
 */

const { writeFileSync } = require("node:fs")
const { join } = require("node:path")

const { createMacro } = require("babel-plugin-macros")

// @ts-ignore
const { create, css, getStyles } = require("./style.cjs")

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

  const mod = file.scope.path.get("body").find(function (p) {
    return p.isImportDeclaration() && p.node.source.value === source
  })

  if (mod && (/[./]macro/u).test(source)) {
    const src = mod.get("source")

    if (!Array.isArray(src)) {
      src.replaceWith(
        t.stringLiteral(source.replace(/[./]macro.*/u, ""))
      )
    }
  }

  Object.keys(references).forEach(function (refs) {
    const ref = references[refs]

    if (typeof ref !== "undefined") {
      ref.forEach(function ({ "parentPath": path }) {
        if (path && t.isCallExpression(path.node)) {
          const args = path.get("arguments")

          if (Array.isArray(args)) {
            const input = args.map(function (arg) {
              return arg.evaluate()
            })

            if (
              input.every(function (arg) {
                return arg.confident
              })
            ) {
              const values = input.map(function (arg) {
                return arg.value
              })

              switch (refs) {
                case "create":
                  path.replaceWithSourceString(
                    JSON.stringify(create(... values))
                  )
                  break
                case "css":
                  path.replaceWith(
                    t.stringLiteral(css(... values))
                  )
              }
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
