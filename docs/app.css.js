import { css } from "@ptb/style/macro"

export default {
  "$mono": css({
    "fontFamily": [
      {
        "fontFamily": "Source Code Pro",
        "fontStyle": "normal",
        "fontWeight": 400,
        "src":
          "url('../fonts/source-code-pro-400.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Code Pro",
        "fontStyle": "italic",
        "fontWeight": 400,
        "src":
          "url('../fonts/source-code-pro-400i.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Code Pro",
        "fontStyle": "normal",
        "fontWeight": 700,
        "src":
          "url('../fonts/source-code-pro-700.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Code Pro",
        "fontStyle": "italic",
        "fontWeight": 700,
        "src":
          "url('../fonts/source-code-pro-700i.woff2') format('woff2')"
      }
    ]
  }),
  "$sans": css({
    "fontFamily": [
      {
        "fontFamily": "Source Sans Pro",
        "fontStyle": "normal",
        "fontWeight": 400,
        "src":
          "url('../fonts/source-sans-pro-400.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Sans Pro",
        "fontStyle": "italic",
        "fontWeight": 400,
        "src":
          "url('../fonts/source-sans-pro-400i.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Sans Pro",
        "fontStyle": "normal",
        "fontWeight": 700,
        "src":
          "url('../fonts/source-sans-pro-700.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Sans Pro",
        "fontStyle": "italic",
        "fontWeight": 700,
        "src":
          "url('../fonts/source-sans-pro-700i.woff2') format('woff2')"
      }
    ]
  }),
  "$serif": css({
    "fontFamily": [
      {
        "fontFamily": "PT Serif",
        "fontStyle": "normal",
        "fontWeight": 400,
        "src": "url('../fonts/pt-serif-400.woff2') format('woff2')"
      },
      {
        "fontFamily": "PT Serif",
        "fontStyle": "italic",
        "fontWeight": 400,
        "src": "url('../fonts/pt-serif-400i.woff2') format('woff2')"
      },
      {
        "fontFamily": "PT Serif",
        "fontStyle": "normal",
        "fontWeight": 700,
        "src": "url('../fonts/pt-serif-700.woff2') format('woff2')"
      },
      {
        "fontFamily": "PT Serif",
        "fontStyle": "italic",
        "fontWeight": 700,
        "src": "url('../fonts/pt-serif-700i.woff2') format('woff2')"
      }
    ]
  }),
  ":root": css({
    "$scrollbarX": {
      "&::WebkitScrollbar": {
        "bg": "transparent",
        "height": 1
      },
      "&::WebkitScrollbarThumb": {
        "bg": "hsl(var(--hue),var(--sat),25%)"
      },
      "&::WebkitScrollbarTrack": {
        "bg": "hsl(var(--hue),var(--sat),20%)"
      },
      "overflowX": "auto",
      "scrollbarWidth": "thin"
    },
    "$unstyle": {
      "a": {
        "color": "inherit",
        "textDecoration": "none"
      },
      "h": {
        "marginBlockEnd": 0,
        "marginBlockStart": 0
      },
      "ul": {
        "listStyleType": "none",
        "marginBlockEnd": 0,
        "marginBlockStart": 0,
        "paddingInlineStart": 0
      }
    },
    "*,*::after,*::before": {
      "boxSizing": "inherit"
    },
    ":root": {
      "--hue": "240",
      "--icon-size": "4.4rem",
      "--mono": "Source Code Pro,monospace",
      "--sans": "Source Sans Pro,sans-serif",
      "--sat": "5%",
      "--serif": "PT Serif,serif",
      "--side-width": "14em",
      "bg": "hsl(var(--hue),var(--sat),15%)",
      "boxSizing": "border-box",
      "color": "hsl(var(--hue),var(--sat),75%)",
      "fontSize": "62.5%",
      "WebkitTapHighlightColor": "transparent",
      "WebkitTextSizeAdjust": "100%"
    },
    "@supports (WebkitOverflowScrolling:touch)": {
      ":where(input)": {
        "fontSize": "1.6rem"
      }
    },
    "body": {
      "fontSize": "1.8rem",
      "m": 0
    },
    "body,#root": {
      "bg": "inherit"
    }
  }),
  "blur": css({
    "Md": {
      "display": "none"
    },
    "Sm": {
      "#menu:checked ~ &": {
        "opacity": 1,
        "transform": "translateX(0)",
        "zIndex": 1
      },
      "#menu:not(:checked) ~ &": {
        "opacity": 0,
        "transform":
          "translateX(calc((var(--side-width) * -1) + var(--icon-size)))",
        "zIndex": -1
      },
      "&": {
        "backdropFilter": "blur(2px)",
        "bg": "hsla(var(--hue),var(--sat),10%,.1)",
        "gridArea": "main",
        "transitionDuration": "1s",
        "transitionProperty": "opacity,transform",
        "WebkitBackdropFilter": "blur(2px)",
        "width": "calc(var(--viewport-width, 100vw) - var(--icon-size))"
      }
    }
  }),
  "code": css({
    "bg": "hsl(var(--hue),var(--sat),25%)",
    "fontFamily": "var(--mono)"
  }),
  "foot": css({
    "&": {
      "alignItems": "center",
      "backgroundPosition":
        "calc((var(--icon-size) - (var(--icon-size) * 0.6)) / 2)",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "calc(var(--icon-size) * 0.6)",
      "borderColor": "hsl(var(--hue),var(--sat),25%)",
      "borderTop": "1px solid",
      "color": "hsl(var(--hue),var(--sat),70%)",
      "cursor": "default",
      "display": "flex",
      "fontFamily": "var(--sans)",
      "fontWeight": 700,
      "gridArea": "foot",
      "pl": "var(--icon-size)",
      "userSelect": "none"
    },
    "backgroundImage":
      "url(\"data:image/svg+xml,%3csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m40 112c20-160 112-68 20-40-28 8.5-60-6-24-58' fill='none' stroke='hsl(240%2c10%25%2c80%25)' stroke-width='24'/%3e%3c/svg%3e\")"
  }),
  "grid": css({
    "&": {
      "bg": "inherit",
      "display": "grid",
      "gridTemplateAreas": "'head head' 'side main' 'foot main'",
      "gridTemplateColumns": "var(--side-width) 1fr",
      "gridTemplateRows":
        "var(--icon-size) calc(var(--viewport-height, 100vh) - var(--icon-size) - var(--icon-size)) var(--icon-size)",
      "overflowX": "hidden"
    }
  }),
  "h1": css([
    {
      "&": {
        "$unstyle.h": true
      }
    },
    {
      "&": {
        "fontFamily": "var(--sans)",
        "fontSize": "2.4rem"
      }
    }
  ]),
  "head": css({
    "&": {
      "alignItems": "center",
      "borderBottom": "1px solid",
      "borderColor": "hsl(var(--hue),var(--sat),25%)",
      "display": "flex",
      "gridArea": "head",
      "width": "var(--viewport-width, 100vw)"
    }
  }),
  "heading": css({
    "&": {
      "alignItems": "center",
      "cursor": "default",
      "display": "flex",
      "fontFamily": "var(--sans)",
      "mb": 0,
      "mt": "1.8rem",
      "p": ".7rem",
      "userSelect": "none"
    },
    "Sm": {
      "display": "none"
    }
  }),
  "hide": css({
    "display": "none"
  }),
  "iframe": css({
    "&": {
      "borderWidth": 0,
      "height": "calc(var(--viewport-height, 100vh) * .6)",
      "outline": "none",
      "resize": "both",
      "width": "100%"
    }
  }),
  "link": css([
    {
      "&": {
        "$unstyle.a": true
      }
    }
  ]),
  "logo": css([
    {
      "&": {
        "$unstyle.a": true
      }
    },
    {
      "&": {
        "color": "hsl(var(--hue),var(--sat),85%)"
      },
      "&::before": {
        "color": "hsl(var(--hue),var(--sat),65%)",
        "content": "'@'"
      },
      "&:hover,&:hover::before": {
        "color": "hsl(var(--hue),var(--sat),95%)"
      }
    }
  ]),
  "main": css({
    "&": {
      "bg": "inherit",
      "borderColor": "hsl(var(--hue),var(--sat),25%)",
      "borderLeft": "1px solid",
      "fontFamily": "var(--serif)",
      "gridArea": "main",
      "overflowY": "auto"
    },
    "Sm": {
      "#menu:checked ~ &": { "transform": "translateX(0)" },
      "#menu:not(:checked) ~ &": {
        "transform":
          "translateX(calc((var(--side-width) * -1) + var(--icon-size)))"
      },
      "&": {
        "transitionDuration": "1s",
        "transitionProperty": "transform",
        "width": "calc(var(--viewport-width, 100vw) - var(--icon-size))"
      }
    }
  }),
  "menu": css({
    "&": {
      "backgroundPosition":
        "calc((var(--icon-size) - (var(--icon-size) * 0.6)) / 2)",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "calc(var(--icon-size) * 0.6)",
      "cursor": "pointer",
      "minHeight": "var(--icon-size)",
      "minWidth": "var(--icon-size)",
      "pl": "var(--icon-size)"
    },
    "backgroundImage": `url("data:image/svg+xml,%3csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath d='M24 60h72' id='a' stroke='hsl(240%2c15%25%2c80%25)' stroke-width='8'/%3e%3cuse transform='translate(0 -28)' xlink:href='%23a'/%3e%3cuse transform='translate(0 28)' xlink:href='%23a'/%3e%3c/svg%3e")`
  }),
  "radio": css({
    "display": "none"
  }),
  "side": css({
    "gridArea": "side",
    "overflowY": "auto"
  }),
  "sublist": css([
    {
      "&": {
        "$unstyle.ul": true
      }
    },
    {
      "&[aria-orientation=vertical],[aria-orientation=vertical] &": {
        "flexDirection": "column"
      },
      "display": "flex"
    }
  ]),
  "tab": css({
    "&": {
      "alignItems": "center",
      "backgroundPosition":
        "calc((var(--icon-size) - (var(--icon-size) * 0.5)) / 2)",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "calc(var(--icon-size) * 0.5)",
      "display": "flex",
      "fontFamily": "var(--sans)",
      "height": "var(--icon-size)",
      "transitionDuration": ".1s",
      "transitionProperty": "background-position,background-size",
      "transitionTimingFunction": "ease-in-out",
      "userSelect": "none"
    },
    "&:hover,&:focus,&:active": {
      "color": "hsl(var(--hue),var(--sat),90%)",
      "outline": "none"
    },
    "&[aria-selected=false]": {
      "cursor": "pointer"
    },
    "&[aria-selected=true]": {
      "color": "hsl(var(--hue),var(--sat),90%)",
      "fontWeight": 700
    }
  }),
  "tablist": css([
    {
      "&": {
        "$unstyle.ul": true
      }
    },
    {
      "&[aria-orientation=vertical],[aria-orientation=vertical] &": {
        "flexDirection": "column"
      },
      "display": "flex"
    }
  ]),
  "tabpanel": css({
    "&": {
      "outline": "none",
      "p": 8
    },
    "input[name=toc]:not(:checked) + &": {
      "display": "none"
    }
  })
}
