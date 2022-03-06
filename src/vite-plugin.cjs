/*
  eslint-disable
    @typescript-eslint/no-empty-function,
    @typescript-eslint/no-var-requires,
    func-style,
    no-empty-function
 */

const { writeFileSync } = require("node:fs")
const { join } = require("node:path")

const {
  defineMacro,
  defineMacroPlugin,
  vitePluginMacro
} = require("vite-plugin-macro")

// @ts-ignore
const { create, css, getStyles } = require("./style.cjs")

let processExitHook = function () {}

process.on("exit", function () {
  processExitHook()
})

/**
  Replace calls to `create` or `css` with resulting class name strings.

  @returns {import ("vite").Plugin}
    Vite plugin.
 */

function plugin () {
  return defineMacroPlugin({
    "exports": {
      "@ptb/style/macro": {
        "macros": ["create", "css"].map(function (fn) {
          return defineMacro(fn)
            .withSignature(
              fn === "create"
                ? "(input?: Record<string, StylesObject>): Record<string, string>"
                : "(input?: StylesObject | (StylesObject | undefined)[] | undefined, className?: string | (string | undefined)[] | undefined): string"
            )
            .withHandler(function (
              { args, path },
              { template, types },
              { prependToBody }
            ) {
              const filepath = join("src", "styles.css")

              const input = args.map(function (arg) {
                return arg.evaluate()
              })

              if (
                input.every(function (arg) {
                  return arg.confident
                }) &&
                types.isIdentifier(path.node.callee)
              ) {
                const values = input.map(function (arg) {
                  return arg.value
                })

                switch (path.node.callee.name) {
                  case "create":
                    path.replaceWithSourceString(
                      JSON.stringify(create(... values))
                    )
                    break
                  case "css":
                    path.replaceWith(
                      types.stringLiteral(css(... values))
                    )
                }
              } else {
                prependToBody(
                  template.statement.ast(
                    `import { ${fn} } from "@ptb/style"`
                  )
                )
              }

              writeFileSync(filepath, getStyles())

              processExitHook = function () {
                writeFileSync(filepath, getStyles())
              }
            })
        })
      }
    },
    "name": "@ptb/style",
    "typesPath": join(__dirname, "macro.d.ts")
  })
}

module.exports = vitePluginMacro({
  "typesPath": join(__dirname, "macro.d.ts")
})
  .use(plugin())
  .toPlugin()
