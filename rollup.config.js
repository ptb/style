import { execSync } from "child_process"
import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import { terser } from "rollup-plugin-terser"
import pkg from "./package.json"

const banner = "/*! @copyright "
  .concat (pkg.author.name)
  .concat (" | @license ")
  .concat (pkg.license)
  .concat (" | @link ")
  .concat (pkg.homepage)
  .concat ("/tree/")
  .concat (
    execSync ("git rev-parse HEAD")
      .toString ()
      .slice (0, 7)
  )
  .concat (" | @version ")
  .concat (pkg.version)
  .concat (" */")

export default [
  {
    "input": "src/api/index.js",
    "output": {
      "banner": banner,
      "file": pkg.module,
      "format": "esm"
    },
    "plugins": [
      terser ({
        "mangle": {
          "toplevel": true
        },
        "output": {
          "comments": /^!/u
        }
      })
    ]
  },
  {
    "input": "src/api/index.js",
    "output": {
      "banner": banner,
      "file": pkg.main,
      "format": "umd",
      "name": "amory"
    },
    "plugins": [
      nodeResolve (),
      babel ({
        "exclude": "node_modules/**",
        "plugins": [
          [
            "@babel/plugin-transform-runtime",
            {
              "corejs": 3,
              "useESModules": true
            }
          ]
        ],
        "presets": [
          [
            "@babel/preset-env",
            {
              "corejs": 3,
              "modules": false,
              "spec": true,
              "targets": {
                "android": "71",
                "chrome": "49",
                "edge": "16",
                "firefox": "52",
                "ie": "11",
                "ios": "9",
                "safari": "10.1",
                "samsung": "7.4"
              },
              "useBuiltIns": "usage"
            }
          ],
          "babel-preset-minify"
        ],
        "runtimeHelpers": true
      }),
      commonjs (),
      terser ({
        "mangle": {
          "toplevel": true
        },
        "output": {
          "comments": /^!/u
        }
      })
    ]
  },
  {
    "input": "src/api/style.js",
    "output": {
      "banner": banner,
      "file": "web/style.js",
      "format": "esm"
    },
    "plugins": [
      terser ({
        "mangle": {
          "toplevel": true
        },
        "output": {
          "comments": /^!/u
        }
      })
    ]
  }
]
