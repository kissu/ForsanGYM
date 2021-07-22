import webpack from "webpack";

require('dotenv').config({
  path:__dirname+'/.env'
})

export default {

  server : {
    host:"127.0.0.1",
    port: 8001
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Forsan GYM',
    titleTemplate: 'Forsan GYM'+ ' | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
    ],
    script: [
      { src: '/js/jquery-3.3.1.min.js' },
      { src: '/js/popper.min.js' },
      // { src: '/js/bootstrap.min.js' },
      { src: '/js/main.js' },
      { src: '/js/plugins/bootstrap-datepicker.min.js'},
      { src: '/js/plugins/bootstrap-notify.min.js' },
      { src: '/js/plugins/jquery.dataTables.min.js' },
      { src: '/js/plugins/sweetalert.min.js' },
      { src: '/js/plugins/select2.min.js' },
      { src: '/js/plugins/moment.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~plugins/bootstrap', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/router',
    "vue-sweetalert2/nuxt"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
    ],
    standalone: true
  },

}
