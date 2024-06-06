import {
  i as g,
  n as c,
  b,
  t as f,
  s as m,
  x as l,
  o as P,
  l as it,
  a as rt,
  e as h,
  c as Fe,
} from "./if-defined-7dNzjgJW.js";
import {
  u as V,
  F as nt,
  p as D,
  q as k,
  f as W,
  e as O,
  W as x,
  h as I,
  i as u,
  P as A,
  j,
  C as L,
} from "./index-CatYzjNY.js";
var qe = Object.defineProperty,
  ke = Object.getOwnPropertySymbols,
  Ke = Object.prototype.hasOwnProperty,
  Ye = Object.prototype.propertyIsEnumerable,
  $e = (t, e, a) =>
    e in t
      ? qe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a),
  Lt = (t, e) => {
    for (var a in e || (e = {})) Ke.call(e, a) && $e(t, a, e[a]);
    if (ke) for (var a of ke(e)) Ye.call(e, a) && $e(t, a, e[a]);
    return t;
  };
function Qe() {
  var t;
  const e = (t = V.state.themeMode) != null ? t : "dark",
    a = {
      light: {
        foreground: {
          1: "rgb(20,20,20)",
          2: "rgb(121,134,134)",
          3: "rgb(158,169,169)",
        },
        background: {
          1: "rgb(255,255,255)",
          2: "rgb(241,243,243)",
          3: "rgb(228,231,231)",
        },
        overlay: "rgba(0,0,0,0.1)",
      },
      dark: {
        foreground: {
          1: "rgb(228,231,231)",
          2: "rgb(148,158,158)",
          3: "rgb(110,119,119)",
        },
        background: {
          1: "rgb(20,20,20)",
          2: "rgb(39,42,42)",
          3: "rgb(59,64,64)",
        },
        overlay: "rgba(255,255,255,0.1)",
      },
    }[e];
  return {
    "--w3m-color-fg-1": a.foreground[1],
    "--w3m-color-fg-2": a.foreground[2],
    "--w3m-color-fg-3": a.foreground[3],
    "--w3m-color-bg-1": a.background[1],
    "--w3m-color-bg-2": a.background[2],
    "--w3m-color-bg-3": a.background[3],
    "--w3m-color-overlay": a.overlay,
  };
}
function Oe() {
  return {
    "--w3m-accent-color": "#3396FF",
    "--w3m-accent-fill-color": "#FFFFFF",
    "--w3m-z-index": "89",
    "--w3m-background-color": "#3396FF",
    "--w3m-background-border-radius": "8px",
    "--w3m-container-border-radius": "30px",
    "--w3m-wallet-icon-border-radius": "15px",
    "--w3m-wallet-icon-large-border-radius": "30px",
    "--w3m-wallet-icon-small-border-radius": "7px",
    "--w3m-input-border-radius": "28px",
    "--w3m-button-border-radius": "10px",
    "--w3m-notification-border-radius": "36px",
    "--w3m-secondary-button-border-radius": "28px",
    "--w3m-icon-button-border-radius": "50%",
    "--w3m-button-hover-highlight-border-radius": "10px",
    "--w3m-text-big-bold-size": "20px",
    "--w3m-text-big-bold-weight": "600",
    "--w3m-text-big-bold-line-height": "24px",
    "--w3m-text-big-bold-letter-spacing": "-0.03em",
    "--w3m-text-big-bold-text-transform": "none",
    "--w3m-text-xsmall-bold-size": "10px",
    "--w3m-text-xsmall-bold-weight": "700",
    "--w3m-text-xsmall-bold-line-height": "12px",
    "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
    "--w3m-text-xsmall-bold-text-transform": "uppercase",
    "--w3m-text-xsmall-regular-size": "12px",
    "--w3m-text-xsmall-regular-weight": "600",
    "--w3m-text-xsmall-regular-line-height": "14px",
    "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
    "--w3m-text-xsmall-regular-text-transform": "none",
    "--w3m-text-small-thin-size": "14px",
    "--w3m-text-small-thin-weight": "500",
    "--w3m-text-small-thin-line-height": "16px",
    "--w3m-text-small-thin-letter-spacing": "-0.03em",
    "--w3m-text-small-thin-text-transform": "none",
    "--w3m-text-small-regular-size": "14px",
    "--w3m-text-small-regular-weight": "600",
    "--w3m-text-small-regular-line-height": "16px",
    "--w3m-text-small-regular-letter-spacing": "-0.03em",
    "--w3m-text-small-regular-text-transform": "none",
    "--w3m-text-medium-regular-size": "16px",
    "--w3m-text-medium-regular-weight": "600",
    "--w3m-text-medium-regular-line-height": "20px",
    "--w3m-text-medium-regular-letter-spacing": "-0.03em",
    "--w3m-text-medium-regular-text-transform": "none",
    "--w3m-font-family":
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    "--w3m-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
    "--w3m-success-color": "rgb(38,181,98)",
    "--w3m-error-color": "rgb(242, 90, 103)",
    "--w3m-overlay-background-color": "rgba(0, 0, 0, 0.3)",
    "--w3m-overlay-backdrop-filter": "none",
  };
}
function Xe() {
  const { themeVariables: t } = V.state;
  return {
    "--w3m-background-image-url":
      t != null && t["--w3m-background-image-url"]
        ? `url(${t["--w3m-background-image-url"]})`
        : "none",
  };
}
const p = {
    getPreset(t) {
      return Oe()[t];
    },
    setTheme() {
      const t = document.querySelector(":root"),
        { themeVariables: e } = V.state;
      if (t) {
        const a = Lt(Lt(Lt(Lt({}, Qe()), Oe()), e), Xe());
        Object.entries(a).forEach(([r, o]) => t.style.setProperty(r, o));
      }
    },
    globalCss: g`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}`,
  },
  Je = g`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}button:disabled{opacity:.7}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}`;
var to = Object.defineProperty,
  eo = Object.getOwnPropertyDescriptor,
  bt = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? eo(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && to(e, a, o), o;
  };
let Y = class extends m {
  constructor() {
    super(...arguments),
      (this.icon = void 0),
      (this.label = ""),
      (this.loading = !1),
      (this.onClick = () => null);
  }
  render() {
    return l`<button data-testid="component-button-box" @click="${
      this.onClick
    }" .disabled="${!!this.loading}"><div>${
      this.loading
        ? l`<w3m-spinner size="${20}" color="fill"></w3m-spinner>`
        : l`${this.icon}`
    }</div><w3m-text variant="xsmall-regular" color="accent">${
      this.label
    }</w3m-text></button>`;
  }
};
(Y.styles = [p.globalCss, Je]),
  bt([c()], Y.prototype, "icon", 2),
  bt([c()], Y.prototype, "label", 2),
  bt([c()], Y.prototype, "loading", 2),
  bt([c()], Y.prototype, "onClick", 2),
  (Y = bt([h("w3m-box-button")], Y));
const oo = g`button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:active::after{background-color:var(--w3m-color-overlay)}.w3m-ghost,.w3m-ghost:active::after,.w3m-outline{background-color:transparent}.w3m-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}.w3m-ghost:hover::after{background-color:transparent}.w3m-ghost:hover{opacity:.5}}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}`;
var ao = Object.defineProperty,
  ro = Object.getOwnPropertyDescriptor,
  st = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ro(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ao(e, a, o), o;
  };
let G = class extends m {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.iconLeft = void 0),
      (this.iconRight = void 0),
      (this.onClick = () => null),
      (this.variant = "default");
  }
  render() {
    const t = {
      "w3m-icon-left": this.iconLeft !== void 0,
      "w3m-icon-right": this.iconRight !== void 0,
      "w3m-ghost": this.variant === "ghost",
      "w3m-outline": this.variant === "outline",
    };
    let e = "inverse";
    return (
      this.variant === "ghost" && (e = "secondary"),
      this.variant === "outline" && (e = "accent"),
      l`<button class="${P(t)}" data-testid="component-button" ?disabled="${
        this.disabled
      }" @click="${this.onClick}">${
        this.iconLeft
      }<w3m-text variant="small-regular" color="${e}"><slot></slot></w3m-text>${
        this.iconRight
      }</button>`
    );
  }
};
(G.styles = [p.globalCss, oo]),
  st([c()], G.prototype, "disabled", 2),
  st([c()], G.prototype, "iconLeft", 2),
  st([c()], G.prototype, "iconRight", 2),
  st([c()], G.prototype, "onClick", 2),
  st([c()], G.prototype, "variant", 2),
  (G = st([h("w3m-button")], G));
const io = g`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:active::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}}`;
var no = Object.defineProperty,
  lo = Object.getOwnPropertyDescriptor,
  Yt = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? lo(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && no(e, a, o), o;
  };
let ft = class extends m {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.variant = "primary");
  }
  render() {
    const t = { "w3m-secondary": this.variant === "secondary" };
    return l`<button ?disabled="${
      this.disabled
    }" data-testid="component-big-button" class="${P(
      t
    )}"><slot></slot></button>`;
  }
};
(ft.styles = [p.globalCss, io]),
  Yt([c()], ft.prototype, "disabled", 2),
  Yt([c()], ft.prototype, "variant", 2),
  (ft = Yt([h("w3m-button-big")], ft));
const so = g`:host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var co = Object.defineProperty,
  mo = Object.getOwnPropertyDescriptor,
  ho = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? mo(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && co(e, a, o), o;
  };
let Qt = class extends m {
  render() {
    return l`<div><slot></slot></div>`;
  }
};
(Qt.styles = [p.globalCss, so]), (Qt = ho([h("w3m-info-footer")], Qt));
const w = {
    CROSS_ICON: b`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_LOGO: b`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: b`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: b`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: b`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: b`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: b`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: b`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: b`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: b`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: b`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: b`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: b`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    HELP_ETH_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
    HELP_PAINTING_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
    HELP_CHART_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    HELP_KEY_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    HELP_USER_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
    HELP_LOCK_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
    HELP_COMPAS_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
    HELP_NOUN_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
    HELP_DAO_IMG: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    SEARCH_ICON: b`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    HELP_ICON: b`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
    WALLET_ICON: b`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
    NETWORK_PLACEHOLDER: b`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
    WALLET_PLACEHOLDER: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    TOKEN_PLACEHOLDER: b`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
    ACCOUNT_COPY: b`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
    ACCOUNT_DISCONNECT: b`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`,
    GLOBE_ICON: b`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
  },
  wo = g`.w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}@media(hover:hover){button:hover{background-color:var(--w3m-color-bg-2)}}`;
var po = Object.defineProperty,
  go = Object.getOwnPropertyDescriptor,
  Ie = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? go(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && po(e, a, o), o;
  };
let Tt = class extends m {
  constructor() {
    super(),
      (this.isHelp = !1),
      (this.unsubscribeRouter = void 0),
      (this.unsubscribeRouter = x.subscribe((t) => {
        this.isHelp = t.view === "Help";
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeRouter) == null || t.call(this);
  }
  onHelp() {
    x.push("Help");
  }
  logoTemplate() {
    var t;
    const e =
      (t = V.state.themeVariables) == null ? void 0 : t["--w3m-logo-image-url"];
    return e
      ? l`<img crossorigin="anonymous" src="${e}" data-testid="component-modal-backcard">`
      : w.WALLET_CONNECT_LOGO;
  }
  render() {
    const t = { "w3m-help-active": this.isHelp };
    return l`<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">${this.logoTemplate()}<div class="${P(
      t
    )}"><button @click="${this.onHelp}">${
      w.HELP_ICON
    }</button> <button @click="${D.close}">${
      w.CROSS_ICON
    }</button></div></div>`;
  }
};
(Tt.styles = [p.globalCss, wo]),
  Ie([f()], Tt.prototype, "isHelp", 2),
  (Tt = Ie([h("w3m-modal-backcard")], Tt));
const uo = g`main{padding:20px;padding-top:0;width:100%}`;
var vo = Object.defineProperty,
  bo = Object.getOwnPropertyDescriptor,
  fo = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? bo(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && vo(e, a, o), o;
  };
let Xt = class extends m {
  render() {
    return l`<main data-testid="component-modal-content"><slot></slot></main>`;
  }
};
(Xt.styles = [p.globalCss, uo]), (Xt = fo([h("w3m-modal-content")], Xt));
const xo = g`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
var yo = Object.defineProperty,
  Co = Object.getOwnPropertyDescriptor,
  ko = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Co(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && yo(e, a, o), o;
  };
let Jt = class extends m {
  render() {
    return l`<footer data-testid="component-modal-footer"><slot></slot></footer>`;
  }
};
(Jt.styles = [p.globalCss, xo]), (Jt = ko([h("w3m-modal-footer")], Jt));
const $o = g`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}`;
var Oo = Object.defineProperty,
  Io = Object.getOwnPropertyDescriptor,
  xt = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Io(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Oo(e, a, o), o;
  };
let Q = class extends m {
  constructor() {
    super(...arguments),
      (this.title = ""),
      (this.onAction = void 0),
      (this.actionIcon = void 0),
      (this.border = !1);
  }
  backBtnTemplate() {
    return l`<button class="w3m-back-btn" data-testid="component-header-back-button" @click="${x.goBack}">${w.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return l`<button class="w3m-action-btn" data-testid="component-header-action-button" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const t = { "w3m-border": this.border },
      e = x.state.history.length > 1,
      a = this.title
        ? l`<w3m-text variant="big-bold">${this.title}</w3m-text>`
        : l`<slot></slot>`;
    return l`<header class="${P(t)}">${
      e ? this.backBtnTemplate() : null
    } ${a} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
(Q.styles = [p.globalCss, $o]),
  xt([c()], Q.prototype, "title", 2),
  xt([c()], Q.prototype, "onAction", 2),
  xt([c()], Q.prototype, "actionIcon", 2),
  xt([c()], Q.prototype, "border", 2),
  (Q = xt([h("w3m-modal-header")], Q));
const Eo = {
    1: "692ed6ba-e569-459a-556a-776476829e00",
    42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
  },
  Ao = {
    ETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
    WETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
    AVAX: { icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00" },
    FTM: { icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00" },
    BNB: { icon: "93564157-2e8e-4ce7-81df-b264dbee9b00" },
    MATIC: { icon: "41d04d42-da3b-4453-8506-668cc0727900" },
    OP: { icon: "ab9c186a-c52f-464b-2906-ca59d760a400" },
    xDAI: { icon: "02b53f6a-e3d4-479e-1cb4-21178987d100" },
    EVMOS: { icon: "f926ff41-260d-4028-635e-91913fc28e00" },
    METIS: { icon: "3897a66d-40b9-4833-162f-a2c90531c900" },
    IOTX: { icon: "34e68754-e536-40da-c153-6ef2e7188a00" },
  },
  R = {
    externalWallets() {
      let t = W.client().getConnectors();
      return (t = t.filter((e) => e.id !== "injected")), t;
    },
    manualWallets() {
      var t, e;
      const { mobileWallets: a, desktopWallets: r } = L.state,
        o = (t = R.recentWallet()) == null ? void 0 : t.id,
        i = u.isMobile() ? a : r,
        n = i == null ? void 0 : i.filter((d) => o !== d.id);
      return (e = u.isMobile()
        ? n == null
          ? void 0
          : n.map(({ id: d, name: v, links: y }) => ({
              id: d,
              name: v,
              mobile: y,
              links: y,
            }))
        : n == null
        ? void 0
        : n.map(({ id: d, name: v, links: y }) => ({
            id: d,
            name: v,
            desktop: y,
            links: y,
          }))) != null
        ? e
        : [];
    },
    installedInjectedWallets() {
      if (!W.client().isInjectedProviderInstalled()) return [];
      const { namespace: t } = W.client(),
        { injectedWallets: e } = I.state;
      let a = e.filter(
        ({ injected: r }) =>
          !!r.some(
            (o) =>
              W.client().safeCheckInjectedProvider(o.injected_id) &&
              o.namespace === t
          )
      );
      return (
        a.length > 1 &&
          (a = a.filter(
            ({ injected: r }) =>
              !!r
                .map(({ injected_id: i }) => i)
                .every((i) => i !== "isMetaMask")
          )),
        a.length ? a : [{ name: "Browser", id: "browser", image_id: void 0 }]
      );
    },
    injectedWallets() {
      const { explorerExcludedWalletIds: t, explorerRecommendedWalletIds: e } =
          L.state,
        a = u.isMobile();
      if (t === "ALL" || a) return [];
      const { namespace: r } = W.client(),
        { injectedWallets: o } = I.state;
      return o.filter(({ id: i, injected: n }) => {
        const d = u.isArray(t) ? t : [],
          v = u.isArray(e) ? e : [];
        return !!n.some(
          (y) => y.namespace === r && !d.includes(i) && !v.includes(i)
        );
      });
    },
    recentWallet() {
      return s.getRecentWallet();
    },
    recomendedWallets(t = !1) {
      var e;
      const a = R.installedInjectedWallets().map(({ id: n }) => n),
        r = t || (e = R.recentWallet()) == null ? void 0 : e.id,
        o = [...a, r],
        { recomendedWallets: i } = I.state;
      return i.filter((n) => !o.includes(n.id));
    },
  },
  s = {
    MOBILE_BREAKPOINT: 600,
    W3M_RECENT_WALLET_INFO: "W3M_RECENT_WALLET_INFO",
    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
    WAGMI_WALLET: "wagmi.wallet",
    getShadowRootElement(t, e) {
      const a = t.renderRoot.querySelector(e);
      if (!a) throw new Error(`${e} not found`);
      return a;
    },
    getWalletIcon({ id: t, image_id: e }) {
      const { walletImages: a } = L.state;
      return a != null && a[t] ? a[t] : e ? I.getWalletImageUrl(e) : "";
    },
    getWalletName(t, e = !1) {
      return e && t.length > 8 ? `${t.substring(0, 8)}..` : t;
    },
    getChainIcon(t) {
      var e;
      const a = Eo[t],
        { projectId: r, chainImages: o } = L.state;
      return (e = o == null ? void 0 : o[t]) != null
        ? e
        : r && a
        ? I.getAssetImageUrl(a)
        : "";
    },
    getTokenIcon(t) {
      var e, a;
      const r = (e = Ao[t]) == null ? void 0 : e.icon,
        { projectId: o, tokenImages: i } = L.state;
      return (a = i == null ? void 0 : i[t]) != null
        ? a
        : o && r
        ? I.getAssetImageUrl(r)
        : "";
    },
    isMobileAnimation() {
      return window.innerWidth <= s.MOBILE_BREAKPOINT;
    },
    async preloadImage(t) {
      const e = new Promise((a, r) => {
        const o = new Image();
        (o.onload = a),
          (o.onerror = r),
          (o.crossOrigin = "anonymous"),
          (o.src = t);
      });
      return Promise.race([e, u.wait(3e3)]);
    },
    getErrorMessage(t) {
      return t instanceof Error ? t.message : "Unknown Error";
    },
    debounce(t, e = 500) {
      let a;
      return (...r) => {
        function o() {
          t(...r);
        }
        a && clearTimeout(a), (a = setTimeout(o, e));
      };
    },
    handleMobileLinking(t) {
      const { pairingUri: e } = A.state,
        { mobile: a, name: r } = t,
        o = a == null ? void 0 : a.native,
        i = a == null ? void 0 : a.universal;
      s.setRecentWallet(t);
      function n(d) {
        let v = "";
        o
          ? (v = u.formatUniversalUrl(o, d, r))
          : i && (v = u.formatNativeUrl(i, d, r)),
          u.openHref(v, "_self");
      }
      n(e);
    },
    handleAndroidLinking() {
      const { pairingUri: t } = A.state;
      u.setWalletConnectAndroidDeepLink(t), u.openHref(t, "_self");
    },
    async handleUriCopy() {
      try {
        const { pairingUri: t } = A.state;
        await navigator.clipboard.writeText(t),
          j.openToast("Link copied", "success");
      } catch {
        j.openToast("Failed to copy", "error");
      }
    },
    async handleConnectorConnection(t, e) {
      try {
        const { selectedChain: a } = O.state;
        await W.client().connectConnector(t, a == null ? void 0 : a.id),
          D.close();
      } catch (a) {
        console.error(a), e ? e() : j.openToast(s.getErrorMessage(a), "error");
      }
    },
    getCustomImageUrls() {
      const { chainImages: t, walletImages: e } = L.state,
        a = Object.values(t ?? {}),
        r = Object.values(e ?? {});
      return Object.values([...a, ...r]);
    },
    truncate(t, e = 8) {
      return t.length <= e
        ? t
        : `${t.substring(0, 4)}...${t.substring(t.length - 4)}`;
    },
    generateAvatarColors(t) {
      var e;
      const a = (e = t.match(/.{1,7}/g)) == null ? void 0 : e.splice(0, 5),
        r = [];
      a == null ||
        a.forEach((i) => {
          let n = 0;
          for (let v = 0; v < i.length; v += 1)
            (n = i.charCodeAt(v) + ((n << 5) - n)), (n = n & n);
          const d = [0, 0, 0];
          for (let v = 0; v < 3; v += 1) {
            const y = (n >> (v * 8)) & 255;
            d[v] = y;
          }
          r.push(`rgb(${d[0]}, ${d[1]}, ${d[2]})`);
        });
      const o = document.querySelector(":root");
      if (o) {
        const i = {
          "--w3m-color-av-1": r[0],
          "--w3m-color-av-2": r[1],
          "--w3m-color-av-3": r[2],
          "--w3m-color-av-4": r[3],
          "--w3m-color-av-5": r[4],
        };
        Object.entries(i).forEach(([n, d]) => o.style.setProperty(n, d));
      }
    },
    setRecentWallet(t) {
      try {
        localStorage.setItem(s.W3M_RECENT_WALLET_INFO, JSON.stringify(t));
      } catch {
        console.info("Unable to set recent wallet");
      }
    },
    getRecentWallet() {
      try {
        const t = localStorage.getItem(s.W3M_RECENT_WALLET_INFO);
        return t ? JSON.parse(t) : void 0;
      } catch {
        console.info("Unable to get recent wallet");
      }
    },
    caseSafeIncludes(t, e) {
      return t.toUpperCase().includes(e.toUpperCase());
    },
    openWalletExplorerUrl() {
      u.openHref(s.EXPLORER_WALLET_URL, "_blank");
    },
    getCachedRouterWalletPlatforms() {
      const {
          id: t,
          desktop: e,
          mobile: a,
          injected: r,
        } = u.getWalletRouterData(),
        o = R.installedInjectedWallets(),
        i = !!(r != null && r.length),
        n = o.some((H) => H.id === t),
        d = !!(e != null && e.native),
        v = !!(e != null && e.universal),
        y = !!(a != null && a.native) || !!(a != null && a.universal);
      return {
        isInjectedInstalled: n,
        isInjected: i,
        isDesktop: d,
        isMobile: y,
        isWeb: v,
      };
    },
    goToConnectingView(t) {
      x.setData({ Wallet: t });
      const e = u.isMobile(),
        {
          isDesktop: a,
          isWeb: r,
          isMobile: o,
          isInjectedInstalled: i,
        } = s.getCachedRouterWalletPlatforms();
      e
        ? i
          ? x.push("InjectedConnecting")
          : o
          ? x.push("MobileConnecting")
          : r
          ? x.push("WebConnecting")
          : x.push("InstallWallet")
        : i
        ? x.push("InjectedConnecting")
        : a
        ? x.push("DesktopConnecting")
        : r
        ? x.push("WebConnecting")
        : o
        ? x.push("MobileQrcodeConnecting")
        : x.push("InstallWallet");
    },
    getWagmiWalletType() {
      return localStorage.getItem(s.WAGMI_WALLET);
    },
  },
  jo = g`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
var Po = Object.defineProperty,
  Wo = Object.getOwnPropertyDescriptor,
  te = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Wo(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Po(e, a, o), o;
  };
let yt = class extends m {
  constructor() {
    super(),
      (this.view = x.state.view),
      (this.prevView = x.state.view),
      (this.unsubscribe = void 0),
      (this.oldHeight = "0px"),
      (this.resizeObserver = void 0),
      (this.unsubscribe = x.subscribe((t) => {
        this.view !== t.view && this.onChangeRoute();
      }));
  }
  firstUpdated() {
    (this.resizeObserver = new ResizeObserver(([t]) => {
      const e = `${t.contentRect.height}px`;
      this.oldHeight !== "0px" &&
        rt(this.routerEl, { height: [this.oldHeight, e] }, { duration: 0.2 }),
        (this.oldHeight = e);
    })),
      this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var t, e;
    (t = this.unsubscribe) == null || t.call(this),
      (e = this.resizeObserver) == null || e.disconnect();
  }
  get routerEl() {
    return s.getShadowRootElement(this, ".w3m-router");
  }
  get contentEl() {
    return s.getShadowRootElement(this, ".w3m-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return l`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
      case "SelectNetwork":
        return l`<w3m-select-network-view></w3m-select-network-view>`;
      case "InjectedConnecting":
        return l`<w3m-injected-connecting-view></w3m-injected-connecting-view>`;
      case "DesktopConnecting":
        return l`<w3m-desktop-connecting-view></w3m-desktop-connecting-view>`;
      case "MobileConnecting":
        return l`<w3m-mobile-connecting-view></w3m-mobile-connecting-view>`;
      case "WebConnecting":
        return l`<w3m-web-connecting-view></w3m-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return l`<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>`;
      case "GetWallet":
        return l`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "WalletExplorer":
        return l`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
      case "Qrcode":
        return l`<w3m-qrcode-view></w3m-qrcode-view>`;
      case "Help":
        return l`<w3m-help-view></w3m-help-view>`;
      case "Account":
        return l`<w3m-account-view></w3m-account-view>`;
      case "SwitchNetwork":
        return l`<w3m-switch-network-view></w3m-switch-network-view>`;
      case "InstallWallet":
        return l`<w3m-install-wallet-view></w3m-install-wallet-view>`;
      default:
        return l`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await rt(
      this.routerEl,
      { opacity: [1, 0], scale: [1, 1.02] },
      { duration: 0.15, delay: 0.1 }
    ).finished,
      (this.view = x.state.view),
      rt(
        this.routerEl,
        { opacity: [0, 1], scale: [0.99, 1] },
        { duration: 0.37, delay: 0.05 }
      );
  }
  render() {
    return l`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`;
  }
};
(yt.styles = [p.globalCss, jo]),
  te([f()], yt.prototype, "view", 2),
  te([f()], yt.prototype, "prevView", 2),
  (yt = te([h("w3m-modal-router")], yt));
const Mo = g`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}`;
var Lo = Object.defineProperty,
  To = Object.getOwnPropertyDescriptor,
  Ee = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? To(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Lo(e, a, o), o;
  };
let _t = class extends m {
  constructor() {
    super(),
      (this.open = !1),
      (this.unsubscribe = void 0),
      (this.timeout = void 0),
      (this.unsubscribe = j.subscribe((t) => {
        t.open
          ? ((this.open = !0),
            (this.timeout = setTimeout(() => j.closeToast(), 2200)))
          : ((this.open = !1), clearTimeout(this.timeout));
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribe) == null || t.call(this),
      clearTimeout(this.timeout),
      j.closeToast();
  }
  render() {
    const { message: t, variant: e } = j.state,
      a = { "w3m-success": e === "success", "w3m-error": e === "error" };
    return this.open
      ? l`<div data-testid="component-modal-toast" class="${P(a)}">${
          e === "success" ? w.CHECKMARK_ICON : null
        } ${
          e === "error" ? w.CROSS_ICON : null
        }<w3m-text variant="small-regular">${t}</w3m-text></div>`
      : null;
  }
};
(_t.styles = [p.globalCss, Mo]),
  Ee([f()], _t.prototype, "open", 2),
  (_t = Ee([h("w3m-modal-toast")], _t));
const _o = g`button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px;position:relative}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:active{background-color:var(--w3m-color-overlay)}.w3m-unsupported{opacity:.3}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}`;
var No = Object.defineProperty,
  Ro = Object.getOwnPropertyDescriptor,
  Ct = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ro(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && No(e, a, o), o;
  };
let X = class extends m {
  constructor() {
    super(...arguments),
      (this.onClick = () => null),
      (this.name = ""),
      (this.chainId = ""),
      (this.unsupported = !1);
  }
  render() {
    const t = { "w3m-unsupported": this.unsupported };
    return l`<button data-testid="component-network-button" @click="${
      this.onClick
    }" class="${P(t)}"><w3m-network-image chainId="${
      this.chainId
    }"></w3m-network-image><w3m-text variant="xsmall-regular">${
      this.name
    }</w3m-text></button>`;
  }
};
(X.styles = [p.globalCss, _o]),
  Ct([c()], X.prototype, "onClick", 2),
  Ct([c()], X.prototype, "name", 2),
  Ct([c()], X.prototype, "chainId", 2),
  Ct([c()], X.prototype, "unsupported", 2),
  (X = Ct([h("w3m-network-button")], X));
const Do = g`@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}`;
var Zo = Object.defineProperty,
  Ho = Object.getOwnPropertyDescriptor,
  Ae = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ho(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Zo(e, a, o), o;
  };
let Nt = class extends m {
  constructor() {
    super(...arguments), (this.chainId = "");
  }
  render() {
    const t = s.getChainIcon(this.chainId);
    return t
      ? l`<svg width="54" height="59" viewBox="0 0 54 59" fill="none" data-testid="component-network-logo-svg"><image href="${t}"/><image href="${t}" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>`
      : l`${w.NETWORK_PLACEHOLDER}`;
  }
};
(Nt.styles = [p.globalCss, Do]),
  Ae([c()], Nt.prototype, "chainId", 2),
  (Nt = Ae([h("w3m-network-image")], Nt));
const Bo = 0.1,
  je = 2.5,
  U = 7;
function ee(t, e, a) {
  return t === e ? !1 : (t - e < 0 ? e - t : t - e) <= a + Bo;
}
function So(t, e) {
  const a = Array.prototype.slice.call(
      Fe.create(t, { errorCorrectionLevel: e }).modules.data,
      0
    ),
    r = Math.sqrt(a.length);
  return a.reduce(
    (o, i, n) => (n % r === 0 ? o.push([i]) : o[o.length - 1].push(i)) && o,
    []
  );
}
const Uo = {
    generate(t, e, a) {
      const r = "#141414",
        o = "#ffffff",
        i = [],
        n = So(t, "Q"),
        d = e / n.length,
        v = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
        ];
      v.forEach(({ x: E, y: C }) => {
        const T = (n.length - U) * d * E,
          $ = (n.length - U) * d * C,
          N = 0.45;
        for (let B = 0; B < v.length; B += 1) {
          const lt = d * (U - B * 2);
          i.push(
            b`<rect fill="${B % 2 === 0 ? r : o}" height="${lt}" rx="${
              lt * N
            }" ry="${lt * N}" width="${lt}" x="${T + d * B}" y="${$ + d * B}">`
          );
        }
      });
      const y = Math.floor((a + 25) / d),
        H = n.length / 2 - y / 2,
        Z = n.length / 2 + y / 2 - 1,
        _ = [];
      n.forEach((E, C) => {
        E.forEach((T, $) => {
          if (
            n[C][$] &&
            !(
              (C < U && $ < U) ||
              (C > n.length - (U + 1) && $ < U) ||
              (C < U && $ > n.length - (U + 1))
            ) &&
            !(C > H && C < Z && $ > H && $ < Z)
          ) {
            const N = C * d + d / 2,
              B = $ * d + d / 2;
            _.push([N, B]);
          }
        });
      });
      const vt = {};
      return (
        _.forEach(([E, C]) => {
          vt[E] ? vt[E].push(C) : (vt[E] = [C]);
        }),
        Object.entries(vt)
          .map(([E, C]) => {
            const T = C.filter(($) => C.every((N) => !ee($, N, d)));
            return [Number(E), T];
          })
          .forEach(([E, C]) => {
            C.forEach((T) => {
              i.push(b`<circle cx="${E}" cy="${T}" fill="${r}" r="${d / je}">`);
            });
          }),
        Object.entries(vt)
          .filter(([E, C]) => C.length > 1)
          .map(([E, C]) => {
            const T = C.filter(($) => C.some((N) => ee($, N, d)));
            return [Number(E), T];
          })
          .map(([E, C]) => {
            C.sort(($, N) => ($ < N ? -1 : 1));
            const T = [];
            for (const $ of C) {
              const N = T.find((B) => B.some((lt) => ee($, lt, d)));
              N ? N.push($) : T.push([$]);
            }
            return [E, T.map(($) => [$[0], $[$.length - 1]])];
          })
          .forEach(([E, C]) => {
            C.forEach(([T, $]) => {
              i.push(
                b`<line x1="${E}" x2="${E}" y1="${T}" y2="${$}" stroke="${r}" stroke-width="${
                  d / (je / 2)
                }" stroke-linecap="round">`
              );
            });
          }),
        i
      );
    },
  },
  zo = g`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.w3m-dark{background-color:#fff;border-radius:var(--w3m-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
var Vo = Object.defineProperty,
  Go = Object.getOwnPropertyDescriptor,
  ct = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Go(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Vo(e, a, o), o;
  };
let F = class extends m {
  constructor() {
    super(...arguments),
      (this.uri = ""),
      (this.size = 0),
      (this.imageId = void 0),
      (this.walletId = void 0),
      (this.imageUrl = void 0);
  }
  svgTemplate() {
    const t = V.state.themeMode === "light" ? this.size : this.size - 36;
    return b`<svg height="${t}" width="${t}" data-testid="component-qrcode-svg">${Uo.generate(
      this.uri,
      t,
      t / 4
    )}</svg>`;
  }
  render() {
    const t = { "w3m-dark": V.state.themeMode === "dark" };
    return l`<div style="${`width: ${this.size}px`}" class="${P(t)}">${
      this.walletId || this.imageUrl
        ? l`<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}" imageUrl="${this.imageUrl}"></w3m-wallet-image>`
        : w.WALLET_CONNECT_ICON_COLORED
    } ${this.svgTemplate()}</div>`;
  }
};
(F.styles = [p.globalCss, zo]),
  ct([c()], F.prototype, "uri", 2),
  ct([c({ type: Number })], F.prototype, "size", 2),
  ct([c()], F.prototype, "imageId", 2),
  ct([c()], F.prototype, "walletId", 2),
  ct([c()], F.prototype, "imageUrl", 2),
  (F = ct([h("w3m-qrcode")], F));
const Fo = g`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--w3m-color-fg-1);background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);caret-color:var(--w3m-accent-color)}input::placeholder{color:var(--w3m-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}`;
var qo = Object.defineProperty,
  Ko = Object.getOwnPropertyDescriptor,
  Pe = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ko(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && qo(e, a, o), o;
  };
let Rt = class extends m {
  constructor() {
    super(...arguments), (this.onChange = () => null);
  }
  render() {
    return l`<input type="text" @input="${this.onChange}" placeholder="Search wallets" data-testid="component-search-input"> ${w.SEARCH_ICON}`;
  }
};
(Rt.styles = [p.globalCss, Fo]),
  Pe([c()], Rt.prototype, "onChange", 2),
  (Rt = Pe([h("w3m-search-input")], Rt));
const Yo = g`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}:host{width:100%;height:100%;display:flex;justify-content:center;align-items:center}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite}.accent{stroke:var(--w3m-accent-color)}.fill{stroke:var(--w3m-accent-fill-color)}`;
var Qo = Object.defineProperty,
  Xo = Object.getOwnPropertyDescriptor,
  oe = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Xo(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Qo(e, a, o), o;
  };
let kt = class extends m {
  constructor() {
    super(...arguments), (this.color = "accent"), (this.size = 24);
  }
  render() {
    return l`<svg viewBox="0 0 50 50" width="${this.size}" height="${this.size}" data-testid="component-spinner-svg"><circle class="${this.color}" cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
(kt.styles = [p.globalCss, Yo]),
  oe([c()], kt.prototype, "color", 2),
  oe([c({ type: Number })], kt.prototype, "size", 2),
  (kt = oe([h("w3m-spinner")], kt));
const Jo = g`span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:var(--w3m-font-feature-settings)}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}`;
var ta = Object.defineProperty,
  ea = Object.getOwnPropertyDescriptor,
  ae = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ea(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ta(e, a, o), o;
  };
let $t = class extends m {
  constructor() {
    super(...arguments),
      (this.variant = "medium-regular"),
      (this.color = "primary");
  }
  render() {
    const t = {
      "w3m-big-bold": this.variant === "big-bold",
      "w3m-medium-regular": this.variant === "medium-regular",
      "w3m-small-regular": this.variant === "small-regular",
      "w3m-small-thin": this.variant === "small-thin",
      "w3m-xsmall-regular": this.variant === "xsmall-regular",
      "w3m-xsmall-bold": this.variant === "xsmall-bold",
      "w3m-color-primary": this.color === "primary",
      "w3m-color-secondary": this.color === "secondary",
      "w3m-color-tertiary": this.color === "tertiary",
      "w3m-color-inverse": this.color === "inverse",
      "w3m-color-accnt": this.color === "accent",
      "w3m-color-error": this.color === "error",
    };
    return l`<span data-testid="component-text"><slot class="${P(
      t
    )}"></slot></span>`;
  }
};
($t.styles = [p.globalCss, Jo]),
  ae([c()], $t.prototype, "variant", 2),
  ae([c()], $t.prototype, "color", 2),
  ($t = ae([h("w3m-text")], $t));
const oa = g`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var aa = Object.defineProperty,
  ra = Object.getOwnPropertyDescriptor,
  We = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ra(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && aa(e, a, o), o;
  };
let Dt = class extends m {
  constructor() {
    super(...arguments), (this.symbol = void 0);
  }
  render() {
    var t;
    const e = s.getTokenIcon((t = this.symbol) != null ? t : "");
    return e
      ? l`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}" data-testid="component-token-image"></div>`
      : w.TOKEN_PLACEHOLDER;
  }
};
(Dt.styles = [p.globalCss, oa]),
  We([c()], Dt.prototype, "symbol", 2),
  (Dt = We([h("w3m-token-image")], Dt));
const ia = g`button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
var na = Object.defineProperty,
  la = Object.getOwnPropertyDescriptor,
  q = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? la(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && na(e, a, o), o;
  };
let S = class extends m {
  constructor() {
    super(...arguments),
      (this.onClick = () => null),
      (this.name = ""),
      (this.walletId = ""),
      (this.label = void 0),
      (this.imageId = void 0),
      (this.installed = !1),
      (this.recent = !1);
  }
  sublabelTemplate() {
    return this.recent
      ? l`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>`
      : this.installed
      ? l`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>`
      : null;
  }
  handleClick() {
    nt.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
      this.onClick();
  }
  render() {
    var t;
    return l`<button @click="${this.handleClick.bind(
      this
    )}" data-testid="component-wallet-button-${this.name.toLowerCase()}"><div><w3m-wallet-image walletId="${
      this.walletId
    }" imageId="${
      this.imageId
    }"></w3m-wallet-image><w3m-text variant="xsmall-regular">${
      (t = this.label) != null ? t : s.getWalletName(this.name, !0)
    }</w3m-text>${this.sublabelTemplate()}</div></button>`;
  }
};
(S.styles = [p.globalCss, ia]),
  q([c()], S.prototype, "onClick", 2),
  q([c()], S.prototype, "name", 2),
  q([c()], S.prototype, "walletId", 2),
  q([c()], S.prototype, "label", 2),
  q([c()], S.prototype, "imageId", 2),
  q([c()], S.prototype, "installed", 2),
  q([c()], S.prototype, "recent", 2),
  (S = q([h("w3m-wallet-button")], S));
const sa = g`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var ca = Object.defineProperty,
  da = Object.getOwnPropertyDescriptor,
  Zt = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? da(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ca(e, a, o), o;
  };
let dt = class extends m {
  constructor() {
    super(...arguments),
      (this.walletId = ""),
      (this.imageId = void 0),
      (this.imageUrl = void 0);
  }
  render() {
    var t;
    const e =
      (t = this.imageUrl) != null && t.length
        ? this.imageUrl
        : s.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return l`${
      e.length
        ? l`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}"></div>`
        : w.WALLET_PLACEHOLDER
    }`;
  }
};
(dt.styles = [p.globalCss, sa]),
  Zt([c()], dt.prototype, "walletId", 2),
  Zt([c()], dt.prototype, "imageId", 2),
  Zt([c()], dt.prototype, "imageUrl", 2),
  (dt = Zt([h("w3m-wallet-image")], dt));
var ma = Object.defineProperty,
  ha = Object.getOwnPropertyDescriptor,
  wa = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ha(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ma(e, a, o), o;
  };
let Me = class extends m {
  constructor() {
    super(),
      (this.unwatchAccount = void 0),
      k.getAccount(),
      this.fetchProfile(),
      this.fetchBalance(),
      (this.unwatchAccount = W.client().watchAccount((t) => {
        const { address: e, isConnected: a } = k.state;
        t.isConnected &&
          t.address !== e &&
          (this.fetchProfile(t.address),
          this.fetchBalance(t.address),
          k.setAddress(t.address)),
          t.isConnected || k.resetAccount(),
          a !== t.isConnected && D.close(),
          !a && t.isConnected
            ? nt.track({ name: "ACCOUNT_CONNECTED" })
            : a && !t.isConnected && nt.track({ name: "ACCOUNT_DISCONNECTED" }),
          k.setIsConnected(t.isConnected);
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unwatchAccount) == null || t.call(this);
  }
  async fetchProfile(t) {
    var e;
    const a = (e = O.state.chains) == null ? void 0 : e.find((r) => r.id === 1);
    if (L.state.enableAccountView && a)
      try {
        await k.fetchProfile(s.preloadImage, t);
      } catch (r) {
        console.error(r), j.openToast(s.getErrorMessage(r), "error");
      }
  }
  async fetchBalance(t) {
    if (L.state.enableAccountView)
      try {
        await k.fetchBalance(t);
      } catch (e) {
        console.error(e), j.openToast(s.getErrorMessage(e), "error");
      }
  }
};
Me = wa([h("w3m-account-context")], Me);
var pa = Object.defineProperty,
  ga = Object.getOwnPropertyDescriptor,
  Le = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ga(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && pa(e, a, o), o;
  };
let re = class extends m {
  constructor() {
    super(), (this.preload = !0), this.preloadData();
  }
  async loadImages(t) {
    try {
      t != null &&
        t.length &&
        (await Promise.all(t.map(async (e) => s.preloadImage(e))));
    } catch {
      console.info("Unsuccessful attempt at preloading some images", t);
    }
  }
  async preloadListings() {
    var t;
    if (L.state.enableExplorer) {
      const { chains: e } = O.state;
      await Promise.all([I.getRecomendedWallets(), I.getInjectedWallets()]),
        O.setIsDataLoaded(!0);
      const { recomendedWallets: a } = I.state,
        r = R.installedInjectedWallets(),
        o =
          (t = e == null ? void 0 : e.map((d) => s.getChainIcon(d.id))) != null
            ? t
            : [],
        i = a.map((d) => s.getWalletIcon(d)),
        n = r.map((d) => s.getWalletIcon(d));
      await this.loadImages([...o, ...i, ...n]);
    } else O.setIsDataLoaded(!0);
  }
  async preloadCustomImages() {
    const t = s.getCustomImageUrls();
    await this.loadImages(t);
  }
  async preloadData() {
    try {
      this.preload &&
        ((this.preload = !1),
        await Promise.all([
          this.preloadListings(),
          this.preloadCustomImages(),
        ]));
    } catch (t) {
      console.error(t), j.openToast("Failed preloading", "error");
    }
  }
};
Le([f()], re.prototype, "preload", 2),
  (re = Le([h("w3m-explorer-context")], re));
var ua = Object.defineProperty,
  va = Object.getOwnPropertyDescriptor,
  Te = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? va(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ua(e, a, o), o;
  };
let ie = class extends m {
  constructor() {
    super(), (this.activeChainId = void 0), (this.unwatchNetwork = void 0);
    const t = O.getSelectedChain();
    (this.activeChainId = t == null ? void 0 : t.id),
      (this.unwatchNetwork = W.client().watchNetwork((e) => {
        const a = e.chain;
        a &&
          this.activeChainId !== a.id &&
          (O.setSelectedChain(a),
          (this.activeChainId = a.id),
          k.resetBalance(),
          this.fetchBalance());
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unwatchNetwork) == null || t.call(this);
  }
  async fetchBalance() {
    if (L.state.enableAccountView)
      try {
        await k.fetchBalance();
      } catch (t) {
        console.error(t), j.openToast(s.getErrorMessage(t), "error");
      }
  }
};
Te([f()], ie.prototype, "activeChainId", 2),
  (ie = Te([h("w3m-network-context")], ie));
var ba = Object.defineProperty,
  fa = Object.getOwnPropertyDescriptor,
  xa = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? fa(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ba(e, a, o), o;
  };
let _e = class extends m {
  constructor() {
    super(),
      (this.unsubscribeTheme = void 0),
      p.setTheme(),
      (this.unsubscribeTheme = V.subscribe(p.setTheme)),
      this.preloadThemeImages();
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeTheme) == null || t.call(this);
  }
  async preloadThemeImages() {
    try {
      const { themeVariables: t } = V.state,
        e = [
          t == null ? void 0 : t["--w3m-background-image-url"],
          t == null ? void 0 : t["--w3m-logo-image-url"],
        ].filter(Boolean);
      e.length && (await Promise.all(e.map(async (a) => s.preloadImage(a))));
    } catch {
      console.info("Unsuccessful attempt at preloading some images");
    }
  }
};
_e = xa([h("w3m-theme-context")], _e);
var ya = Object.defineProperty,
  Ca = Object.getOwnPropertyDescriptor,
  ka = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ca(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ya(e, a, o), o;
  };
const $a = 24e4,
  Oa = 1e3;
var Ne;
let Re = class extends m {
  constructor() {
    super(),
      (this.unwatchOptions = void 0),
      (this.unwatchAccount = void 0),
      (this.unwatchWcConnection = void 0),
      (this.timeout = void 0),
      (this.isGenerated = !1),
      (this.selectedChainId =
        (Ne = O.state.selectedChain) == null ? void 0 : Ne.id),
      (this.isAccountConnected = k.state.isConnected),
      (this.lastRetry = Date.now()),
      (this.unwatchOptions = O.subscribe((t) => {
        var e, a;
        ((e = t.selectedChain) == null ? void 0 : e.id) !==
          this.selectedChainId &&
          ((this.selectedChainId =
            (a = t.selectedChain) == null ? void 0 : a.id),
          this.connectAndWait());
      })),
      (this.unwatchAccount = k.subscribe((t) => {
        (this.isAccountConnected !== t.isConnected || !this.isGenerated) &&
          ((this.isAccountConnected = t.isConnected), this.connectAndWait());
      })),
      (this.unwatchWcConnection = A.subscribe((t) => {
        t.pairingEnabled && !this.isGenerated && this.connectAndWait();
      }));
  }
  disconnectedCallback() {
    var t, e, a;
    (t = this.unwatchOptions) == null || t.call(this),
      (e = this.unwatchAccount) == null || e.call(this),
      (a = this.unwatchWcConnection) == null || a.call(this);
  }
  async connectAndWait() {
    const { pairingEnabled: t } = A.state;
    if ((clearTimeout(this.timeout), !this.isAccountConnected && t)) {
      (this.isGenerated = !0),
        (this.timeout = setTimeout(this.connectAndWait.bind(this), $a));
      try {
        const { selectedChain: e } = O.state;
        await W.client().connectWalletConnect(
          (a) => A.setPairingUri(a),
          e == null ? void 0 : e.id
        );
      } catch (e) {
        console.error(e),
          A.setPairingError(!0),
          j.openToast("Connection request declined", "error"),
          Date.now() - this.lastRetry >= Oa &&
            ((this.lastRetry = Date.now()), this.connectAndWait());
      }
    }
  }
};
Re = ka([h("w3m-wc-connection-context")], Re);
const Ia = g`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
var Ea = Object.defineProperty,
  Aa = Object.getOwnPropertyDescriptor,
  ne = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Aa(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Ea(e, a, o), o;
  };
let Ot = class extends m {
  constructor() {
    super(), (this.balance = "hide"), (this.avatar = "show");
  }
  onOpen() {
    nt.click({ name: "ACCOUNT_BUTTON" }), D.open({ route: "Account" });
  }
  accountTemplate() {
    const t = this.avatar === "show";
    return l`${
      t
        ? l`<w3m-avatar data-testid="partial-account-avatar"></w3m-avatar>`
        : null
    }<w3m-address-text data-testid="partial-account-address"></w3m-address-text>`;
  }
  render() {
    const t = this.balance === "show",
      e = { "w3m-no-avatar": this.avatar === "hide" };
    return t
      ? l`<div><w3m-balance data-testid="partial-account-balance"></w3m-balance><button @click="${
          this.onOpen
        }" class="${P(
          e
        )}" data-testid="partial-account-open-button">${this.accountTemplate()}</button></div>`
      : l`<w3m-button-big @click="${
          this.onOpen
        }" data-testid="partial-account-open-button">${this.accountTemplate()}</w3m-button-big>`;
  }
};
(Ot.styles = [p.globalCss, Ia]),
  ne([c()], Ot.prototype, "balance", 2),
  ne([c()], Ot.prototype, "avatar", 2),
  (Ot = ne([h("w3m-account-button")], Ot));
const ja = g`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
var Pa = Object.defineProperty,
  Wa = Object.getOwnPropertyDescriptor,
  le = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Wa(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Pa(e, a, o), o;
  };
let It = class extends m {
  constructor() {
    super(),
      (this.chainId = 0),
      (this.label = ""),
      (this.unsubscribeNetwork = void 0);
    const { selectedChain: t } = O.state;
    (this.chainId = t == null ? void 0 : t.id),
      (this.label = t == null ? void 0 : t.name),
      (this.unsubscribeNetwork = O.subscribe(({ selectedChain: e }) => {
        (this.chainId = e == null ? void 0 : e.id),
          (this.label = e == null ? void 0 : e.name);
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeNetwork) == null || t.call(this);
  }
  onClick() {
    x.push("SelectNetwork");
  }
  render() {
    const { chains: t, selectedChain: e } = O.state,
      a = t == null ? void 0 : t.map((i) => i.id),
      r = e && (a == null ? void 0 : a.includes(e.id)),
      o = t && t.length <= 1 && r;
    return l`<button @click="${
      this.onClick
    }" ?disabled="${o}"><w3m-network-image chainId="${it(
      this.chainId
    )}"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">${
      this.label
    }</w3m-text></button>`;
  }
};
(It.styles = [p.globalCss, ja]),
  le([f()], It.prototype, "chainId", 2),
  le([f()], It.prototype, "label", 2),
  (It = le([h("w3m-account-network-button")], It));
const Ma = g`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
var La = Object.defineProperty,
  Ta = Object.getOwnPropertyDescriptor,
  Et = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ta(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && La(e, a, o), o;
  };
let J = class extends m {
  constructor() {
    super(),
      (this.address = void 0),
      (this.name = void 0),
      (this.loading = !0),
      (this.variant = "button"),
      (this.unsubscribeAccount = void 0),
      (this.address = k.state.address),
      (this.name = k.state.profileName),
      (this.loading = !!k.state.profileLoading),
      (this.unsubscribeAccount = k.subscribe(
        ({ address: t, profileName: e, profileLoading: a }) => {
          (this.address = t), (this.name = e), (this.loading = !!a);
        }
      ));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeAccount) == null || t.call(this);
  }
  render() {
    var t;
    const e = this.variant === "button",
      a = { "w3m-loading": this.loading };
    return l`<w3m-text class="${P(
      a
    )}" data-testid="partial-address-text" variant="${
      e ? "medium-regular" : "big-bold"
    }" color="${e ? "inverse" : "primary"}">${
      this.name ? this.name : s.truncate((t = this.address) != null ? t : "")
    }</w3m-text>`;
  }
};
(J.styles = [p.globalCss, Ma]),
  Et([f()], J.prototype, "address", 2),
  Et([f()], J.prototype, "name", 2),
  Et([f()], J.prototype, "loading", 2),
  Et([c()], J.prototype, "variant", 2),
  (J = Et([h("w3m-address-text")], J));
const M = {
    onConnecting(t) {
      s.goToConnectingView(t);
    },
    onExternal(t) {
      s.handleConnectorConnection(t);
    },
    manualWalletsTemplate() {
      return R.manualWallets().map(
        (t) =>
          l`<w3m-wallet-button walletId="${t.id}" name="${
            t.name
          }" .onClick="${() => this.onConnecting(t)}"></w3m-wallet-button>`
      );
    },
    recomendedWalletsTemplate(t = !1) {
      return R.recomendedWallets(t).map(
        (e) =>
          l`<w3m-wallet-button name="${e.name}" walletId="${e.id}" imageId="${
            e.image_id
          }" .onClick="${() => this.onConnecting(e)}"></w3m-wallet-button>`
      );
    },
    externalWalletsTemplate() {
      return R.externalWallets().map(
        (t) =>
          l`<w3m-wallet-button name="${t.name}" walletId="${
            t.id
          }" .onClick="${() => this.onExternal(t.id)}"></w3m-wallet-button>`
      );
    },
    recentWalletTemplate() {
      const t = R.recentWallet();
      if (t)
        return l`<w3m-wallet-button name="${t.name}" walletId="${
          t.id
        }" imageId="${t.image_id}" .recent="${!0}" .onClick="${() =>
          this.onConnecting(t)}"></w3m-wallet-button>`;
    },
    installedInjectedWalletsTemplate() {
      return R.installedInjectedWallets().map(
        (t) =>
          l`<w3m-wallet-button .installed="${!0}" name="${t.name}" walletId="${
            t.id
          }" imageId="${t.image_id}" .onClick="${() =>
            this.onConnecting(t)}"></w3m-wallet-button>`
      );
    },
    injectedWalletsTemplate() {
      return R.injectedWallets().map(
        (t) =>
          l`<w3m-wallet-button name="${t.name}" walletId="${t.id}" imageId="${
            t.image_id
          }" .onClick="${() => this.onConnecting(t)}"></w3m-wallet-button>`
      );
    },
  },
  _a = g`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.w3m-track svg{margin:0 5px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var Na = Object.defineProperty,
  Ra = Object.getOwnPropertyDescriptor,
  Da = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ra(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Na(e, a, o), o;
  };
let se = class extends m {
  onGoToQrcode() {
    x.push("Qrcode");
  }
  onGetWallet() {
    x.push("GetWallet");
  }
  render() {
    const { recomendedWallets: t } = I.state,
      e = [...t, ...t],
      a = M.externalWalletsTemplate(),
      r = M.installedInjectedWalletsTemplate(),
      o = [...r, ...a].length > 0,
      i = u.RECOMMENDED_WALLET_AMOUNT * 2;
    return l`<w3m-modal-header title="Connect your wallet" .onAction="${
      this.onGoToQrcode
    }" .actionIcon="${
      w.QRCODE_ICON
    }"></w3m-modal-header><w3m-modal-content><div class="w3m-title">${
      w.MOBILE_ICON
    }<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">${[
      ...Array(i),
    ].map((n, d) => {
      const v = e[d % e.length];
      return v
        ? l`<w3m-wallet-image walletId="${v.id}" imageId="${v.image_id}"></w3m-wallet-image>`
        : w.WALLET_PLACEHOLDER;
    })}</div><w3m-button-big @click="${
      s.handleAndroidLinking
    }" data-testid="partial-android-wallet-button"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>${
      o
        ? l`<w3m-modal-footer data-testid="partial-android-footer"><div class="w3m-title">${w.WALLET_ICON}<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">${r} ${a}</div></w3m-modal-footer>`
        : null
    }<w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Choose WalletConnect to see supported apps on your device${
      o ? ", or select from other options" : ""
    }`}</w3m-text><w3m-button variant="outline" .iconRight="${
      w.ARROW_UP_RIGHT_ICON
    }" .onClick="${() =>
      this.onGetWallet()}" data-testid="partial-android-nowallet-button">I don't have a wallet</w3m-button></w3m-info-footer>`;
  }
};
(se.styles = [p.globalCss, _a]),
  (se = Da([h("w3m-android-wallet-selection")], se));
const Za = g`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
var Ha = Object.defineProperty,
  Ba = Object.getOwnPropertyDescriptor,
  At = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ba(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Ha(e, a, o), o;
  };
let tt = class extends m {
  constructor() {
    super(),
      (this.address = void 0),
      (this.avatar = void 0),
      (this.loading = !0),
      (this.size = "small"),
      (this.unsubscribeAccount = void 0),
      (this.address = k.state.address),
      (this.avatar = k.state.profileAvatar),
      (this.loading = !!k.state.profileLoading),
      (this.unsubscribeAccount = k.subscribe(
        ({ address: t, profileAvatar: e, profileLoading: a }) => {
          (this.address = t), (this.avatar = e), (this.loading = !!a);
        }
      ));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeAccount) == null || t.call(this);
  }
  render() {
    const t = {
      "w3m-placeholder": !0,
      "w3m-small": this.size === "small",
      "w3m-medium": this.size === "medium",
    };
    return this.avatar
      ? l`<img crossorigin="anonymous" class="${P(t)}" src="${
          this.avatar
        }" data-testid="partial-avatar-image">`
      : this.address
      ? (s.generateAvatarColors(this.address),
        l`<div class="${P(t)}">${
          this.loading ? l`<div class="w3m-loader"></div>` : null
        }</div>`)
      : null;
  }
};
(tt.styles = [p.globalCss, Za]),
  At([f()], tt.prototype, "address", 2),
  At([f()], tt.prototype, "avatar", 2),
  At([f()], tt.prototype, "loading", 2),
  At([c()], tt.prototype, "size", 2),
  (tt = At([h("w3m-avatar")], tt));
const Sa = g`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
var Ua = Object.defineProperty,
  za = Object.getOwnPropertyDescriptor,
  ce = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? za(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Ua(e, a, o), o;
  };
let jt = class extends m {
  constructor() {
    var t, e;
    super(),
      (this.symbol = void 0),
      (this.amount = void 0),
      (this.unsubscribeAccount = void 0),
      (this.symbol = (t = k.state.balance) == null ? void 0 : t.symbol),
      (this.amount = (e = k.state.balance) == null ? void 0 : e.amount),
      (this.unsubscribeAccount = k.subscribe(({ balance: a }) => {
        (this.symbol = a == null ? void 0 : a.symbol),
          (this.amount = a == null ? void 0 : a.amount);
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeAccount) == null || t.call(this);
  }
  render() {
    let t = "_._";
    return (
      this.amount === "0.0"
        ? (t = "0")
        : typeof this.amount == "string" && this.amount.length > 6
        ? (t = this.amount.substring(0, 6))
        : typeof this.amount == "string" && (t = this.amount),
      l`<div><w3m-token-image symbol="${it(
        this.symbol
      )}" data-testid="partial-balance-token-image"></w3m-token-image><w3m-text variant="medium-regular" color="primary" data-testid="partial-balance-token-text">${t} ${
        this.symbol
      }</w3m-text></div>`
    );
  }
};
(jt.styles = [p.globalCss, Sa]),
  ce([f()], jt.prototype, "symbol", 2),
  ce([f()], jt.prototype, "amount", 2),
  (jt = ce([h("w3m-balance")], jt));
const Va = g`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
var Ga = Object.defineProperty,
  Fa = Object.getOwnPropertyDescriptor,
  Ht = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Fa(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Ga(e, a, o), o;
  };
let mt = class extends m {
  constructor() {
    super(),
      (this.loading = !1),
      (this.label = "Connect Wallet"),
      (this.icon = "show"),
      (this.modalUnsub = void 0),
      (this.modalUnsub = D.subscribe((t) => {
        t.open && (this.loading = !0), t.open || (this.loading = !1);
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.modalUnsub) == null || t.call(this);
  }
  iconTemplate() {
    return this.icon === "show" ? w.WALLET_CONNECT_ICON : null;
  }
  onClick() {
    k.state.isConnected ? this.onDisconnect() : this.onConnect();
  }
  async onConnect() {
    (this.loading = !0),
      nt.click({ name: "CONNECT_BUTTON" }),
      await D.open(),
      D.state.open || (this.loading = !1);
  }
  async onDisconnect() {
    nt.click({ name: "DISCONNECT_BUTTON" }), await W.client().disconnect();
  }
  render() {
    return l`<w3m-button-big .disabled="${this.loading}" @click="${
      this.onClick
    }" data-testid="partial-connect-button">${
      this.loading
        ? l`<w3m-spinner data-testid="partial-connect-spinner"></w3m-spinner><w3m-text variant="medium-regular" color="accent" data-testid="partial-connect-text">Connecting...</w3m-text>`
        : l`${this.iconTemplate()}<w3m-text variant="medium-regular" color="inverse" data-testid="partial-connect-text">${
            this.label
          }</w3m-text>`
    }</w3m-button-big>`;
  }
};
(mt.styles = [p.globalCss, Va]),
  Ht([f()], mt.prototype, "loading", 2),
  Ht([c()], mt.prototype, "label", 2),
  Ht([c()], mt.prototype, "icon", 2),
  (mt = Ht([h("w3m-connect-button")], mt));
const qa = g`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}`;
var Ka = Object.defineProperty,
  Ya = Object.getOwnPropertyDescriptor,
  ht = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ya(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Ka(e, a, o), o;
  };
let K = class extends m {
  constructor() {
    super(...arguments),
      (this.walletId = void 0),
      (this.imageId = void 0),
      (this.isError = !1),
      (this.isStale = !1),
      (this.label = "");
  }
  svgLoaderTemplate() {
    var t, e;
    const a =
      (e =
        (t = V.state.themeVariables) == null
          ? void 0
          : t["--w3m-wallet-icon-large-border-radius"]) != null
        ? e
        : p.getPreset("--w3m-wallet-icon-large-border-radius");
    let r = 0;
    a.includes("%")
      ? (r = (88 / 100) * parseInt(a, 10))
      : (r = parseInt(a, 10)),
      (r *= 1.17);
    const o = 317 - r * 1.57,
      i = 425 - r * 1.8;
    return l`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="${r}"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ${o}" stroke-dashoffset="${i}"></use></svg>`;
  }
  render() {
    const t = { "w3m-error": this.isError, "w3m-stale": this.isStale };
    return l`<div class="${P(
      t
    )}">${this.svgLoaderTemplate()}<w3m-wallet-image walletId="${it(
      this.walletId
    )}" imageId="${it(
      this.imageId
    )}" data-useid="partial-connector-wallet-image"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="${
      this.isError ? "error" : "primary"
    }" data-useid="partial-connector-error-text">${
      this.isError ? "Connection declined" : this.label
    }</w3m-text>`;
  }
};
(K.styles = [p.globalCss, qa]),
  ht([c()], K.prototype, "walletId", 2),
  ht([c()], K.prototype, "imageId", 2),
  ht([c()], K.prototype, "isError", 2),
  ht([c()], K.prototype, "isStale", 2),
  ht([c()], K.prototype, "label", 2),
  (K = ht([h("w3m-connector-waiting")], K));
var Qa = Object.defineProperty,
  Xa = Object.getOwnPropertyDescriptor,
  wt = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Xa(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Qa(e, a, o), o;
  };
let et = class extends m {
  constructor() {
    super(),
      (this.isConnected = !1),
      (this.label = "Connect Wallet"),
      (this.icon = "show"),
      (this.avatar = "show"),
      (this.balance = "hide"),
      (this.unsubscribeAccount = void 0),
      (this.isConnected = k.state.isConnected),
      (this.unsubscribeAccount = k.subscribe(({ isConnected: t }) => {
        this.isConnected = t;
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeAccount) == null || t.call(this);
  }
  render() {
    const { enableAccountView: t } = L.state,
      e = this.balance,
      a = this.label,
      r = this.icon,
      o = this.avatar;
    return this.isConnected && t
      ? l`<w3m-account-button .balance="${e}" .avatar="${o}" data-testid="partial-core-account-button"></w3m-account-button>`
      : l`<w3m-connect-button label="${it(
          this.isConnected ? "Disconnect" : a
        )}" .icon="${r}" data-testid="partial-core-connect-button"></w3m-connect-button>`;
  }
};
wt([f()], et.prototype, "isConnected", 2),
  wt([c()], et.prototype, "label", 2),
  wt([c()], et.prototype, "icon", 2),
  wt([c()], et.prototype, "avatar", 2),
  wt([c()], et.prototype, "balance", 2),
  (et = wt([h("w3m-core-button")], et));
const Ja = g`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}`;
var tr = Object.defineProperty,
  er = Object.getOwnPropertyDescriptor,
  or = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? er(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && tr(e, a, o), o;
  };
let de = class extends m {
  render() {
    const { explorerExcludedWalletIds: t, enableExplorer: e } = L.state,
      a = t !== "ALL" && e,
      r = M.manualWalletsTemplate(),
      o = M.recomendedWalletsTemplate(),
      i = M.externalWalletsTemplate(),
      n = M.recentWalletTemplate();
    let d = [...M.installedInjectedWalletsTemplate(), n, ...i, ...r, ...o];
    d = d.filter(Boolean);
    const v = d.length > 4 || a;
    let y = [];
    v ? (y = d.slice(0, 3)) : (y = d);
    const H = !!y.length;
    return l`<w3m-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
      s.handleUriCopy
    }" .actionIcon="${
      w.COPY_ICON
    }" data-testid="partial-desktop-wallet-selection-header"></w3m-modal-header><w3m-modal-content data-testid="partial-desktop-wallet-selection-content"><div class="w3m-mobile-title"><div class="w3m-subtitle">${
      w.MOBILE_ICON
    }<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${
      w.SCAN_ICON
    }<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${
      H
        ? l`<w3m-modal-footer data-testid="partial-desktop-wallet-selection-footer"><div class="w3m-desktop-title">${
            w.DESKTOP_ICON
          }<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${y} ${
            v
              ? l`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
              : null
          }</div></w3m-modal-footer>`
        : null
    }`;
  }
};
(de.styles = [p.globalCss, Ja]),
  (de = or([h("w3m-desktop-wallet-selection")], de));
const ar = g`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var rr = Object.defineProperty,
  ir = Object.getOwnPropertyDescriptor,
  nr = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ir(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && rr(e, a, o), o;
  };
let me = class extends m {
  render() {
    const { termsOfServiceUrl: t, privacyPolicyUrl: e } = L.state;
    return t ?? e
      ? l`<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
          t
            ? l`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
            : null
        } ${t && e ? "and" : null} ${
          e
            ? l`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
            : null
        }</w3m-text></div>`
      : null;
  }
};
(me.styles = [p.globalCss, ar]), (me = nr([h("w3m-legal-notice")], me));
const lr = g`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var sr = Object.defineProperty,
  cr = Object.getOwnPropertyDescriptor,
  dr = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? cr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && sr(e, a, o), o;
  };
let he = class extends m {
  onQrcode() {
    x.push("Qrcode");
  }
  render() {
    const { explorerExcludedWalletIds: t, enableExplorer: e } = L.state,
      a = t !== "ALL" && e,
      r = M.manualWalletsTemplate(),
      o = M.recomendedWalletsTemplate(),
      i = M.externalWalletsTemplate(),
      n = M.recentWalletTemplate();
    let d = [...M.installedInjectedWalletsTemplate(), n, ...i, ...r, ...o];
    d = d.filter(Boolean);
    const v = d.length > 8 || a;
    let y = [];
    v ? (y = d.slice(0, 7)) : (y = d);
    const H = !!y.length;
    return l`<w3m-modal-header title="Connect your wallet" .onAction="${
      this.onQrcode
    }" .actionIcon="${
      w.QRCODE_ICON
    }" data-testid="partial-mobile-wallet-selection-header"></w3m-modal-header>${
      H
        ? l`<w3m-modal-content data-testid="partial-mobile-wallet-selection-content"><div>${y} ${
            v
              ? l`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
              : null
          }</div></w3m-modal-content>`
        : null
    }`;
  }
};
(he.styles = [p.globalCss, lr]),
  (he = dr([h("w3m-mobile-wallet-selection")], he));
const mr = g`:host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--w3m-overlay-background-color);backdrop-filter:var(--w3m-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}`;
var hr = Object.defineProperty,
  wr = Object.getOwnPropertyDescriptor,
  we = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? wr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && hr(e, a, o), o;
  };
let Pt = class extends m {
  constructor() {
    super(),
      (this.open = !1),
      (this.active = !1),
      (this.unsubscribeModal = void 0),
      (this.abortController = void 0),
      (this.unsubscribeModal = D.subscribe((t) => {
        t.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeModal) == null || t.call(this);
  }
  get overlayEl() {
    return s.getShadowRootElement(this, ".w3m-overlay");
  }
  get containerEl() {
    return s.getShadowRootElement(this, ".w3m-container");
  }
  toggleBodyScroll(t) {
    if (document.querySelector("body"))
      if (t) {
        const e = document.getElementById("w3m-styles");
        e == null || e.remove();
      } else
        document.head.insertAdjacentHTML(
          "beforeend",
          '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
        );
  }
  onCloseModal(t) {
    t.target === t.currentTarget && D.close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(!1),
      this.addKeyboardEvents(),
      (this.open = !0),
      setTimeout(async () => {
        const t = s.isMobileAnimation()
            ? { y: ["50vh", "0vh"] }
            : { scale: [0.98, 1] },
          e = 0.1,
          a = 0.2;
        await Promise.all([
          rt(this.overlayEl, { opacity: [0, 1] }, { delay: e, duration: a })
            .finished,
          rt(this.containerEl, t, { delay: e, duration: a }).finished,
        ]),
          (this.active = !0);
      }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
    const t = s.isMobileAnimation()
        ? { y: ["0vh", "50vh"] }
        : { scale: [1, 0.98] },
      e = 0.2;
    await Promise.all([
      rt(this.overlayEl, { opacity: [1, 0] }, { duration: e }).finished,
      rt(this.containerEl, t, { duration: e }).finished,
    ]),
      this.containerEl.removeAttribute("style"),
      (this.active = !1),
      (this.open = !1);
  }
  addKeyboardEvents() {
    (this.abortController = new AbortController()),
      window.addEventListener(
        "keydown",
        (t) => {
          var e;
          t.key === "Escape"
            ? D.close()
            : t.key === "Tab" &&
              (((e = t.target) != null && e.tagName.includes("W3M-")) ||
                this.containerEl.focus());
        },
        this.abortController
      ),
      this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var t;
    (t = this.abortController) == null || t.abort(),
      (this.abortController = void 0);
  }
  render() {
    const t = { "w3m-overlay": !0, "w3m-active": this.active };
    return l`<w3m-explorer-context data-id="partial-modal-explorer-context"></w3m-explorer-context><w3m-theme-context data-id="partial-modal-theme-context"></w3m-theme-context><w3m-wc-connection-context data-id="partial-modal-connection-context"></w3m-wc-connection-context><w3m-account-context data-id="partial-modal-account-context"></w3m-account-context><w3m-network-context data-id="partial-modal-network-context"></w3m-network-context><div id="w3m-modal" class="${P(
      t
    )}" @click="${
      this.onCloseModal
    }" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${
      this.open
        ? l`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>`
        : null
    }</div></div>`;
  }
};
(Pt.styles = [p.globalCss, mr]),
  we([f()], Pt.prototype, "open", 2),
  we([f()], Pt.prototype, "active", 2),
  (Pt = we([h("w3m-modal")], Pt));
const pr = g`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
var gr = Object.defineProperty,
  ur = Object.getOwnPropertyDescriptor,
  Bt = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ur(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && gr(e, a, o), o;
  };
let pt = class extends m {
  constructor() {
    super(),
      (this.chainId = ""),
      (this.label = ""),
      (this.wrongNetwork = !1),
      (this.unsubscribeNetwork = void 0);
    const { selectedChain: t } = O.state;
    this.onSetChainData(t),
      (this.unsubscribeNetwork = O.subscribe(({ selectedChain: e }) => {
        this.onSetChainData(e);
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeNetwork) == null || t.call(this);
  }
  onSetChainData(t) {
    if (t) {
      const { chains: e } = O.state,
        a = e == null ? void 0 : e.map((r) => r.id);
      (this.chainId = t.id.toString()),
        (this.wrongNetwork = !(a != null && a.includes(t.id))),
        (this.label = this.wrongNetwork ? "Wrong Network" : t.name);
    }
  }
  onClick() {
    nt.click({ name: "NETWORK_BUTTON" }), D.open({ route: "SelectNetwork" });
  }
  render() {
    var t;
    const { chains: e } = O.state,
      a = e && e.length > 1;
    return l`<w3m-button-big @click="${
      this.onClick
    }" ?disabled="${!a}" data-testid="partial-network-switch-button"><w3m-network-image chainId="${it(
      this.chainId
    )}" data-testid="partial-network-switch-image"></w3m-network-image><w3m-text variant="medium-regular" color="inverse" data-testid="partial-network-switch-text">${
      (t = this.label) != null && t.length ? this.label : "Select Network"
    }</w3m-text></w3m-button-big>`;
  }
};
(pt.styles = [p.globalCss, pr]),
  Bt([f()], pt.prototype, "chainId", 2),
  Bt([f()], pt.prototype, "label", 2),
  Bt([f()], pt.prototype, "wrongNetwork", 2),
  (pt = Bt([h("w3m-network-switch")], pt));
const vr = g`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}`;
var br = Object.defineProperty,
  fr = Object.getOwnPropertyDescriptor,
  St = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? fr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && br(e, a, o), o;
  };
let gt = class extends m {
  constructor() {
    super(...arguments),
      (this.chainId = void 0),
      (this.isError = !1),
      (this.label = "");
  }
  svgLoaderTemplate() {
    return l`<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader" data-testid="partial-network-waiting-svg"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>`;
  }
  render() {
    const t = { "w3m-error": this.isError };
    return l`<div class="${P(
      t
    )}">${this.svgLoaderTemplate()}<w3m-network-image chainId="${it(
      this.chainId
    )}" data-testid="partial-network-waiting-image"></w3m-network-image></div><w3m-text variant="medium-regular" color="${
      this.isError ? "error" : "primary"
    }" data-testid="partial-network-waiting-text">${
      this.isError ? "Switch declined" : this.label
    }</w3m-text>`;
  }
};
(gt.styles = [p.globalCss, vr]),
  St([c()], gt.prototype, "chainId", 2),
  St([c()], gt.prototype, "isError", 2),
  St([c()], gt.prototype, "label", 2),
  (gt = St([h("w3m-network-waiting")], gt));
const xr = g`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}`;
var yr = Object.defineProperty,
  Cr = Object.getOwnPropertyDescriptor,
  ot = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Cr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && yr(e, a, o), o;
  };
let z = class extends m {
  constructor() {
    super(...arguments),
      (this.isMobile = !1),
      (this.isInjected = !1),
      (this.isInjectedInstalled = !1),
      (this.isDesktop = !1),
      (this.isWeb = !1),
      (this.isRetry = !1);
  }
  onMobile() {
    u.isMobile()
      ? x.replace("MobileConnecting")
      : x.replace("MobileQrcodeConnecting");
  }
  onInjected() {
    this.isInjectedInstalled
      ? x.replace("InjectedConnecting")
      : x.replace("InstallWallet");
  }
  onDesktop() {
    x.replace("DesktopConnecting");
  }
  onWeb() {
    x.replace("WebConnecting");
  }
  render() {
    return l`<div>${this.isRetry ? l`<slot></slot>` : null} ${
      this.isMobile
        ? l`<w3m-button .onClick="${this.onMobile}" .iconLeft="${w.MOBILE_ICON}" variant="outline">Mobile</w3m-button>`
        : null
    } ${
      this.isInjected
        ? l`<w3m-button .onClick="${this.onInjected}" .iconLeft="${w.WALLET_ICON}" variant="outline">Browser</w3m-button>`
        : null
    } ${
      this.isDesktop
        ? l`<w3m-button .onClick="${this.onDesktop}" .iconLeft="${w.DESKTOP_ICON}" variant="outline">Desktop</w3m-button>`
        : null
    } ${
      this.isWeb
        ? l`<w3m-button .onClick="${this.onWeb}" .iconLeft="${w.GLOBE_ICON}" variant="outline">Web</w3m-button>`
        : null
    }</div>`;
  }
};
(z.styles = [p.globalCss, xr]),
  ot([c()], z.prototype, "isMobile", 2),
  ot([c()], z.prototype, "isInjected", 2),
  ot([c()], z.prototype, "isInjectedInstalled", 2),
  ot([c()], z.prototype, "isDesktop", 2),
  ot([c()], z.prototype, "isWeb", 2),
  ot([c()], z.prototype, "isRetry", 2),
  (z = ot([h("w3m-platform-selection")], z));
const kr = g`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var $r = Object.defineProperty,
  Or = Object.getOwnPropertyDescriptor,
  Ir = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Or(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && $r(e, a, o), o;
  };
let pe = class extends m {
  onClick() {
    x.push("WalletExplorer");
  }
  render() {
    const { recomendedWallets: t } = I.state,
      e = R.manualWallets(),
      a = [...t, ...e].reverse().slice(0, 4);
    return l`<button @click="${
      this.onClick
    }" data-testid="partial-all-wallets-button"><div class="w3m-icons">${a.map(
      (r) => {
        const o = s.getWalletIcon(r);
        if (o) return l`<img crossorigin="anonymous" src="${o}">`;
        const i = s.getWalletIcon({ id: r.id });
        return i
          ? l`<img crossorigin="anonymous" src="${i}">`
          : w.WALLET_PLACEHOLDER;
      }
    )} ${[...Array(4 - a.length)].map(
      () => w.WALLET_PLACEHOLDER
    )}</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>`;
  }
};
(pe.styles = [p.globalCss, kr]),
  (pe = Ir([h("w3m-view-all-wallets-button")], pe));
const Er = g`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Ar = Object.defineProperty,
  jr = Object.getOwnPropertyDescriptor,
  Ut = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? jr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Ar(e, a, o), o;
  };
let ut = class extends m {
  constructor() {
    super(),
      (this.walletId = ""),
      (this.imageId = ""),
      (this.uri = ""),
      (this.unwatchWcConnection = void 0),
      setTimeout(() => {
        const { pairingUri: t } = A.state;
        this.uri = t;
      }, 0),
      (this.unwatchWcConnection = A.subscribe((t) => {
        t.pairingUri && (this.uri = t.pairingUri);
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unwatchWcConnection) == null || t.call(this);
  }
  get overlayEl() {
    return s.getShadowRootElement(this, ".w3m-qr-container");
  }
  render() {
    return l`<div class="w3m-qr-container">${
      this.uri
        ? l`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${this.walletId}" imageId="${this.imageId}" data-testid="partial-qr-code"></w3m-qrcode>`
        : l`<w3m-spinner data-testid="partial-qr-spinner"></w3m-spinner>`
    }</div>`;
  }
};
(ut.styles = [p.globalCss, Er]),
  Ut([c()], ut.prototype, "walletId", 2),
  Ut([c()], ut.prototype, "imageId", 2),
  Ut([f()], ut.prototype, "uri", 2),
  (ut = Ut([h("w3m-walletconnect-qr")], ut));
const Pr = g`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
var Wr = Object.defineProperty,
  Mr = Object.getOwnPropertyDescriptor,
  De = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Mr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Wr(e, a, o), o;
  };
let zt = class extends m {
  constructor() {
    super(...arguments), (this.loading = !1);
  }
  async onDisconnect() {
    this.loading ||
      ((this.loading = !0), await W.client().disconnect(), (this.loading = !1));
  }
  async onCopyAddress() {
    var t;
    try {
      await navigator.clipboard.writeText(
        (t = k.state.address) != null ? t : ""
      ),
        j.openToast("Address copied", "success");
    } catch {
      j.openToast("Failed to copy", "error");
    }
  }
  render() {
    return l`<w3m-modal-content data-testid="view-account-content"><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium" data-testid="view-account-avatar"></w3m-avatar><w3m-address-text variant="modal" data-testid="view-account-address-text"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary" data-testid="view-account-connection-badge">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance data-testid="view-account-balance"></w3m-balance></div><w3m-modal-footer data-testid="view-account-footer"><div class="w3m-footer"><w3m-account-network-button data-testid="view-account-network-button"></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${w.ACCOUNT_COPY}" data-testid="view-account-copy-button"></w3m-box-button><w3m-box-button label="Disconnect" .loading="${this.loading}" .onClick="${this.onDisconnect}" .icon="${w.ACCOUNT_DISCONNECT}" data-testid="view-account-disconnect-button"></w3m-box-button></div></w3m-modal-footer>`;
  }
};
(zt.styles = [p.globalCss, Pr]),
  De([f()], zt.prototype, "loading", 2),
  (zt = De([h("w3m-account-view")], zt));
var Lr = Object.defineProperty,
  Tr = Object.getOwnPropertyDescriptor,
  _r = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Tr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Lr(e, a, o), o;
  };
let ge = class extends m {
  viewTemplate() {
    return u.isAndroid()
      ? l`<w3m-android-wallet-selection></w3m-android-wallet-selection>`
      : u.isMobile()
      ? l`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>`
      : l`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`;
  }
  render() {
    return l`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`;
  }
};
(ge.styles = [p.globalCss]), (ge = _r([h("w3m-connect-wallet-view")], ge));
const Nr = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
var Rr = Object.defineProperty,
  Dr = Object.getOwnPropertyDescriptor,
  Ze = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Dr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Rr(e, a, o), o;
  };
let Vt = class extends m {
  constructor() {
    super(),
      (this.isError = !1),
      (this.unwatchConnection = void 0),
      this.openDesktopApp(),
      (this.unwatchConnection = A.subscribe((t) => {
        this.isError = t.pairingError;
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unwatchConnection) == null || t.call(this);
  }
  onFormatAndRedirect(t) {
    const { desktop: e, name: a } = u.getWalletRouterData(),
      r = e == null ? void 0 : e.native;
    if (r) {
      const o = u.formatNativeUrl(r, t, a);
      u.openHref(o, "_self");
    }
  }
  openDesktopApp() {
    A.setPairingError(!1);
    const { pairingUri: t } = A.state,
      e = u.getWalletRouterData();
    s.setRecentWallet(e), this.onFormatAndRedirect(t);
  }
  render() {
    const { name: t, id: e, image_id: a } = u.getWalletRouterData(),
      {
        isMobile: r,
        isInjected: o,
        isWeb: i,
      } = s.getCachedRouterWalletPlatforms();
    return l`<w3m-modal-header title="${t}" .onAction="${
      s.handleUriCopy
    }" .actionIcon="${
      w.COPY_ICON
    }" data-testid="view-desktop-connecting-header"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${a}" label="${`Continue in ${t}...`}" .isError="${
      this.isError
    }" data-testid="view-desktop-connecting-waiting"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer data-testid="view-desktop-connecting-footer"><w3m-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</w3m-text><w3m-platform-selection .isMobile="${r}" .isInjected="${o}" .isWeb="${i}" .isRetry="${!0}"><w3m-button .onClick="${this.openDesktopApp.bind(
      this
    )}" .iconRight="${
      w.RETRY_ICON
    }" data-testid="view-desktop-connecting-retry-button">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
  }
};
(Vt.styles = [p.globalCss, Nr]),
  Ze([f()], Vt.prototype, "isError", 2),
  (Vt = Ze([h("w3m-desktop-connecting-view")], Vt));
const Zr = g`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
var Hr = Object.defineProperty,
  Br = Object.getOwnPropertyDescriptor,
  Sr = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Br(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Hr(e, a, o), o;
  };
let ue = class extends m {
  onGet(t) {
    u.openHref(t, "_blank");
  }
  render() {
    const t = I.state.recomendedWallets.slice(0, 5),
      e = R.manualWallets().slice(0, 5),
      a = t.length,
      r = e.length;
    return l`<w3m-modal-header title="Get a wallet" data-testid="view-get-wallet-header"></w3m-modal-header><w3m-modal-content data-testid="view-get-wallet-content">${
      a
        ? t.map(
            (o) =>
              l`<div class="w3m-wallet-item" data-testid="view-get-wallet-${
                o.id
              }"><w3m-wallet-image walletId="${o.id}" imageId="${
                o.image_id
              }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                o.name
              }</w3m-text><w3m-button .iconRight="${
                w.ARROW_RIGHT_ICON
              }" .onClick="${() =>
                this.onGet(o.homepage)}" data-testid="view-get-wallet-button-${
                o.id
              }">Get</w3m-button></div></div>`
          )
        : null
    } ${
      r
        ? e.map(
            (o) =>
              l`<div class="w3m-wallet-item" data-testid="view-get-wallet-${
                o.id
              }"><w3m-wallet-image walletId="${
                o.id
              }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                o.name
              }</w3m-text><w3m-button .iconRight="${
                w.ARROW_RIGHT_ICON
              }" .onClick="${() =>
                this.onGet(
                  o.links.universal
                )}" data-testid="view-get-wallet-button-${
                o.id
              }">Get</w3m-button></div></div>`
          )
        : null
    }</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${
      s.openWalletExplorerUrl
    }" .iconRight="${
      w.ARROW_UP_RIGHT_ICON
    }" data-testid="view-get-wallet-explorer-button">Explore Wallets</w3m-button></div>`;
  }
};
(ue.styles = [p.globalCss, Zr]), (ue = Sr([h("w3m-get-wallet-view")], ue));
const Ur = g`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
var zr = Object.defineProperty,
  Vr = Object.getOwnPropertyDescriptor,
  Gr = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Vr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && zr(e, a, o), o;
  };
let ve = class extends m {
  constructor() {
    super(...arguments), (this.learnUrl = "https://ethereum.org/en/wallets/");
  }
  onGet() {
    L.state.enableExplorer ? x.push("GetWallet") : s.openWalletExplorerUrl();
  }
  onLearnMore() {
    u.openHref(this.learnUrl, "_blank");
  }
  render() {
    return l`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${
      w.HELP_CHART_IMG
    } ${w.HELP_PAINTING_IMG} ${
      w.HELP_ETH_IMG
    }</div><w3m-text variant="medium-regular">A home for your digital assetsd</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assetsd like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
      w.HELP_KEY_IMG
    } ${w.HELP_USER_IMG} ${
      w.HELP_LOCK_IMG
    }</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
      w.HELP_COMPAS_IMG
    } ${w.HELP_NOUN_IMG} ${
      w.HELP_DAO_IMG
    }</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(
      this
    )}" .iconLeft="${
      w.WALLET_ICON
    }">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(
      this
    )}" .iconRight="${
      w.ARROW_UP_RIGHT_ICON
    }">Learn More</w3m-button></div></w3m-modal-content>`;
  }
};
(ve.styles = [p.globalCss, Ur]), (ve = Gr([h("w3m-help-view")], ve));
const Fr = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
var qr = Object.defineProperty,
  Kr = Object.getOwnPropertyDescriptor,
  He = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Kr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && qr(e, a, o), o;
  };
let Gt = class extends m {
  constructor() {
    super(),
      (this.isError = !1),
      (this.connector = W.client().getConnectorById("injected")),
      this.openInjectedApp();
  }
  async openInjectedApp() {
    const { ready: t } = this.connector;
    t &&
      ((this.isError = !1),
      await s.handleConnectorConnection("injected", () => {
        this.isError = !0;
      }));
  }
  render() {
    const { name: t, id: e, image_id: a } = u.getWalletRouterData(),
      {
        isMobile: r,
        isDesktop: o,
        isWeb: i,
      } = s.getCachedRouterWalletPlatforms();
    return l`<w3m-modal-header title="${t}" data-testid="view-injected-header"></w3m-modal-header><w3m-modal-content data-testid="view-injected-content"><w3m-connector-waiting walletId="${e}" imageId="${a}" label="${`Continue in ${t}...`}" .isError="${
      this.isError
    }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer data-testid="view-injected-footer"><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="${r}" .isDesktop="${o}" .isWeb="${i}" .isRetry="${!0}"><w3m-button .onClick="${this.openInjectedApp.bind(
      this
    )}" .disabled="${!this.isError}" .iconRight="${
      w.RETRY_ICON
    }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
  }
};
(Gt.styles = [p.globalCss, Fr]),
  He([f()], Gt.prototype, "isError", 2),
  (Gt = He([h("w3m-injected-connecting-view")], Gt));
const Yr = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
var Qr = Object.defineProperty,
  Xr = Object.getOwnPropertyDescriptor,
  Jr = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Xr(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Qr(e, a, o), o;
  };
let be = class extends m {
  onInstall(t) {
    t && u.openHref(t, "_blank");
  }
  render() {
    const {
      name: t,
      id: e,
      image_id: a,
      homepage: r,
    } = u.getWalletRouterData();
    return l`<w3m-modal-header title="${t}" data-testid="view-install-wallet-header"></w3m-modal-header><w3m-modal-content data-testid="view-install-wallet-content"><w3m-connector-waiting walletId="${e}" imageId="${a}" label="Not Detected" .isStale="${!0}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer data-testid="view-install-wallet-footer"><w3m-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</w3m-text><w3m-button .onClick="${() =>
      this.onInstall(r)}" .iconLeft="${
      w.ARROW_DOWN_ICON
    }" data-testid="view-install-wallet-download-button">Download</w3m-button></w3m-info-footer>`;
  }
};
(be.styles = [p.globalCss, Yr]), (be = Jr([h("w3m-install-wallet-view")], be));
const ti = g`w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection{margin-top:-15px}.w3m-note w3m-text{margin-top:15px}.w3m-note w3m-text span{color:var(--w3m-accent-color)}`;
var ei = Object.defineProperty,
  oi = Object.getOwnPropertyDescriptor,
  Be = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? oi(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ei(e, a, o), o;
  };
let Ft = class extends m {
  constructor() {
    super(),
      (this.isError = !1),
      (this.unwatchConnection = void 0),
      this.openMobileApp(),
      (this.unwatchConnection = A.subscribe((t) => {
        this.isError = t.pairingError;
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unwatchConnection) == null || t.call(this);
  }
  onFormatAndRedirect(t, e = !1) {
    const { mobile: a, name: r } = u.getWalletRouterData(),
      o = a == null ? void 0 : a.native,
      i = a == null ? void 0 : a.universal;
    if (o && !e) {
      const n = u.formatNativeUrl(o, t, r);
      u.openHref(n, "_self");
    } else if (i) {
      const n = u.formatUniversalUrl(i, t, r);
      u.openHref(n, "_self");
    }
  }
  openMobileApp(t = !1) {
    A.setPairingError(!1);
    const { pairingUri: e } = A.state,
      a = u.getWalletRouterData();
    s.setRecentWallet(a), this.onFormatAndRedirect(e, t);
  }
  onGoToAppStore(t) {
    t && u.openHref(t, "_blank");
  }
  render() {
    const {
        name: t,
        id: e,
        image_id: a,
        app: r,
        mobile: o,
      } = u.getWalletRouterData(),
      { isWeb: i } = s.getCachedRouterWalletPlatforms(),
      n = r == null ? void 0 : r.ios,
      d = o == null ? void 0 : o.universal;
    return l`<w3m-modal-header title="${t}" data-testid="view-mobile-connecting-header"></w3m-modal-header><w3m-modal-content data-testid="view-mobile-connecting-content"><w3m-connector-waiting walletId="${e}" imageId="${a}" label="Tap 'Open' to continue…" .isError="${
      this.isError
    }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note" data-testid="view-mobile-connecting-footer"><w3m-platform-selection .isWeb="${i}" .isRetry="${!0}"><w3m-button .onClick="${() =>
      this.openMobileApp(!1)}" .iconRight="${
      w.RETRY_ICON
    }">Retry</w3m-button></w3m-platform-selection>${
      d
        ? l`<w3m-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() =>
            this.openMobileApp(!0)}">Try this alternate link</span></w3m-text>`
        : null
    }</w3m-info-footer><w3m-info-footer class="w3m-app-store" data-testid="view-mobile-connecting-footer"><div><w3m-wallet-image walletId="${e}" imageId="${a}"></w3m-wallet-image><w3m-text>${`Get ${t}`}</w3m-text></div><w3m-button .iconRight="${
      w.ARROW_RIGHT_ICON
    }" .onClick="${() =>
      this.onGoToAppStore(
        n
      )}" variant="ghost" data-testid="view-mobile-connecting-app-store-button">App Store</w3m-button></w3m-info-footer>`;
  }
};
(Ft.styles = [p.globalCss, ti]),
  Be([f()], Ft.prototype, "isError", 2),
  (Ft = Be([h("w3m-mobile-connecting-view")], Ft));
const ai = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
var ri = Object.defineProperty,
  ii = Object.getOwnPropertyDescriptor,
  ni = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ii(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && ri(e, a, o), o;
  };
let fe = class extends m {
  render() {
    const { name: t, id: e, image_id: a } = u.getWalletRouterData(),
      {
        isInjected: r,
        isDesktop: o,
        isWeb: i,
      } = s.getCachedRouterWalletPlatforms();
    return l`<w3m-modal-header title="${t}" .onAction="${
      s.handleUriCopy
    }" .actionIcon="${
      w.COPY_ICON
    }" data-testid="view-mobile-qr-connecting-header"></w3m-modal-header><w3m-modal-content data-testid="view-mobile-qr-connecting-content"><w3m-walletconnect-qr walletId="${e}" imageId="${a}"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer data-testid="view-mobile-qr-connecting-footer"><w3m-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</w3m-text><w3m-platform-selection .isDesktop="${o}" .isInjected="${r}" .isWeb="${i}"></w3m-platform-selection></w3m-info-footer>`;
  }
};
(fe.styles = [p.globalCss, ai]),
  (fe = ni([h("w3m-mobile-qr-connecting-view")], fe));
var li = Object.defineProperty,
  si = Object.getOwnPropertyDescriptor,
  ci = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? si(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && li(e, a, o), o;
  };
let xe = class extends m {
  render() {
    return l`<w3m-modal-header title="Scan the code" .onAction="${s.handleUriCopy}" .actionIcon="${w.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`;
  }
};
(xe.styles = [p.globalCss]), (xe = ci([h("w3m-qrcode-view")], xe));
const di = g`div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center}`;
var Ge = Object.defineProperty,
  mi = Object.defineProperties,
  hi = Object.getOwnPropertyDescriptor,
  wi = Object.getOwnPropertyDescriptors,
  Se = Object.getOwnPropertySymbols,
  pi = Object.prototype.hasOwnProperty,
  gi = Object.prototype.propertyIsEnumerable,
  Ue = (t, e, a) =>
    e in t
      ? Ge(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a),
  ui = (t, e) => {
    for (var a in e || (e = {})) pi.call(e, a) && Ue(t, a, e[a]);
    if (Se) for (var a of Se(e)) gi.call(e, a) && Ue(t, a, e[a]);
    return t;
  },
  vi = (t, e) => mi(t, wi(e)),
  ye = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? hi(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Ge(e, a, o), o;
  };
let Wt = class extends m {
  constructor() {
    super(),
      (this.connectedChains = "ALL"),
      (this.isUnsupportedChains = !1),
      this.getConnectedChainIds();
  }
  async getConnectedChainIds() {
    this.connectedChains = await W.client().getConnectedChainIds();
  }
  async onSelectChain(t) {
    try {
      const { selectedChain: e, isPreferInjected: a } = O.state,
        { isConnected: r } = k.state;
      r
        ? (e == null ? void 0 : e.id) === t.id
          ? x.reset("Account")
          : s.getWagmiWalletType() === '"walletConnect"'
          ? (await W.client().switchNetwork({ chainId: t.id }),
            x.reset("Account"))
          : x.push("SwitchNetwork", { SwitchNetwork: t })
        : a
        ? (O.setSelectedChain(t), D.close())
        : (O.setSelectedChain(t), x.push("ConnectWallet"));
    } catch (e) {
      console.error(e), j.openToast("Unsupported chain", "error");
    }
  }
  isUnsuportedChainId(t) {
    return typeof this.connectedChains == "string" &&
      this.connectedChains !== "ALL"
      ? ((this.isUnsupportedChains = !0), !0)
      : Array.isArray(this.connectedChains) &&
        !this.connectedChains.includes(String(t))
      ? ((this.isUnsupportedChains = !0), !0)
      : !1;
  }
  render() {
    const { chains: t } = O.state,
      e =
        t == null
          ? void 0
          : t.map((r) =>
              vi(ui({}, r), { unsupported: this.isUnsuportedChainId(r.id) })
            ),
      a =
        e == null
          ? void 0
          : e.sort((r, o) => Number(r.unsupported) - Number(o.unsupported));
    return l`<w3m-modal-header title="Select network" data-testid="view-select-network-header"></w3m-modal-header><w3m-modal-content data-testid="view-select-network-content"><div>${
      a == null
        ? void 0
        : a.map(
            (r) =>
              l`<w3m-network-button name="${r.name}" chainId="${
                r.id
              }" .unsupported="${r.unsupported}" .onClick="${async () =>
                this.onSelectChain(
                  r
                )}" data-testid="view-select-network-button-${r.id}">${
                r.name
              }</w3m-network-button>`
          )
    }</div></w3m-modal-content>${
      this.isUnsupportedChains
        ? l`<w3m-info-footer><w3m-text color="secondary" variant="small-thin">Your connected wallet may not support some of the networks available for this dapp</w3m-text></w3m-info-footer>`
        : null
    }`;
  }
};
(Wt.styles = [p.globalCss, di]),
  ye([f()], Wt.prototype, "connectedChains", 2),
  ye([f()], Wt.prototype, "isUnsupportedChains", 2),
  (Wt = ye([h("w3m-select-network-view")], Wt));
const bi = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
var fi = Object.defineProperty,
  xi = Object.getOwnPropertyDescriptor,
  ze = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? xi(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && fi(e, a, o), o;
  };
let qt = class extends m {
  constructor() {
    super(), (this.isError = !1), this.onSwitchNetwork();
  }
  async onSwitchNetwork() {
    try {
      this.isError = !1;
      const t = u.getSwitchNetworkRouterData();
      await W.client().switchNetwork({ chainId: t.id }),
        O.setSelectedChain(t),
        x.reset("Account");
    } catch {
      this.isError = !0;
    }
  }
  render() {
    const { id: t, name: e } = u.getSwitchNetworkRouterData();
    return l`<w3m-modal-header title="${`Connect to ${e}`}" data-testid="view-switch-network-header"></w3m-modal-header><w3m-modal-content data-testid="view-switch-network-content"><w3m-network-waiting chainId="${t}" label="Approve in your wallet" .isError="${
      this.isError
    }"></w3m-network-waiting></w3m-modal-content><w3m-info-footer data-testid="view-switch-network-footer"><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="${this.onSwitchNetwork.bind(
      this
    )}" .disabled="${!this.isError}" .iconRight="${
      w.RETRY_ICON
    }" data-testid="view-switch-network-retry-button">Try Again</w3m-button></w3m-info-footer>`;
  }
};
(qt.styles = [p.globalCss, bi]),
  ze([f()], qt.prototype, "isError", 2),
  (qt = ze([h("w3m-switch-network-view")], qt));
const yi = g`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var Ci = Object.defineProperty,
  ki = Object.getOwnPropertyDescriptor,
  Mt = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? ki(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Ci(e, a, o), o;
  };
const Ce = 40;
let at = class extends m {
  constructor() {
    super(...arguments),
      (this.loading = !I.state.wallets.listings.length),
      (this.firstFetch = !I.state.wallets.listings.length),
      (this.search = ""),
      (this.endReached = !1),
      (this.intersectionObserver = void 0),
      (this.searchDebounce = s.debounce((t) => {
        t.length >= 1
          ? ((this.firstFetch = !0),
            (this.endReached = !1),
            (this.search = t),
            I.resetSearch(),
            this.fetchWallets())
          : this.search &&
            ((this.search = ""),
            (this.endReached = this.isLastPage()),
            I.resetSearch());
      }));
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var t;
    (t = this.intersectionObserver) == null || t.disconnect();
  }
  get placeholderEl() {
    return s.getShadowRootElement(this, ".w3m-placeholder-block");
  }
  createPaginationObserver() {
    (this.intersectionObserver = new IntersectionObserver(([t]) => {
      t.isIntersecting &&
        !(this.search && this.firstFetch) &&
        this.fetchWallets();
    })),
      this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: t, search: e } = I.state,
      { listings: a, total: r } = this.search ? e : t;
    return r <= Ce || a.length >= r;
  }
  async fetchWallets() {
    const { wallets: t, search: e, injectedWallets: a } = I.state,
      { listings: r, total: o, page: i } = this.search ? e : t;
    if (!this.endReached && (this.firstFetch || (o > Ce && r.length < o)))
      try {
        this.loading = !0;
        const { listings: n } = await I.getWallets({
            page: this.firstFetch ? 1 : i + 1,
            entries: Ce,
            search: this.search,
            version: 2,
          }),
          d = n.map((y) => s.getWalletIcon(y)),
          v = a.map((y) => s.getWalletIcon(y));
        await Promise.all([
          ...d.map(async (y) => s.preloadImage(y)),
          ...v.map(async (y) => s.preloadImage(y)),
          u.wait(300),
        ]),
          (this.endReached = this.isLastPage());
      } catch (n) {
        console.error(n), j.openToast(s.getErrorMessage(n), "error");
      } finally {
        (this.loading = !1), (this.firstFetch = !1);
      }
  }
  onConnect(t) {
    u.isAndroid() ? s.handleMobileLinking(t) : s.goToConnectingView(t);
  }
  onSearchChange(t) {
    const { value: e } = t.target;
    this.searchDebounce(e);
  }
  render() {
    const { wallets: t, search: e } = I.state,
      { listings: a } = this.search ? e : t,
      r = this.loading && !a.length,
      o = this.search.length >= 3;
    let i = M.injectedWalletsTemplate(),
      n = M.manualWalletsTemplate(),
      d = M.recomendedWalletsTemplate(!0);
    o &&
      ((i = i.filter(({ values: Z }) => s.caseSafeIncludes(Z[0], this.search))),
      (n = n.filter(({ values: Z }) => s.caseSafeIncludes(Z[0], this.search))),
      (d = d.filter(({ values: Z }) => s.caseSafeIncludes(Z[0], this.search)))),
      (i = i.filter(
        (Z) => !d.find((_) => s.caseSafeIncludes(Z.values[0], _.values[0]))
      ));
    const v = !this.loading && !a.length && !i.length && !d.length,
      y = Math.max(i.length, a.length),
      H = {
        "w3m-loading": r,
        "w3m-end-reached": this.endReached || !this.loading,
        "w3m-empty": v,
      };
    return l`<w3m-modal-header data-testid="view-wallet-explorer-header"><w3m-search-input .onChange="${this.onSearchChange.bind(
      this
    )}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${P(
      H
    )}" data-testid="view-wallet-explorer-content"><div class="w3m-grid">${
      r ? null : d
    } ${
      r
        ? null
        : [...Array(y)].map(
            (Z, _) =>
              l`${n[_]} ${i[_]} ${
                a[_]
                  ? l`<w3m-wallet-button imageId="${a[_].image_id}" name="${
                      a[_].name
                    }" walletId="${a[_].id}" .onClick="${() =>
                      this.onConnect(
                        a[_]
                      )}" data-testid="view-wallet-explorer-button-${
                      a[_].id
                    }"></w3m-wallet-button>`
                  : null
              }`
          )
    }</div><div class="w3m-placeholder-block">${
      v
        ? l`<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>`
        : null
    } ${
      !v && this.loading ? l`<w3m-spinner></w3m-spinner>` : null
    }</div></w3m-modal-content>`;
  }
};
(at.styles = [p.globalCss, yi]),
  Mt([f()], at.prototype, "loading", 2),
  Mt([f()], at.prototype, "firstFetch", 2),
  Mt([f()], at.prototype, "search", 2),
  Mt([f()], at.prototype, "endReached", 2),
  (at = Mt([h("w3m-wallet-explorer-view")], at));
const $i = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
var Oi = Object.defineProperty,
  Ii = Object.getOwnPropertyDescriptor,
  Ve = (t, e, a, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Ii(e, a) : e, i = t.length - 1, n;
      i >= 0;
      i--
    )
      (n = t[i]) && (o = (r ? n(e, a, o) : n(o)) || o);
    return r && o && Oi(e, a, o), o;
  };
let Kt = class extends m {
  constructor() {
    super(),
      (this.isError = !1),
      (this.unwatchConnection = void 0),
      this.openWebWallet(),
      (this.unwatchConnection = A.subscribe((t) => {
        this.isError = t.pairingError;
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unwatchConnection) == null || t.call(this);
  }
  onFormatAndRedirect(t) {
    const { desktop: e, name: a } = u.getWalletRouterData(),
      r = e == null ? void 0 : e.universal;
    if (r) {
      const o = u.formatUniversalUrl(r, t, a);
      u.openHref(o, "_blank");
    }
  }
  openWebWallet() {
    A.setPairingError(!1);
    const { pairingUri: t } = A.state,
      e = u.getWalletRouterData();
    s.setRecentWallet(e), this.onFormatAndRedirect(t);
  }
  render() {
    const { name: t, id: e, image_id: a } = u.getWalletRouterData(),
      {
        isMobile: r,
        isInjected: o,
        isDesktop: i,
      } = s.getCachedRouterWalletPlatforms(),
      n = u.isMobile();
    return l`<w3m-modal-header title="${t}" .onAction="${
      s.handleUriCopy
    }" .actionIcon="${
      w.COPY_ICON
    }" data-testid="view-web-connecting-header"></w3m-modal-header><w3m-modal-content data-testid="view-web-connecting-content"><w3m-connector-waiting walletId="${e}" imageId="${a}" label="${`Continue in ${t}...`}" .isError="${
      this.isError
    }" data-testid="view-web-connecting-waiting"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer data-testid="view-web-connecting-footer"><w3m-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</w3m-text><w3m-platform-selection .isMobile="${r}" .isInjected="${
      n ? !1 : o
    }" .isDesktop="${
      n ? !1 : i
    }" .isRetry="${!0}"><w3m-button .onClick="${this.openWebWallet.bind(
      this
    )}" .iconRight="${
      w.RETRY_ICON
    }" data-testid="view-web-connecting-retry-button">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
  }
};
(Kt.styles = [p.globalCss, $i]),
  Ve([f()], Kt.prototype, "isError", 2),
  (Kt = Ve([h("w3m-web-connecting-view")], Kt));
export {
  Ot as W3mAccountButton,
  mt as W3mConnectButton,
  et as W3mCoreButton,
  Pt as W3mModal,
  pt as W3mNetworkSwitch,
  F as W3mQrCode,
};
