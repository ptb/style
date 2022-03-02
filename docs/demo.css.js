import { css } from "@ptb/style/macro"

export default {
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
  "grid": css({
    "&": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gridTemplateRows":
        "var(--icon-size) calc(var(--viewport-height, 100vh) - var(--icon-size))"
    }
  }),
  "radio": css({
    "display": "none"
  }),
  "sublist": css([
    {
      "&": {
        "$unstyle.ul": true
      }
    },
    {
      "&": {
        "display": "flex",
        "flexDirection": "row"
      }
    }
  ]),
  "tab": css({
    "&": {
      "alignItems": "center",
      "borderRadius": 6,
      "display": "flex",
      "flexGrow": 1,
      "fontFamily": "var(--sans)",
      "fontSize": "1.4rem",
      "m": ".5rem",
      "userSelect": "none"
    },
    "&:focus": {
      "boxShadow": "0 0 3px rgba(0,0,0,.4)",
      "outline": "none"
    },
    "&:hover,&:focus,&:active": {
      "bg": "hsl(var(--hue),var(--sat),20%)",
      "color": "hsl(var(--hue),var(--sat),90%)"
    },
    "&[aria-selected=false]": {
      "cursor": "pointer"
    },
    "&[aria-selected=true]": {
      "bg": "hsl(var(--hue),var(--sat),24%)",
      "color": "hsl(var(--hue),var(--sat),90%)"
    }
  }),
  "tablist": css([
    {
      "&": {
        "$scrollbarX": true,
        "$unstyle.ul": true
      }
    },
    {
      "&": {
        "borderBottom": "1px solid hsl(var(--hue),var(--sat),25%)",
        "display": "grid",
        "gridArea": "1/1/2/3",
        "gridTemplateColumns": "1fr 1fr"
      },
      "& > :first-child": {
        "alignSelf": "center",
        "gridArea": "1/1/2/2"
      },
      "& > :last-child": {
        "alignSelf": "center",
        "gridArea": "1/2/2/3",
        "justifySelf": "center"
      }
    }
  ]),
  "tabpanel": css({
    "&": {
      "overflowY": "auto",
      "p": 8
    },
    "&:focus": {
      "outline": "none"
    },
    "input[name=t]:not(:checked) + &": {
      "display": "none"
    },
    "Md": {
      "#editor-panel": {
        "display": "block",
        "gridArea": "2/1/3/2",
        "pr": 4
      },
      "&": {
        "gridArea": "2/2/3/3",
        "pl": 4
      }
    },
    "Sm": {
      "&": {
        "gridArea": "2/1/3/3"
      }
    }
  })
}
