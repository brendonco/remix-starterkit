import {
  Scripts,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XDPOD75K.js";

// browser-route-module:/Users/brendonco/projects/bc/remix-starterkit/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();
var React = __toESM(require_react());
function App() {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Remix Starter Kit")), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("p", null, "This is a remix app. Hooray!"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setCount((c) => c + 1)
  }, count), /* @__PURE__ */ React.createElement(Scripts, null)));
}
var root_default = App;
export {
  root_default as default
};
//# sourceMappingURL=/build/root-CWF5H535.js.map
