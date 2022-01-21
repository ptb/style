import { readFileSync, writeFileSync } from "fs"

import { emptyObj, isStr, merge, sortJSON } from "../index.js"

/**
  Recursively merges and sorts by key own properties of source JSON files
  into the target JSON file. Array and plain object properties are merged
  recursively. Other objects and value types are overridden by assignment.
  Source objects are applied from left to right. Subsequent sources
  overwrite property assignments of previous sources.

  @typedef {import ("..").PlainObject} PlainObject

  @param {string} output
  - The output file name.

  @param {string[]} input
  - The input file names.

  @returns {void}
 */

function mergeJSON (output, input = []) {
  const files = input.map(function (file) {
    try {
      return readFileSync(file, { "encoding": "utf8" })
    } catch (_) {
      return "{}"
    }
  })

  const contents = files.reduce(function (results, content) {
    return merge(results, JSON.parse(content))
  }, emptyObj(JSON.parse(files[0] || "{}")))

  let buffer = JSON.stringify(sortJSON(contents), null, 2)

  buffer =
    buffer[buffer.length - 1] === "\n"
      ? buffer
      : [buffer, "\n"].join("")

  writeFileSync(output, buffer, "utf8")
}

if (isStr(process.argv[2])) {
  mergeJSON(process.argv[2], process.argv.slice(2))
} else {
  /* eslint-disable-next-line no-console */
  console.error("usage: merge-json target_file [source_files]")
}
