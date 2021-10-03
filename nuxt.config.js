export default {
  target: 'static', // default is 'server'
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Insplosion',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'author', name: 'author', content: 'Webcomum - Online Agency' },
      { hid: 'og:title', name: 'og:title', content: 'Teste' },
      { hid: 'og:type', name: 'og:type', content: '' },
      { hid: 'og:url', name: 'og:url', content: '' },
      { hid: 'og:description', name: 'og:description', content: '' },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'twitter_title', name: 'twitter:title', content: 'Teste' },
      { hid: 'twitter_image', name: 'twitter:image', content: '' },
      { hid: 'twitter:image-alt', name: 'twitter:image:alt', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      //ADD EXTRA FAVICONS
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~plugins/main.js', mode: 'client'},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: false, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  //router
}
