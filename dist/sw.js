importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "official",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/0a8f3fa9c061079e3992.css",
    "revision": "704248dd5dca33082c0c9a1c39bb4d05"
  },
  {
    "url": "/_nuxt/19f574ce303044974f29.js",
    "revision": "c3e92a7a1479e8a60b1ecb5acc19c246"
  },
  {
    "url": "/_nuxt/30be40acebb74d20c27e.css",
    "revision": "83e81679b47b0e8376e7cc1e328422e2"
  },
  {
    "url": "/_nuxt/3d550b4f7bae35d041d1.css",
    "revision": "b827d84a11c55f281660d79cf3c08a0e"
  },
  {
    "url": "/_nuxt/4b7f3620f41a78fa816a.js",
    "revision": "a270591302b9d7ca114a1532c0edeb47"
  },
  {
    "url": "/_nuxt/589ebac60920ae75459f.css",
    "revision": "3a4b68ca4e6edfd416ecf996ad63ece2"
  },
  {
    "url": "/_nuxt/6e1d5892c42c0344c0ea.css",
    "revision": "1bbab2d743ccd0ecfd1aadbb4b65f438"
  },
  {
    "url": "/_nuxt/7534e5f3fa5577d5f7b8.js",
    "revision": "ce4a1d3c77eea77d83694d3e1f3aea04"
  },
  {
    "url": "/_nuxt/94a39647d6c10243b84d.js",
    "revision": "4883e3847c69990e8c56acfbb230213e"
  },
  {
    "url": "/_nuxt/a5efa32e86ccc5b7e066.css",
    "revision": "69183dc5a5caa7b2bd2673f81127a74f"
  },
  {
    "url": "/_nuxt/a92b684e025ef1e70b2e.js",
    "revision": "c313eb3f328aca385f04eab343f632a5"
  },
  {
    "url": "/_nuxt/b880fa300afb400d2d9b.js",
    "revision": "6ef15af566150a01777f3b513fb51700"
  },
  {
    "url": "/_nuxt/be6f950926be4aca17a3.js",
    "revision": "407b01d7bc657f4bfd3f1785f06419ec"
  },
  {
    "url": "/_nuxt/ce3ab8800e372b3eae0c.js",
    "revision": "122398106b37e17a8af5eb3930188335"
  },
  {
    "url": "/_nuxt/f8193ebbfda42f4cfbab.css",
    "revision": "96dbe7ba287f89aa64c6e86094528bfc"
  },
  {
    "url": "/_nuxt/fba51e6bf6187e2c15a4.js",
    "revision": "30e553793bc2e848417b5aefd9fdc4dd"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

