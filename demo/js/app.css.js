export const classNames = {
  "radio": "duh7by osdi9w",
  "tab":
    "or60tq or63dt ornd3m orzjoi or77o3 orf446 or3973 orj76e or0lw5 orhrdy orotkq orune2 orzboi or4oxa org1n2 orh3ca",
  "tablist": "or4bdg orhsb6 or7dra orb8h7 ornp47",
  "tabpanel": "",
  "tabs": "hd319e"
}

export const style = {
  "main": {
    "&": {
      "gridColumn": "1/2",
      "gridRow": "1/6"
    }
  },
  "radio": {
    "%radio": true
  },
  "root": {
    "&": {
      "display": "grid",
      "gap": 8,
      "p": 8
    },
    "*,*::after,*::before": {
      "boxSizing": "border-box"
    },
    "@media (maxWidth:768px)": {
      "display": "block"
    },
    "body": {
      "m": 0
    },
    "gridTemplateColumns": "1fr 1fr"
  },
  "tab": {
    "&": {
      "&:hover,&:focus,&:active": {
        "outline": "none"
      },
      "&[aria-selected=false]": {
        "cursor": "pointer"
      },
      "&[aria-selected=true]": {
        "backgroundImage":
          "linear-gradient(hsl(95,20%,60%), hsl(95,20%,60%))",
        "fontWeight": 700
      },
      "[aria-orientation=horizontal] &": {
        "&:hover,&:focus,&:active,&[aria-selected=true]": {
          "backgroundSize": "100% 3px"
        },
        "backgroundPosition": "50% 100%",
        "backgroundSize": "0 3px"
      },
      "[aria-orientation=vertical] &": {
        "&:hover,&:focus,&:active,&[aria-selected=true]": {
          "backgroundSize": "3px 100%"
        },
        "backgroundPosition": "0 50%",
        "backgroundSize": "3px 0"
      },
      "backgroundImage":
        "linear-gradient(hsl(95,20%,80%), hsl(95,20%,80%))",
      "backgroundRepeat": "no-repeat",
      "display": "inline-block",
      "mx": 8,
      "my": 2,
      "px": 16,
      "py": 8,
      "transition": "background-size .2s ease-in-out",
      "userSelect": "none"
    }
  },
  "tablist": {
    "&": {
      "&[aria-orientation=horizontal],[aria-orientation=horizontal] &": {
        "flexDirection": "row",
        "justifyContent": "center"
      },
      "&[aria-orientation=vertical],[aria-orientation=vertical] &": {
        "flexDirection": "column"
      },
      "display": "flex",
      "listStyle": "none",
      "pl": 0
    }
  },
  "tabpanel": {
    "%radio:not(:checked) + [role=tabpanel]": {
      "display": "none"
    }
  },
  "tabs": {
    "gridColumn": "2/3"
  }
}
