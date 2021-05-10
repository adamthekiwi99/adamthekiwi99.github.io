// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-templates-index-tsx": () => import("./../../../src/templates/index.tsx" /* webpackChunkName: "component---src-templates-index-tsx" */),
  "component---src-templates-success-tsx": () => import("./../../../src/templates/success.tsx" /* webpackChunkName: "component---src-templates-success-tsx" */)
}

