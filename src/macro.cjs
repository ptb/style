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

function macro ({
  "babel": { "types": t },
  "config": { output = join("src", "styles.css") },
  references,
  "state": { cwd }
}) {
  const filepath = join(cwd, output)

  Object.keys(references).forEach(function (refs) {
    references[refs].forEach(function (ref) {
      const CallExpression = ref.findParent(t.isCallExpression)

      const args = CallExpression.get("arguments").map(function (arg) {
        return arg.evaluate().value
      })

      CallExpression.replaceWith(t.stringLiteral(css(... args)))
    })
  })

  writeFileSync(filepath, getStyles())

  processExitHook = function () {
    writeFileSync(filepath, getStyles())
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
      return macro(... input)
    }

    return css(... input)
  },
  {
    "configName": "@ptb/style"
  }
)
