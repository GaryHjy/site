importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "official",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/04ab9bdfa41358695284.css",
    "revision": "894b8b110782377c879de9a3f737535e"
  },
  {
    "url": "/_nuxt/15972d0b17c99b93fbe4.css",
    "revision": "b5ff4037aa76ca90f9128f1d7546d1b7"
  },
  {
    "url": "/_nuxt/3414285666229847a9a5.css",
    "revision": "ab450360142ab1daaaacb0cc20ed7039"
  },
  {
    "url": "/_nuxt/361f0fe37481969275a5.js",
    "revision": "a039db31d4cd606e8ba1ca6f44e16ce1"
  },
  {
    "url": "/_nuxt/57e7d3ff3c670735e76a.js",
    "revision": "dc3673a771808585a4e0d3b896ca86b2"
  },
  {
    "url": "/_nuxt/7ba530b8eccc739e76c7.js",
    "revision": "76bb7738d684d7d0e2b065ffdaa44801"
  },
  {
    "url": "/_nuxt/831af6a3a9419068cc06.css",
    "revision": "3a4b68ca4e6edfd416ecf996ad63ece2"
  },
  {
    "url": "/_nuxt/85fe2b6cf85ab1687f61.css",
    "revision": "96dbe7ba287f89aa64c6e86094528bfc"
  },
  {
    "url": "/_nuxt/94a39647d6c10243b84d.js",
    "revision": "cb424bd0ea8038d0b17b69e4c0d07f77"
  },
  {
    "url": "/_nuxt/9958429c0545f3417694.js",
    "revision": "a60163f2c41ce7c60744ea14639043bc"
  },
  {
    "url": "/_nuxt/a293b405d33edbc19830.js",
    "revision": "7d406a97d1448a7bae759aa77e534aa3"
  },
  {
    "url": "/_nuxt/ac83a3128bd45e46b8a1.css",
    "revision": "1bbab2d743ccd0ecfd1aadbb4b65f438"
  },
  {
    "url": "/_nuxt/d501e909fa9c5094f2c5.css",
    "revision": "b827d84a11c55f281660d79cf3c08a0e"
  },
  {
    "url": "/_nuxt/eb9babb9eddadd031d86.js",
    "revision": "b72de99dba91ff5f3830d3600885f1ae"
  },
  {
    "url": "/_nuxt/f8abbb87092640787013.css",
    "revision": "69183dc5a5caa7b2bd2673f81127a74f"
  },
  {
    "url": "/_nuxt/f903e83ba966ac5ffa64.js",
    "revision": "e0186a76d9f5b2c004120d02c63d42dc"
  },
  {
    "url": "/_nuxt/fa91fdd16fa7d1d139ea.js",
    "revision": "5a13958dbb28816554b1cd0fa6a04235"
  },
  {
    "url": "/_nuxt/fba51e6bf6187e2c15a4.js",
    "revision": "c148c301a8b0caa949bcbb3694ff9fcf"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

