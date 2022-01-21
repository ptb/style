/*
  eslint-disable
    no-bitwise,
    no-plusplus
 */

/**
  Generate URL-friendly unique ID. This method uses the non-secure
  predictable random generator with bigger collision probability.

  @returns {string}
    A random 21 character string.

  @author <a href="mailto:andrey@sitnik.ru">Andrey Sitnik</a>

  @see https://github.com/ai/nanoid/blob/main/non-secure/index.js

  @copyright 2017 Andrey Sitnik

  @license MIT
 */

export function nanoid () {
  const alnum =
    "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"

  let id = ""
  let i = 21

  while (i--) {
    id += alnum[(Math.random() * 64) | 0]
  }

  return id
}
