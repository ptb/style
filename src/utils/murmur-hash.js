/*
  eslint-disable
    no-bitwise,
    no-mixed-operators,
    no-plusplus
 */

/**
  Converts `string` to unique hash identifier string.
  JS Implementation of MurmurHash3 (r136) (as of May 20, 2011).

  @param {string} string
  - The string on convert.

  @param {number} seed
  - Positive integer only.

  @returns {string}
    The string hash identifier.

  @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>

  @see https://github.com/aappleby/smhasher

  @author <a href="mailto:gary.court@gmail.com">Gary Court</a>

  @see https://github.com/garycourt/murmurhash-js

  @copyright 2011 Gary Court

  @license MIT
 */

export function murmurHash (string = "", seed = 4) {
  const remainder = string.length & 3
  const bytes = string.length - remainder
  const c1 = 0xcc9e2d51
  const c2 = 0x1b873593

  let h1 = seed
  let i = 0

  let h1b, k1

  while (i < bytes) {
    k1 =
      (string.charCodeAt(i) & 0xff) |
      ((string.charCodeAt(++i) & 0xff) << 8) |
      ((string.charCodeAt(++i) & 0xff) << 16) |
      ((string.charCodeAt(++i) & 0xff) << 24)
    ++i

    k1 =
      ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) &
      0xffffffff
    k1 = (k1 << 15) | (k1 >>> 17)
    k1 =
      ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) &
      0xffffffff

    h1 ^= k1
    h1 = (h1 << 13) | (h1 >>> 19)
    h1b =
      ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) &
      0xffffffff
    h1 =
      (h1b & 0xffff) +
      0x6b64 +
      ((((h1b >>> 16) + 0xe654) & 0xffff) << 16)
  }

  k1 = 0

  switch (remainder) {
    case 3:
      k1 ^= (string.charCodeAt(i + 2) & 0xff) << 16
      break
    case 2:
      k1 ^= (string.charCodeAt(i + 1) & 0xff) << 8
      break
    case 1:
      k1 ^= string.charCodeAt(i) & 0xff

      k1 =
        ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) &
        0xffffffff
      k1 = (k1 << 15) | (k1 >>> 17)
      k1 =
        ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) &
        0xffffffff
      h1 ^= k1
  }

  h1 ^= string.length

  h1 ^= h1 >>> 16
  h1 =
    ((h1 & 0xffff) * 0x85ebca6b +
      ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) &
    0xffffffff
  h1 ^= h1 >>> 13
  h1 =
    ((h1 & 0xffff) * 0xc2b2ae35 +
      ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) &
    0xffffffff
  h1 ^= h1 >>> 16

  return (h1 >>> 0).toString(36)
}
