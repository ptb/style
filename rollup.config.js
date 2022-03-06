/* eslint-disable import/order */

import { execSync } from "child_process"

// @ts-ignore
import replace from "@rollup/plugin-replace"
import strip from "@rollup/plugin-strip"
import typescript from "@rollup/plugin-typescript"

// @ts-ignore
import execute from "rollup-plugin-execute"
import { terser } from "rollup-plugin-terser"

import pkg from "./package.json"

const revision = "".concat(
  execSync("git rev-parse HEAD 2> /dev/null || true")
    .toString()
    .slice(0, 7)
)

const banner = "/*! @copyright "
  .concat(pkg.author.name)
  .concat(" | @license ")
  .concat(pkg.license)
  .concat(" | @link ")
  .concat(pkg.repository.url)
  .concat(revision ? "/tree/" + revision : "")
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
      replace({
        "delimiters": ["", ""],
        "include": ["src/client/update-styles.js"],
        "preventAssignment": false,
        "values": {
          /* eslint-disable sort-keys */
          "function updateStyles":
            "const updateStyles = debounce (function",
          " /* updateStyles */": ")"
        }
      }),
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
  },
  {
    "input": "src/macro.cjs",
    "output": {
      "banner": banner,
      "file": "macro.cjs",
      "format": "cjs"
    }
  },
  {
    "external": ["./style.js"],
    "input": "src/vite-plugin.js",
    "output": {
      "banner": banner,
      "file": "vite-plugin.js",
      "format": "esm"
    }
  },
  {
    "external": ["fs"],
    "input": "src/merge/merge-json.js",
    "output": {
      "banner": function () {
        return ["#!/usr/bin/env node", banner].join("\n")
      },
      "file": "merge-json.cjs",
      "format": "cjs"
    },
    "plugins": [
      typescript({
        "tsconfig": "jsconfig.json"
      }),
      execute("chmod +x merge-json.cjs")
    ]
  }
]
