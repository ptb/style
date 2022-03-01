/*
  eslint-disable
    consistent-return,
    max-lines-per-function
 */

import { canUseDom, get, isStr, toPairs } from "../index.js"
import { useCallback, useEffect, useState } from "./jsx-runtime"

/**
  Use the URL location to store a value in addition to a React hook.

  @param {string} key
  - The string labelling the value in the query string or hash fragment.

  @param {boolean} [isSearch]
  - If `true`, then use query string `?` to store param value.
  - If `false`, then use hash fragment `#` to store param value.

  @returns {[string, (value: string) => void]}
    Returns a stateful value, and a function to update it.
 */

export function useParam (key, isSearch) {
  /**
    Convert key/value pairs in `location.hash` to an object.

    @returns {Record<string, string>}
      Object containing key/value pairs in `location.hash`.
   */

  const getParams = useCallback(
    function getParams () {
      if (canUseDom() && window.location) {
        if (isSearch) {
          /** @type {Record<string, string>} */
          const params = {}

          for (const [k, v] of new URLSearchParams(
            window.location.search
          )) {
            params[k] = v
          }

          return params
        }

        /* eslint-disable-next-line compat/compat */
        return new URL(window.location.href).hash
          .slice(1)
          .split("&")
          .reduce(
            /**
          Convert key/value pairs in `location.hash` to an object.

          @param {Record<string, string>} items
          - Object containing key/value pairs in `location.hash`.

          @param {string} item
          - String key/value pair.

          @returns {Record<string, string>}
            Object containing key/value pairs in `location.hash`.
         */

            function (items, item) {
              if (item) {
                const [k, v] = item.split("=")

                if (isStr(k)) {
                  items[k] = isStr(v) ? v : ""
                }
              }

              return items
            },
            {}
          )
      }

      return {}
    },
    [isSearch]
  )

  /**
    Get the current `value` of `key` from `location.hash`.

    @returns {string}
      Current `value` of `key` from `location.hash`.
   */

  const getInitial = useCallback(
    function getInitial () {
      return get(getParams(), key, "")
    },
    [getParams, key]
  )

  const [param, setInitial] = useState(getInitial())

  /**
    Get existing key/value pairs from `location.hash`, update
    `key` with `value`, and set key/value pairs in `location.hash`.

    @param {string} input
    - Updated value.

    @returns {void}
   */

  function setParam (input) {
    const hash = toPairs({ ... getParams(), [key]: input })
      .reduce(
        /**
          Join existing key/value pairs from `location.hash`, update
          `key` with `value`.

          @param {string[]} items
          - Array of strings containing key/value pairs.

          @param {[string, string]} item
          - Tuple of strings containing key/value pair.

          @returns {string[]}
            Array of strings containing the key/value pairs joined
          with an `=` character.
         */

        function (items, [k, v]) {
          return items.concat([k, v].join("="))
        },
        []
      )
      .join("&")

    if (isSearch) {
      /* eslint-disable-next-line compat/compat */
      const url = new URL(window.location.href)

      url.searchParams.set(key, input)

      window.history.replaceState(null, "", url)

      setInitial(input)
    } else {
      window.history.pushState(null, "", `#${hash}`)
    }
  }

  /**
    Update `location.hash` when `hashchange` event is triggered.

    @returns {void}
   */

  const updInitial = useCallback(
    function updInitial () {
      setInitial(getInitial())
    },
    [getInitial]
  )

  useEffect(

    // @ts-ignore
    function () {
      if (!isSearch) {
        window.addEventListener("hashchange", updInitial)

        return function () {
          window.removeEventListener("hashchange", updInitial)
        }
      }
    },
    [isSearch, updInitial]
  )

  return [param, setParam]
}

export default useParam
