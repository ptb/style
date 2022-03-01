import { useCallback, useEffect } from "./jsx-runtime"

/**
  React hook to update the CSS custom properties `--viewport-height` and
  `--viewport-width` when the window is resized.

  Alternatively, an object with properties `height` and `width` can be
  used with the CSS custom properties to update can be provided instead.

  @param {object} [props]
  - React hook inputs.
 
  @param {string} props.height
  - CSS custom property name to update when viewport height changes.
 
  @param {string} props.width
  - CSS custom property name to update when viewport width changes.
 
  @returns {{ "height": string, "width": string }}
    CSS custom property names updated when viewport changes.
 */

export function useVisualViewport (
  { height, width } = {
    "height": "--viewport-height",
    "width": "--viewport-width"
  }
) {
  /**
    Update the CSS custom properties `--viewport-height` and
    `--viewport-width` when the window is resized.

    @returns {void}
   */

  const updateViewport = useCallback(
    function updateViewport () {
      if (
        typeof window !== "undefined" &&
        typeof document !== "undefined" &&
        typeof document.documentElement !== "undefined"
      ) {
        const doc = document.documentElement.style

        if (typeof window.visualViewport === "undefined") {
          doc.setProperty(height, `${window.innerHeight}px`)

          doc.setProperty(width, `${window.innerWidth}px`)
        } else {
          doc.setProperty(height, `${window.visualViewport.height}px`)

          doc.setProperty(width, `${window.visualViewport.width}px`)
        }
      }
    },
    [height, width]
  )

  useEffect(
    /* @ts-ignore */ /* eslint-disable-next-line consistent-return */
    function () {
      if (typeof window !== "undefined") {
        updateViewport()

        if (typeof window.visualViewport === "undefined") {
          window.addEventListener("resize", updateViewport)

          return function () {
            window.removeEventListener("resize", updateViewport)
          }
        }

        window.visualViewport.addEventListener(
          "resize",
          updateViewport
        )

        return function () {
          window.visualViewport.removeEventListener(
            "resize",
            updateViewport
          )
        }
      }
    },
    [updateViewport]
  )

  return { height, width }
}
