/* eslint-disable import/order */

import { execSync } from "child_process"

import strip from "@rollup/plugin-strip"
import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"

import pkg from "./package.json"

const banner = "/*! @copyright "
  .concat(pkg.author.name)
  .concat(" | @license ")
  .concat(pkg.license)
  .concat(" | @link ")
  .concat(pkg.repository.url)
  .concat("/tree/")
  .concat(
    execSync("git rev-parse HEAD")
      .toString()
      .slice(0, 7)
  )
  .concat(" | @version ")
  .concat(pkg.version)
  .concat(" */")

export default [
  {
    "input": "src/style.js",
    "output": [
      {
        "banner": banner,
        "file": pkg.module,
        "format": "esm",
        "sourcemap": true
      },
      {
        "banner": banner,
        "file": pkg.main,
        "format": "cjs",
        "sourcemap": true
      }
    ],
    "plugins": [
      strip({ "sourceMap": true }),
      typescript({
        "tsconfig": "jsconfig.json"
      }),
      terser({
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
    "input": "src/index.js",
    "output": [
      {
        "banner": banner,
        "file": "index.js",
        "format": "esm"
      }
    ],
    "plugins": [
      typescript({
        "tsconfig": "jsconfig.json"
      }),
      terser({
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
