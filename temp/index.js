import App from '../src/index.vue'
import mixin from '../src/mixins/mixins.js'
Vue.mixin(mixin)
App.el = '#root'
new Vue(App)
