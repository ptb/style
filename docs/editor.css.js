import { css } from "@ptb/style/macro"

export default {
  "$editor": css({
    "$editor": {
      "borderWidth": 0,
      "display": "block",
      "fontFamily": "var(--mono)",
      "fontSize": "1.6rem",
      "gridArea": "1/1",
      "hyphens": "none",
      "lineHeight": 1.5,
      "m": 0,
      "outline": "none",
      "tabSize": 2,
      "textAlign": "left",
      "whiteSpace": "pre-wrap",
      "wordBreak": "normal",
      "wordSpacing": "normal",
      "wordWrap": "normal"
    }
  }),
  "code": css({
    "&": {
      "$editor": true
    }
  }),
  "div": css({
    "&": {
      "bg": "hsl(var(--hue),var(--sat),10%)",
      "borderRadius": ".8rem",
      "display": "grid"
    }
  }),
  "pre": css([
    {
      "&": {
        "$editor": true
      }
    },
    {
      "&": {
        "color": "hsl(var(--hue),var(--sat),80%)",
        "overflowX": "hidden",
        "overflowY": "auto",
        "p": "1.2rem",
        "userSelect": "none"
      },
      ".line-highlight": {
        ".line-numbers &": {
          "mt": "1rem"
        },
        "bg": "hsla(var(--hue),30%,50%,.2)",
        "left": 0,
        "lineHeight": "inherit",
        "mt": "1.8rem",
        "padding": "inherit 0",
        "pointerEvents": "none",
        "position": "absolute",
        "right": 0,
        "whiteSpace": "pre-wrap"
      },
      ".line-numbers .line-numbers-rows": {
        "borderRight": "1px solid hsl(var(--hue),var(--sat),25%)",
        "fontSize": "100%",
        "left": "-3.8em",
        "letterSpacing": -1,
        "pointerEvents": "none",
        "position": "absolute",
        "top": 0,
        "userSelect": "none",
        "width": "3em"
      },
      ".line-numbers-rows > span": {
        "counterIncrement": "linenumber",
        "display": "block"
      },
      ".line-numbers-rows > span:before": {
        "color": "#999",
        "content": "counter(linenumber)",
        "display": "block",
        "pr": ".8em",
        "textAlign": "right"
      },
      ".token": {
        "& a": {
          "color": "inherit"
        },
        "&.atrule,&.builtin,&.important,&.keyword,&.selector": {
          "color": "#69c"
        },
        "&.attr-name,&.deleted,&.namespace,&.tag": {
          "color": "#e5c07b"
        },
        "&.attr-value,&.attr-value>.url-link,&.char,&.regex,&.string,&.variable": {
          "color": "#9c9"
        },
        "&.attr-value:not(.attr-equals,.punctuation)": {
          "color": "#9c9"
        },
        "&.block-comment,&.cdata,&.comment,&.doctype,&.prolog": {
          "color": "#7f848e",
          "fontStyle": "italic"
        },
        "&.bold,&.important": { "fontWeight": 700 },
        "&.boolean,&.function,&.number": { "color": "#c96" },
        "&.class-name,&.constant,&.property,&.symbol": {
          "color": "#f99"
        },
        "&.entity": { "cursor": "help" },
        "&.entity,&.operator,&.url": { "color": "#67cdcc" },
        "&.function-name": { "color": "#61afef" },
        "&.inserted": { "color": "green" },
        "&.italic": { "fontStyle": "italic" },
        "&.punctuation": { "color": "#abb2bf" }
      },
      "pre[class*=language-].line-numbers": {
        "counterReset": "linenumber",
        "pl": "3.8em",
        "position": "relative"
      },
      "pre[class*=language-].line-numbers > code": {
        "position": "relative",
        "whiteSpace": "inherit"
      },
      "pre[id].linkable-line-numbers span.line-numbers-rows": {
        "pointer-events": "all"
      },
      "pre[id].linkable-line-numbers span.line-numbers-rows > span:before": {
        "cursor": "pointer"
      },
      "pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "bg": "rgba(128,128,128,.2)"
      }
    }
  ]),
  "textarea": css([
    {
      "&": {
        "$editor": true
      }
    },
    {
      "&": {
        "bg": "transparent",
        "caretColor": "hsl(var(--hue),var(--sat),85%)",
        "color": "transparent",
        "overflowX": "hidden",
        "overflowY": "auto",
        "p": "1.2rem",
        "resize": "none",
        "zIndex": 1
      },
      ".line-numbers + &": {
        "pl": "calc(3em + 12px)"
      }
    }
  ])
}
