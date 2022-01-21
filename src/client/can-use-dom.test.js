import ava from "ava"
import puppeteer from "puppeteer"

import { canUseDom } from "../index.js"

ava("given node environment", (t) => {
  const actual = canUseDom()

  const expect = false

  t.is(actual, expect)
})

ava("given browser environment", async (t) => {
  /** @type {import ("puppeteer").Browser} */
  const b = await puppeteer.launch()

  /** @type {import ("puppeteer").Page} */
  const p = await b.newPage()

  try {
    const actual = await p.evaluate(canUseDom)

    const expect = true

    t.is(actual, expect)
  } finally {
    await p.close()
  }
})
