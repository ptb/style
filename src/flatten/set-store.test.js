import ava from "ava"

import { getType, setStore, store } from "../index.js"

ava.serial("given undefined arguments", (t) => {
  // @ts-ignore
  setStore(undefined)

  t.is(store.get(undefined), undefined)
})

ava.serial("given media argument", (t) => {
  const media = "(minWidth:768px)"

  t.is(getType(store.get(media)), "Undefined")

  setStore(media)

  t.is(getType(store.get(media)), "Map")
})

ava.serial("given media and group arguments", (t) => {
  const media = "(minWidth:768px)"
  const group = "AbC-dEf-GhI-jKl"

  t.is(getType(store.get(media).get(group)), "Undefined")

  setStore(media, group)

  t.is(getType(store.get(media).get(group)), "Map")
})
