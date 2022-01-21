/**
  Configuration for Wallaby.js.

  @typedef {import ("./src/index").PlainObject} PlainObject

  @param {any} wallaby
  - `wallaby` configuration object.

  @returns {PlainObject}
    `wallaby` configuration object.
 */

export default function (wallaby) {
  return {
    "compilers": {
      "**/*.js": wallaby.compilers.babel({
        "presets": ["@ava/babel/stage-4"]
      })
    },
    "env": {
      "type": "node"
    },
    "files": ["src/**/*.js", "!src/**/*.test.js"],
    "testFramework": "ava",
    "tests": ["src/**/*.test.js"],
    "workers": {
      "initial": 1,
      "recycle": true,
      "regular": 1,
      "restart": true
    }
  }
}
