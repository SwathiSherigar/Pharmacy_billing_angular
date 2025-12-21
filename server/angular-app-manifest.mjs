
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1555, hash: '69f9407ece94ee0a2aae8af3824f1a38ee56338a7961bc7440caf7c6eb31bcb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: '9bb6967b5ae89486a54b4526441a5b02d778a8fd76463a8ee7c3376504553f2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2000, hash: 'e83f79a8cc40d69957d527e6fb5c4197b2e8cf30e958b38fcd58c72e80b3a02b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M72KABLN.css': {size: 3890, hash: 'avEEOo6frLw', text: () => import('./assets-chunks/styles-M72KABLN_css.mjs').then(m => m.default)}
  },
};
