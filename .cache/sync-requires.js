const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-templates-index-tsx": hot(preferDefault(require("/home/adam/Documents/web/gatsby-theme-kiwi-shop/src/templates/index.tsx"))),
  "component---src-templates-success-tsx": hot(preferDefault(require("/home/adam/Documents/web/gatsby-theme-kiwi-shop/src/templates/success.tsx")))
}

