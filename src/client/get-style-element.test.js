/*
  eslint-disable
    jsdoc/require-jsdoc,
    max-len,
    one-var
 */

// @ts-nocheck

import http from "http"

import ava from "ava"
import puppeteer from "puppeteer"

import { getStyleElement } from "../index.js"

function httpContent (content = "") {
  return `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head><title> </title>${content}</head></html>`
}

/** @type {import ("puppeteer").Browser} */
let b

/** @type {import ("puppeteer").Page} */
let p

ava.serial.before(async () => {
  const server = http.createServer((request, response) => {
    response.setHeader("Content-type", "application/xhtml+xml")

    switch (request.url) {
      case "/a":
        return response.end(httpContent())
      case "/b":
        return response.end(
          httpContent(
            `<style data-creator="@ptb/style">.b{all:inherit}</style>`
          )
        )
      case "/c":
        return response.end(
          httpContent(
            `<style data-creator="@ptb/style" media="(min-width: 768px)">.c{gap:1px}</style>`
          )
        )
    }

    return response.end()
  })

  server.once("error", function (err) {
    if (err.code === "EADDRINUSE") {
      server.close()
    }
  })

  server.listen(7000)

  b = await puppeteer.launch()
})

ava.beforeEach(async () => {
  p = await b.newPage()
})

ava.afterEach.always(async () => {
  await p.close()
})

ava.after.always(async () => {
  await b.close()
})

ava.serial(
  "given URL '/a', verify returned contents (1)",
  async (t) => {
    await p.goto("http://localhost:7000/a", {
      "waitUntil": "networkidle0"
    })

    const actual = await p.content()

    const expect = httpContent()

    t.is(actual, expect)
  }
)

ava.serial(
  "given URL '/a', create a new style element (2)",
  async (t) => {
    await p.goto("http://localhost:7000/a", {
      "waitUntil": "networkidle0"
    })

    const style = await p
      .evaluateHandle(getStyleElement)
      .then((el) => el._remoteObject.className)

    const actual = await p.content()

    const expect = httpContent(
      `<style data-creator="@ptb/style"></style>`
    )

    t.is(style, "HTMLStyleElement")
    t.is(actual, expect)
  }
)

ava.serial(
  "given URL '/a', create a new style element (3)",
  async (t) => {
    await p.goto("http://localhost:7000/a", {
      "waitUntil": "networkidle0"
    })

    const style = await p
      .evaluateHandle(getStyleElement, "(min-width: 768px)")
      .then((el) => el._remoteObject.className)

    const actual = await p.content()

    const expect = httpContent(
      `<style data-creator="@ptb/style" media="(min-width: 768px)"></style>`
    )

    t.is(style, "HTMLStyleElement")
    t.is(actual, expect)
  }
)

ava.serial(
  "given URL '/b', verify returned contents (1)",
  async (t) => {
    await p.goto("http://localhost:7000/b", {
      "waitUntil": "networkidle0"
    })

    const actual = await p.content()

    const expect = httpContent(
      `<style data-creator="@ptb/style">.b{all:inherit}</style>`
    )

    t.is(actual, expect)
  }
)

ava.serial(
  "given URL '/b', should re-use existing style element (2)",
  async (t) => {
    await p.goto("http://localhost:7000/b", {
      "waitUntil": "networkidle0"
    })

    const style = await p
      .evaluateHandle(getStyleElement)
      .then((el) => el._remoteObject.className)

    const actual = await p.content()

    const expect = httpContent(
      `<style data-creator="@ptb/style">.b{all:inherit}</style>`
    )

    t.is(style, "HTMLStyleElement")
    t.is(actual, expect)
  }
)

ava.serial(
  "given URL '/b', should create additional style element (3)",
  async (t) => {
    await p.goto("http://localhost:7000/b", {
      "waitUntil": "networkidle0"
    })

    const style = await p
      .evaluateHandle(getStyleElement, "(min-width: 768px)")
      .then((el) => el._remoteObject.className)

    const actual = await p.content()

    const expect = httpContent(
      /* eslint-disable-next-line max-len */
      `<style data-creator="@ptb/style">.b{all:inherit}</style><style data-creator="@ptb/style" media="(min-width: 768px)"></style>`
    )

    t.is(style, "HTMLStyleElement")
    t.is(actual, expect)
  }
)

ava.serial(
  "given URL '/c', verify returned contents (1)",
  async (t) => {
    await p.goto("http://localhost:7000/c", {
      "waitUntil": "networkidle0"
    })

    const actual = await p.content()

    const expect = httpContent(
      `<style data-creator="@ptb/style" media="(min-width: 768px)">.c{gap:1px}</style>`
    )

    t.is(actual, expect)
  }
)

ava.serial(
  "given URL '/c', should create additional style element (2)",
  async (t) => {
    await p.goto("http://localhost:7000/c", {
      "waitUntil": "networkidle0"
    })

    const style = await p
      .evaluateHandle(getStyleElement)
      .then((el) => el._remoteObject.className)

    const actual = await p.content()

    const expect = httpContent(
      `<style data-creator="@ptb/style" media="(min-width: 768px)">.c{gap:1px}</style><style data-creator="@ptb/style"></style>`
    )

    t.is(style, "HTMLStyleElement")
    t.is(actual, expect)
  }
)

ava.serial(
  "given URL '/c', should re-use existing style element (3)",
  async (t) => {
    await p.goto("http://localhost:7000/c", {
      "waitUntil": "networkidle0"
    })

    const style = await p
      .evaluateHandle(getStyleElement, "(min-width: 768px)")
      .then((el) => el._remoteObject.className)

    const actual = await p.content()

    const expect = httpContent(
      `<style data-creator="@ptb/style" media="(min-width: 768px)">.c{gap:1px}</style>`
    )

    t.is(style, "HTMLStyleElement")
    t.is(actual, expect)
  }
)
